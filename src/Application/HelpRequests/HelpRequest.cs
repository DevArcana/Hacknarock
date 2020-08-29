using System;

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

        private HelpRequest()
        {
            // Needed by EF Core
        }

        public HelpRequest(string title, string description, DateTime submittedAt, DateTime? deadline = null, int urgency = 0)
        {
            Title = title;
            Description = description;
            Deadline = deadline;
            Urgency = urgency;
            SubmittedAt = submittedAt;
        }
    }
}