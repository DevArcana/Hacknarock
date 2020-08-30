using System.Collections.Generic;
using Application.HelpOffers;
using Application.HelpRequests;

namespace Application.Users
{
    public class User
    {
        public int Id { get; set; }

        public string PhoneNumber { get; set; } = null!;

        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;

        public List<HelpOffer> Offers { get; set; } = null!;

        private User()
        {
            // Needed by EF Core
        }
        
        public User(string phoneNumber, string firstName, string lastName)
        {
            PhoneNumber = phoneNumber;
            FirstName = firstName;
            LastName = lastName;
        }
    }
}