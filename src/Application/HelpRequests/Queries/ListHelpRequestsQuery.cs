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
    public class ListHelpRequestsQuery : PaginationOptions, IRequest<PagedResults<HelpRequestListDto>>
    {

    }

    public class ListHelpRequestsQueryHandler : IRequestHandler<ListHelpRequestsQuery, PagedResults<HelpRequestListDto>>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ListHelpRequestsQueryHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PagedResults<HelpRequestListDto>> Handle(ListHelpRequestsQuery request, CancellationToken cancellationToken)
        {
            var helpRequests = await _context.HelpRequests.AsNoTracking()
                                             .OrderByDescending(x => x.SubmittedAt)
                                             .ProjectTo<HelpRequestListDto>(_mapper.ConfigurationProvider)
                                             .PaginateAsync(request, cancellationToken);

            return helpRequests;
        }
    }
}
