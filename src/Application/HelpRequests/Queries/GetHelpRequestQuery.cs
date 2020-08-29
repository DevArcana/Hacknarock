using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.HelpRequests.Models;
using Application.Infrastructure.Persistance;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.HelpRequests.Queries
{
    public class GetHelpRequestQuery : IRequest<HelpRequestDto>
    {
        public int Id { get; set; }

        public GetHelpRequestQuery(int id)
        {
            Id = id;
        }
    }

    public class GetHelpRequestQueryHandler : IRequestHandler<GetHelpRequestQuery, HelpRequestDto>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public GetHelpRequestQueryHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<HelpRequestDto> Handle(GetHelpRequestQuery request, CancellationToken cancellationToken)
        {
            var helpRequest = await _context.HelpRequests.AsNoTracking()
                                            .Where(x => x.Id == request.Id)
                                            .ProjectTo<HelpRequestDto>(_mapper.ConfigurationProvider)
                                            .FirstOrDefaultAsync(cancellationToken);

            return helpRequest;
        }
    }
}
