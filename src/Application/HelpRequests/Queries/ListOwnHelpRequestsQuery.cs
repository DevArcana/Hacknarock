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
    public class ListOwnHelpRequestsQuery : PaginationOptions, IRequest<PagedResults<HelpRequestWithOffersDto>>
    {
        public string? PhoneNumber { get; set; }
    }

    public class ListOwnHelpRequestsQueryHandler : IRequestHandler<ListOwnHelpRequestsQuery, PagedResults<HelpRequestWithOffersDto>>
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ListOwnHelpRequestsQueryHandler(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public Task<PagedResults<HelpRequestWithOffersDto>> Handle(ListOwnHelpRequestsQuery request, CancellationToken cancellationToken)
        {
            return _context.HelpRequests.AsNoTracking()
                .Include(x => x.Submitter)
                .Include(x => x.Offers)
                .ThenInclude(x => x.User)
                .Where(x => x.Submitter.PhoneNumber == request.PhoneNumber)
                .OrderByDescending(x => x.SubmittedAt)
                .ProjectTo<HelpRequestWithOffersDto>(_mapper.ConfigurationProvider)
                .PaginateAsync(request, cancellationToken);
        }
    }
}
