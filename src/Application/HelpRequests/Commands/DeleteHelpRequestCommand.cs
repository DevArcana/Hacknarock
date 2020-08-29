using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.HelpRequests.Models;
using Application.Infrastructure.Persistance;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.HelpRequests.Commands
{
    public class DeleteHelpRequestCommand : IRequest
    {
        public int Id { get; set; } // any validation?

        public DeleteHelpRequestCommand(int id)
        {
            Id = id;
        }
    }

    public class DeleteHelpRequestCommandHandler : IRequestHandler<DeleteHelpRequestCommand>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public DeleteHelpRequestCommandHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteHelpRequestCommand request, CancellationToken cancellationToken)
        {
            var helpRequest = await _context.HelpRequests.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            // TODO: What if helpRequest is null?

            _context.Remove(helpRequest);
            await _context.SaveChangesAsync(cancellationToken);

            return new Unit();
        }
    }
}
