using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Pagination
{
    public class PagedResults<T>
    {
        public IEnumerable<T> Results { get; }

        public int TotalPagesCount { get; }
        public int TotalItemsCount { get; }
        public int ItemsCount { get; }
        
        public bool HasNextPage { get; }
        public bool HasPreviousPage { get; }

        public int Page { get; }
        public int PageSize { get; }
        
        private PagedResults(IEnumerable<T> results, int totalItemsCount, int page, int pageSize)
        {
            Results = results;

            TotalItemsCount = totalItemsCount;
            ItemsCount = results.Count();

            Page = page;
            PageSize = pageSize;

            TotalPagesCount = (int) Math.Ceiling((double) totalItemsCount / pageSize);
            
            HasNextPage = Page < PageSize;
            HasPreviousPage = Page > 1;
        }

        private static void VerifyPaginationOptions(PaginationOptions paginationOptions)
        {
            if (paginationOptions.Page < 1)
            {
                throw new ArgumentOutOfRangeException(nameof(paginationOptions.Page), paginationOptions.Page, "Page must be greater than or equal 1");
            }
            
            if (paginationOptions.PageSize < 1)
            {
                throw new ArgumentOutOfRangeException(nameof(paginationOptions.PageSize), paginationOptions.PageSize, "PageSize must be greater than or equal 1");
            }
        }
        
        public static PagedResults<T> Paginate(IQueryable<T> queryable, PaginationOptions paginationOptions)
        {
            VerifyPaginationOptions(paginationOptions);
            
            var results = queryable
                .Skip((1 - paginationOptions.Page) * paginationOptions.PageSize)
                .Take(paginationOptions.PageSize)
                .ToList();

            var totalItemsCount = queryable.Count();
            
            return new PagedResults<T>(results, totalItemsCount, paginationOptions.Page, paginationOptions.PageSize);
        }
        
        public static async Task<PagedResults<T>> PaginateAsync(IQueryable<T> queryable, PaginationOptions paginationOptions, CancellationToken cancellationToken = default)
        {
            VerifyPaginationOptions(paginationOptions);

            var results = await queryable
                .Skip((1 - paginationOptions.Page) * paginationOptions.PageSize)
                .Take(paginationOptions.PageSize)
                .ToListAsync(cancellationToken);

            var totalItemsCount = await queryable.CountAsync(cancellationToken);
            
            return new PagedResults<T>(results, totalItemsCount, paginationOptions.Page, paginationOptions.PageSize);
        }
    }
}