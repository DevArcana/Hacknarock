using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.HelpOffers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Application.Infrastructure.Persistance.Configuration
{
    public class HelpOfferConfiguration : IEntityTypeConfiguration<HelpOffer>
    {
        public void Configure(EntityTypeBuilder<HelpOffer> builder)
        {
            builder.HasKey(offer => new
            {
                offer.UserId,
                offer.RequestId
            });

            builder.HasOne(offer => offer.User)
                   .WithMany(user => user.Offers)
                   .HasForeignKey(offer => offer.UserId);

            builder.HasOne(offer => offer.Request)
                   .WithMany(request => request.Offers)
                   .HasForeignKey(offer => offer.RequestId);
        }
    }
}
