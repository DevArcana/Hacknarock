using System;
using Application.Infrastructure.AutoMapper;
using AutoMapper;

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
        
        public void Mapping(Profile profile)
        {
            profile.CreateMap<HelpRequest, HelpRequestDto>()
                .ForMember(x => x.Submitter, dest => dest.MapFrom(src => src.Submitter.FirstName));
        }
    }
}
