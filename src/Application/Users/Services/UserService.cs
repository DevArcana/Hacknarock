using System.Threading;
using System.Threading.Tasks;
using Application.Infrastructure.Persistance;
using Application.Users.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Application.Users.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> GetOrCreateUserAsync(string guid, CancellationToken cancellationToken = default)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Guid == guid, cancellationToken);

            if (user == null)
            {
                user = new User(guid);
                _context.Add(user);
                await _context.SaveChangesAsync(cancellationToken);
            }

            return user;
        }
    }
}