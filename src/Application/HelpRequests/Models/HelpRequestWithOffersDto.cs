using System.Collections.Generic;
using System.Linq;
using Application.Infrastructure.AutoMapper;
using Application.Users.Models;
using AutoMapper;

namespace Application.HelpRequests.Models
{
    public class HelpRequestWithOffersDto : HelpRequestDto, IMapFrom<HelpRequest>
    {
        public IEnumerable<UserDto> Offers { get; set; }
        
        public void Mapping(Profile profile)
        {
            profile.CreateMap<HelpRequest, HelpRequestWithOffersDto>()
                .ForMember(x => x.Submitter, dest => dest.MapFrom(src => src.Submitter.FirstName))
                .ForMember(x => x.Offers, dest => dest.MapFrom(x => x.Offers.Select(offer => offer.User)));
        }
    }
}