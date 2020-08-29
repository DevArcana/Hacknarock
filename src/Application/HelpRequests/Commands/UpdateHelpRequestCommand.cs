using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading;
using System.Threading.Tasks;
using Application.HelpRequests.Models;
using Application.Infrastructure.Persistance;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.HelpRequests.Commands
{
    public class UpdateHelpRequestCommand : IRequest<HelpRequestDto?>
    {
        public int Id { get; set; } // any validation?
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? Deadline { get; set; }
        public int Urgency { get; set; }
    }

    public class UpdateHelpRequestCommandValidator : AbstractValidator<UpdateHelpRequestCommand>
    {
        public UpdateHelpRequestCommandValidator()
        {
            RuleFor(x => x.Title).NotEmpty().MinimumLength(1).MaximumLength(100);

            RuleFor(x => x.Description).NotEmpty().MinimumLength(1).MaximumLength(1000);

            RuleFor(x => x.Urgency).GreaterThanOrEqualTo(0).LessThanOrEqualTo(3);
        }
    }

    public class UpdateHelpRequestCommandHandler : IRequestHandler<UpdateHelpRequestCommand, HelpRequestDto?>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public UpdateHelpRequestCommandHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<HelpRequestDto?> Handle(UpdateHelpRequestCommand request, CancellationToken cancellationToken)
        {
            var helpRequest = await _context.HelpRequests.Where(x => x.Id == request.Id)
                                            .FirstOrDefaultAsync(cancellationToken);

            if (helpRequest == null)
            {
                return null;
            }

            helpRequest.Title = request.Title;
            helpRequest.Description = request.Description;
            helpRequest.Urgency = request.Urgency;

            if (request.Deadline != null)
            {
                helpRequest.Deadline = request.Deadline;
            }

            await _context.SaveChangesAsync(cancellationToken);

            return _mapper.Map<HelpRequestDto?>(helpRequest);
        }
    }
}
