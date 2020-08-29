using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Infrastructure.AutoMapper;

namespace Application.HelpRequests.Models
{
    public class HelpRequestListDto : IMapFrom<HelpRequest>
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int Urgency { get; set; }
        public string Submitter { get; set; } = null!;
        public DateTime SubmittedAt { get; set; }
    }
}
