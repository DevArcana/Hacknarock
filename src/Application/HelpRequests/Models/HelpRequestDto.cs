using System;
using Application.Infrastructure.AutoMapper;

namespace Application.HelpRequests.Models
{
    public class HelpRequestDto : IMapFrom<HelpRequest>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? Deadline { get; set; }
        public int Urgency { get; set; }
        public string Submitter { get; set; } = null!;
        public DateTime SubmittedAt { get; set; }
    }
}