using System;
using System.Threading;
using System.Threading.Tasks;
using Application.HelpRequests.Models;
using Application.Infrastructure.Persistance;
using AutoMapper;
using FluentValidation;
using MediatR;

namespace Application.HelpRequests.Commands
{
    public class CreateHelpRequestCommand : IRequest<HelpRequestDto>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? Deadline { get; set; }
        public int Urgency { get; set; }
    }

    public class CreateHelpRequestCommandValidator : AbstractValidator<CreateHelpRequestCommand>
    {
        public CreateHelpRequestCommandValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .MinimumLength(1)
                .MaximumLength(100);

            RuleFor(x => x.Description)
                .NotEmpty()
                .MinimumLength(1)
                .MaximumLength(1000);

            RuleFor(x => x.Urgency)
                .GreaterThanOrEqualTo(0)
                .LessThanOrEqualTo(3);
        }
    }

    public class CreateHelpRequestCommandHandler : IRequestHandler<CreateHelpRequestCommand, HelpRequestDto>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public CreateHelpRequestCommandHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        public async Task<HelpRequestDto> Handle(CreateHelpRequestCommand request, CancellationToken cancellationToken)
        {
            var helpRequest = new HelpRequest(request.Title, request.Description, DateTime.UtcNow, request.Deadline, request.Urgency);

            _context.Add(helpRequest);
            await _context.SaveChangesAsync(cancellationToken);

            return _mapper.Map<HelpRequestDto>(helpRequest);
        }
    }
}