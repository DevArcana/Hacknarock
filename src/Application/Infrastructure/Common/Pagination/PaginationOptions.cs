namespace Application.Infrastructure.Common.Pagination
{
    public class PaginationOptions
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}