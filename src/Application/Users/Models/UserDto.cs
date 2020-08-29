using Application.Infrastructure.AutoMapper;

namespace Application.Users.Models
{
    public class UserDto : IMapFrom<User>
    {
        public string PhoneNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}