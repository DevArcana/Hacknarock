using System.Threading;
using System.Threading.Tasks;

namespace Application.Users.Interfaces
{
    public interface IUserService
    {
        Task<User> GetOrCreateUserAsync(string guid, CancellationToken cancellationToken = default);
    }
}