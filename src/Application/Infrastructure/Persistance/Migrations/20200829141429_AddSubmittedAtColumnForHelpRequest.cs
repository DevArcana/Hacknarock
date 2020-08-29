using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Application.Infrastructure.Persistance.Migrations
{
    public partial class AddSubmittedAtColumnForHelpRequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "SubmittedAt",
                table: "HelpRequests",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SubmittedAt",
                table: "HelpRequests");
        }
    }
}
