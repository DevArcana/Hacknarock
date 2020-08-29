using Application.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Application.Infrastructure.Persistance.Configuration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(x => x.PhoneNumber)
                .IsRequired()
                .HasMaxLength(16);

            builder.HasIndex(x => x.PhoneNumber)
                .IsUnique();

            builder.Property(x => x.FirstName)
                .IsRequired()
                .HasMaxLength(64);
            
            builder.Property(x => x.LastName)
                .IsRequired()
                .HasMaxLength(128);
        }
    }
}