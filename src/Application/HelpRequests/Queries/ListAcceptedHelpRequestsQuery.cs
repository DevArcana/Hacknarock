using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.HelpRequests.Models;
using Application.Infrastructure.Common.Pagination;
using Application.Infrastructure.Persistance;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.HelpRequests.Queries
{
    public class ListAcceptedHelpRequestsQuery : PaginationOptions, IRequest<PagedResults<HelpRequestListDto>>
    {
        public string? PhoneNumber { get; set; }
    }

    public class ListAcceptedHelpRequestsQueryHandler : IRequestHandler<ListAcceptedHelpRequestsQuery, PagedResults<HelpRequestListDto>>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ListAcceptedHelpRequestsQueryHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PagedResults<HelpRequestListDto>> Handle(ListAcceptedHelpRequestsQuery request, CancellationToken cancellationToken)
        {
            var user = await _context.Users
                .AsNoTracking()
                .Include(x => x.Offers)
                .ThenInclude(x => x.Request)
                .FirstOrDefaultAsync(x => x.PhoneNumber == request.PhoneNumber ,cancellationToken);

            return await user.Offers.AsQueryable()
                .Select(x => x.Request)
                .ProjectTo<HelpRequestListDto>(_mapper.ConfigurationProvider)
                .PaginateAsync(request, cancellationToken);
        }
    }
}
