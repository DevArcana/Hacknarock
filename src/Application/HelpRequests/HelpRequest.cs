using System;
using System.Collections.Generic;
using Application.HelpOffers;
using Application.Users;
using Microsoft.EntityFrameworkCore;

namespace Application.HelpRequests
{
    public class HelpRequest
    {
        public int Id { get; private set; }
        public string Title { get; set; } = null!;

        public string Description { get; set; } = null!;
        
        public DateTime? Deadline { get; set; }

        public int Urgency { get; set; }

        public DateTime SubmittedAt { get; set; }
        
        public User Submitter { get; set; }

        public IEnumerable<HelpOffer> Offers { get; set; } = null!;

        private HelpRequest()
        {
            // Needed by EF Core
        }

        public HelpRequest(string title, string description, DateTime submittedAt, User submitter, DateTime? deadline = null, int urgency = 0)
        {
            Title = title;
            Description = description;
            Deadline = deadline;
            Urgency = urgency;
            SubmittedAt = submittedAt;
            Submitter = submitter;
        }
    }
}