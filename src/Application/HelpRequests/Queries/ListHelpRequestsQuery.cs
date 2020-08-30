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
        public string? PhoneNumber { get; set; }
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

        public Task<PagedResults<HelpRequestListDto>> Handle(ListHelpRequestsQuery request, CancellationToken cancellationToken)
        {
            return _context.HelpRequests.AsNoTracking()
                .Include(x => x.Submitter)
                .Include(x => x.Offers)
                .ThenInclude(x => x.User)
                .Where(x => x.Submitter.PhoneNumber != request.PhoneNumber && x.Offers.All(y => y.User.PhoneNumber != request.PhoneNumber))
                .OrderByDescending(x => x.SubmittedAt)
                .ProjectTo<HelpRequestListDto>(_mapper.ConfigurationProvider)
                .PaginateAsync(request, cancellationToken);
        }
    }
}
