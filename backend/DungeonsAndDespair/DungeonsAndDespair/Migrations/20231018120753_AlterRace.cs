using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DungeonsAndDespair.API.Migrations
{
    public partial class AlterRace : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Race_RaceCharacteristic_CharacteristicsId",
                table: "Race");

            migrationBuilder.DropIndex(
                name: "IX_Race_CharacteristicsId",
                table: "Race");

            migrationBuilder.DropColumn(
                name: "CharacteristicsId",
                table: "Race");

            migrationBuilder.AddColumn<Guid>(
                name: "RaceId",
                table: "RaceCharacteristic",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RaceCharacteristic_RaceId",
                table: "RaceCharacteristic",
                column: "RaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_RaceCharacteristic_Race_RaceId",
                table: "RaceCharacteristic",
                column: "RaceId",
                principalTable: "Race",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RaceCharacteristic_Race_RaceId",
                table: "RaceCharacteristic");

            migrationBuilder.DropIndex(
                name: "IX_RaceCharacteristic_RaceId",
                table: "RaceCharacteristic");

            migrationBuilder.DropColumn(
                name: "RaceId",
                table: "RaceCharacteristic");

            migrationBuilder.AddColumn<Guid>(
                name: "CharacteristicsId",
                table: "Race",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Race_CharacteristicsId",
                table: "Race",
                column: "CharacteristicsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Race_RaceCharacteristic_CharacteristicsId",
                table: "Race",
                column: "CharacteristicsId",
                principalTable: "RaceCharacteristic",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
