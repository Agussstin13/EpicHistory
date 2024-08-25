using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EpicBackend.Migrations
{
    /// <inheritdoc />
    public partial class userType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<short>(
                name: "type",
                table: "users",
                type: "smallint",
                nullable: false,
                defaultValue: (short)0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "type",
                table: "users");
        }
    }
}
