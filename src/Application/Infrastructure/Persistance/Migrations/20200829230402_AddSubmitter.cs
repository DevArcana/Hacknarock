using Microsoft.EntityFrameworkCore.Migrations;

namespace Application.Infrastructure.Persistance.Migrations
{
    public partial class AddSubmitter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SubmitterId",
                table: "HelpRequests",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_HelpRequests_SubmitterId",
                table: "HelpRequests",
                column: "SubmitterId");

            migrationBuilder.AddForeignKey(
                name: "FK_HelpRequests_Users_SubmitterId",
                table: "HelpRequests",
                column: "SubmitterId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HelpRequests_Users_SubmitterId",
                table: "HelpRequests");

            migrationBuilder.DropIndex(
                name: "IX_HelpRequests_SubmitterId",
                table: "HelpRequests");

            migrationBuilder.DropColumn(
                name: "SubmitterId",
                table: "HelpRequests");
        }
    }
}
