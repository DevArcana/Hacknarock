using Microsoft.EntityFrameworkCore.Migrations;

namespace Application.Infrastructure.Persistance.Migrations
{
    public partial class AddHelpOfferTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HelpOffers",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    RequestId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HelpOffers", x => new { x.UserId, x.RequestId });
                    table.ForeignKey(
                        name: "FK_HelpOffers_HelpRequests_RequestId",
                        column: x => x.RequestId,
                        principalTable: "HelpRequests",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HelpOffers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HelpOffers_RequestId",
                table: "HelpOffers",
                column: "RequestId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HelpOffers");
        }
    }
}
