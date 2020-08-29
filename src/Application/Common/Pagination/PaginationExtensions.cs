using System.Linq;

namespace Application.Common.Pagination
{
    public static class PaginationExtensions
    {
        public static PagedResults<T> Paginate<T>(this IQueryable<T> queryable, PaginationOptions options) =>
            PagedResults<T>.Paginate(queryable, options);
    }
}