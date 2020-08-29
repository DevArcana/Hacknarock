using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Infrastructure.Common.Pagination
{
    public static class PaginationExtensions
    {
        public static PagedResults<T> Paginate<T>(this IQueryable<T> queryable, PaginationOptions options) =>
            PagedResults<T>.Paginate(queryable, options);

        public static async Task<PagedResults<T>> PaginateAsync<T>(this IQueryable<T> queryable,
                                                                   PaginationOptions options,
                                                                   CancellationToken token) =>
            await PagedResults<T>.PaginateAsync(queryable, options, token);
    }
}