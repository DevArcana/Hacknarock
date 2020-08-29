using System.Reflection;
using Application.HelpOffers;
using Application.HelpRequests;
using Application.Users;
using Microsoft.EntityFrameworkCore;

namespace Application.Infrastructure.Persistance
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }

        public DbSet<HelpRequest> HelpRequests => Set<HelpRequest>();
        public DbSet<User> Users => Set<User>();
        public DbSet<HelpOffer> HelpOffers => Set<HelpOffer>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}