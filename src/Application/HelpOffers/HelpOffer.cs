using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.HelpRequests;
using Application.Users;

namespace Application.HelpOffers
{
    public class HelpOffer
    {
        public int UserId { get; set; }
        public User User { get; set; } = null!;
        public int RequestId { get; set; }
        public HelpRequest Request { get; set; } = null!;

        private HelpOffer()
        {
            // Needed by EF Core
        }

        public HelpOffer(int userId, int requestId)
        {
            UserId = userId;
            RequestId = requestId;
        }
    }
}
