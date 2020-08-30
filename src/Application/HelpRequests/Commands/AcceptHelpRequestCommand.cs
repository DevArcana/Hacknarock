using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.HelpOffers;
using Application.Infrastructure.Common.Exceptions;
using Application.Infrastructure.Persistance;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.HelpRequests.Commands
{
    public class AcceptHelpRequestCommand : IRequest<bool>
    {
        public int RequestId { get; set; }
        public string? PhoneNumber { get; set; }
        public bool Accept { get; set; }
    }

    public class AcceptHelpRequestCommandHandler : IRequestHandler<AcceptHelpRequestCommand, bool>
    {
        private readonly AppDbContext _context;

        public AcceptHelpRequestCommandHandler(AppDbContext context)
        {
            _context = context;
        }
        
        public async Task<bool> Handle(AcceptHelpRequestCommand request, CancellationToken cancellationToken)
        {
            var user = await _context.Users
                .Include(x => x.Offers)
                .ThenInclude(x => x.Request)
                .FirstOrDefaultAsync(x => x.PhoneNumber == request.PhoneNumber, cancellationToken);
            var helpRequest = await _context.HelpRequests.FirstOrDefaultAsync(x => x.Id == request.RequestId, cancellationToken);
            
            if (helpRequest == null) throw new NotFoundException();

            if (request.Accept)
            {
                if (user.Offers.Any(x => x.Request.Id == helpRequest.Id))
                {
                    return false;
                }
            
                user.Offers.Add(new HelpOffer(user.Id, helpRequest.Id));
                await _context.SaveChangesAsync(cancellationToken);
            }
            else
            {
                var offer = user.Offers.FirstOrDefault(x => x.RequestId == request.RequestId);

                if (offer == null)
                {
                    return false;
                }

                user.Offers.Remove(offer);
                await _context.SaveChangesAsync(cancellationToken);
            }
            
            return true;
        }
    }
}