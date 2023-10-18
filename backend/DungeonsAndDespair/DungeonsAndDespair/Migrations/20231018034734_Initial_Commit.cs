using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DungeonsAndDespair.API.Migrations
{
    public partial class Initial_Commit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Chats",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UsersId = table.Column<List<Guid>>(type: "uuid[]", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chats", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RaceCharacteristic",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RaceCharacteristic", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Message",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Text = table.Column<string>(type: "text", nullable: false),
                    SendAt = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    ChatId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Message", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Message_Chats_ChatId",
                        column: x => x.ChatId,
                        principalTable: "Chats",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ArmorTemplates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAtId = table.Column<Guid>(type: "uuid", nullable: false),
                    Like = table.Column<int>(type: "integer", nullable: false),
                    UnLike = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    DefaultQuantity = table.Column<double>(type: "double precision", nullable: false),
                    Quantity = table.Column<double>(type: "double precision", nullable: false),
                    lb = table.Column<double>(type: "double precision", nullable: false),
                    Ca = table.Column<int>(type: "integer", nullable: false),
                    type = table.Column<char>(type: "character(1)", nullable: false),
                    MaximumArmorClass = table.Column<int>(type: "integer", nullable: false),
                    MinimumArmorClass = table.Column<int>(type: "integer", nullable: false),
                    StealthAbility = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArmorTemplates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArmorTemplates_User_CreatedAtId",
                        column: x => x.CreatedAtId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Class",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    Discriminator = table.Column<string>(type: "text", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: true),
                    Like = table.Column<int>(type: "integer", nullable: true),
                    UnLike = table.Column<int>(type: "integer", nullable: true),
                    UserId1 = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Class", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Class_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Class_User_UserId1",
                        column: x => x.UserId1,
                        principalTable: "User",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EquipamentTemplates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAtId = table.Column<Guid>(type: "uuid", nullable: false),
                    Like = table.Column<int>(type: "integer", nullable: false),
                    UnLike = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    DefaultQuantity = table.Column<double>(type: "double precision", nullable: false),
                    Quantity = table.Column<double>(type: "double precision", nullable: false),
                    lb = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipamentTemplates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EquipamentTemplates_User_CreatedAtId",
                        column: x => x.CreatedAtId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Race",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    CharacteristicsId = table.Column<Guid>(type: "uuid", nullable: false),
                    Discriminator = table.Column<string>(type: "text", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: true),
                    CreatedAtId = table.Column<Guid>(type: "uuid", nullable: true),
                    Like = table.Column<int>(type: "integer", nullable: true),
                    UnLike = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Race", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Race_RaceCharacteristic_CharacteristicsId",
                        column: x => x.CharacteristicsId,
                        principalTable: "RaceCharacteristic",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Race_User_CreatedAtId",
                        column: x => x.CreatedAtId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Race_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ShieldTemplates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAtId = table.Column<Guid>(type: "uuid", nullable: false),
                    Like = table.Column<int>(type: "integer", nullable: false),
                    UnLike = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    DefaultQuantity = table.Column<double>(type: "double precision", nullable: false),
                    Quantity = table.Column<double>(type: "double precision", nullable: false),
                    lb = table.Column<double>(type: "double precision", nullable: false),
                    Ca = table.Column<int>(type: "integer", nullable: false),
                    type = table.Column<char>(type: "character(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShieldTemplates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShieldTemplates_User_CreatedAtId",
                        column: x => x.CreatedAtId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WeaponTemplates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreatedAtId = table.Column<Guid>(type: "uuid", nullable: false),
                    Like = table.Column<int>(type: "integer", nullable: false),
                    UnLike = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    DefaultQuantity = table.Column<double>(type: "double precision", nullable: false),
                    Quantity = table.Column<double>(type: "double precision", nullable: false),
                    lb = table.Column<double>(type: "double precision", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false),
                    Properties = table.Column<string>(type: "text", nullable: false),
                    Ability = table.Column<char>(type: "character(1)", nullable: false),
                    AtackBonus = table.Column<string>(type: "text", nullable: false),
                    Dices = table.Column<string>(type: "text", nullable: false),
                    DamageBonus = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeaponTemplates", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WeaponTemplates_User_CreatedAtId",
                        column: x => x.CreatedAtId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ClassCharacteristic",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    level = table.Column<int>(type: "integer", nullable: false),
                    ClassCharacteristicId = table.Column<Guid>(type: "uuid", nullable: true),
                    ClassId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassCharacteristic", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClassCharacteristic_Class_ClassId",
                        column: x => x.ClassId,
                        principalTable: "Class",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ClassCharacteristic_ClassCharacteristic_ClassCharacteristic~",
                        column: x => x.ClassCharacteristicId,
                        principalTable: "ClassCharacteristic",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Sheets",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    lvl = table.Column<int>(type: "integer", nullable: false),
                    Platinum = table.Column<int>(type: "integer", nullable: false),
                    Gold = table.Column<int>(type: "integer", nullable: false),
                    Electrum = table.Column<int>(type: "integer", nullable: false),
                    Silver = table.Column<int>(type: "integer", nullable: false),
                    Copper = table.Column<int>(type: "integer", nullable: false),
                    RaceId = table.Column<Guid>(type: "uuid", nullable: false),
                    ClassId = table.Column<Guid>(type: "uuid", nullable: false),
                    Strength = table.Column<int>(type: "integer", nullable: false),
                    Dexterity = table.Column<int>(type: "integer", nullable: false),
                    Constitution = table.Column<int>(type: "integer", nullable: false),
                    Intelligence = table.Column<int>(type: "integer", nullable: false),
                    Wisdom = table.Column<int>(type: "integer", nullable: false),
                    Charisma = table.Column<int>(type: "integer", nullable: false),
                    StrengthBonus = table.Column<bool>(type: "boolean", nullable: false),
                    DexterityBonus = table.Column<bool>(type: "boolean", nullable: false),
                    ConstitutionBonus = table.Column<bool>(type: "boolean", nullable: false),
                    IntelligenceBonus = table.Column<bool>(type: "boolean", nullable: false),
                    WisdomBonus = table.Column<bool>(type: "boolean", nullable: false),
                    CharismaBonus = table.Column<bool>(type: "boolean", nullable: false),
                    Athletics = table.Column<bool>(type: "boolean", nullable: false),
                    AthleticsDouble = table.Column<bool>(type: "boolean", nullable: false),
                    AthleticsHalf = table.Column<bool>(type: "boolean", nullable: false),
                    AthleticsAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Acrobatics = table.Column<bool>(type: "boolean", nullable: false),
                    AcrobaticsDouble = table.Column<bool>(type: "boolean", nullable: false),
                    AcrobaticsHalf = table.Column<bool>(type: "boolean", nullable: false),
                    AcrobaticsAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Stealth = table.Column<bool>(type: "boolean", nullable: false),
                    StealthDouble = table.Column<bool>(type: "boolean", nullable: false),
                    StealthHalf = table.Column<bool>(type: "boolean", nullable: false),
                    StealthAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    SleightOfHands = table.Column<bool>(type: "boolean", nullable: false),
                    SleightOfHandsDouble = table.Column<bool>(type: "boolean", nullable: false),
                    SleightOfHandsHalf = table.Column<bool>(type: "boolean", nullable: false),
                    SleightOfHandsAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Arcana = table.Column<bool>(type: "boolean", nullable: false),
                    ArcanaDouble = table.Column<bool>(type: "boolean", nullable: false),
                    ArcanaHalf = table.Column<bool>(type: "boolean", nullable: false),
                    ArcanaAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    History = table.Column<bool>(type: "boolean", nullable: false),
                    HistoryDouble = table.Column<bool>(type: "boolean", nullable: false),
                    HistoryHalf = table.Column<bool>(type: "boolean", nullable: false),
                    HistoryAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Investigation = table.Column<bool>(type: "boolean", nullable: false),
                    InvestigationDouble = table.Column<bool>(type: "boolean", nullable: false),
                    InvestigationHalf = table.Column<bool>(type: "boolean", nullable: false),
                    InvestigationAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Nature = table.Column<bool>(type: "boolean", nullable: false),
                    NatureDouble = table.Column<bool>(type: "boolean", nullable: false),
                    NatureHalf = table.Column<bool>(type: "boolean", nullable: false),
                    NatureAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Religion = table.Column<bool>(type: "boolean", nullable: false),
                    ReligionDouble = table.Column<bool>(type: "boolean", nullable: false),
                    ReligionHalf = table.Column<bool>(type: "boolean", nullable: false),
                    ReligionAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Insight = table.Column<bool>(type: "boolean", nullable: false),
                    InsightDouble = table.Column<bool>(type: "boolean", nullable: false),
                    InsightHalf = table.Column<bool>(type: "boolean", nullable: false),
                    InsightAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    AnimalHandling = table.Column<bool>(type: "boolean", nullable: false),
                    AnimalHandlingDouble = table.Column<bool>(type: "boolean", nullable: false),
                    AnimalHandlingHalf = table.Column<bool>(type: "boolean", nullable: false),
                    AnimalHandlingAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Medicine = table.Column<bool>(type: "boolean", nullable: false),
                    MedicineDouble = table.Column<bool>(type: "boolean", nullable: false),
                    MedicineHalf = table.Column<bool>(type: "boolean", nullable: false),
                    MedicineAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Perception = table.Column<bool>(type: "boolean", nullable: false),
                    PerceptionDouble = table.Column<bool>(type: "boolean", nullable: false),
                    PerceptionHalf = table.Column<bool>(type: "boolean", nullable: false),
                    PerceptionAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Survival = table.Column<bool>(type: "boolean", nullable: false),
                    SurvivalDouble = table.Column<bool>(type: "boolean", nullable: false),
                    SurvivalHalf = table.Column<bool>(type: "boolean", nullable: false),
                    SurvivalAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Performace = table.Column<bool>(type: "boolean", nullable: false),
                    PerformaceDouble = table.Column<bool>(type: "boolean", nullable: false),
                    PerformaceHalf = table.Column<bool>(type: "boolean", nullable: false),
                    PerformaceAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Deception = table.Column<bool>(type: "boolean", nullable: false),
                    DeceptionDouble = table.Column<bool>(type: "boolean", nullable: false),
                    DeceptionHalf = table.Column<bool>(type: "boolean", nullable: false),
                    DeceptionAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Intimidation = table.Column<bool>(type: "boolean", nullable: false),
                    IntimidationDouble = table.Column<bool>(type: "boolean", nullable: false),
                    IntimidationHalf = table.Column<bool>(type: "boolean", nullable: false),
                    IntimidationAdvantage = table.Column<bool>(type: "boolean", nullable: false),
                    Persuasion = table.Column<bool>(type: "boolean", nullable: false),
                    PersuasionDouble = table.Column<bool>(type: "boolean", nullable: false),
                    PersuasionHalf = table.Column<bool>(type: "boolean", nullable: false),
                    PersuasionAdvantage = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sheets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sheets_Class_ClassId",
                        column: x => x.ClassId,
                        principalTable: "Class",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Sheets_Race_RaceId",
                        column: x => x.RaceId,
                        principalTable: "Race",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Feed",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Text = table.Column<string>(type: "text", nullable: false),
                    Like = table.Column<int>(type: "integer", nullable: false),
                    UnLike = table.Column<int>(type: "integer", nullable: false),
                    ArmorTemplateId = table.Column<Guid>(type: "uuid", nullable: true),
                    ClassTemplatesId = table.Column<Guid>(type: "uuid", nullable: true),
                    CommitId = table.Column<Guid>(type: "uuid", nullable: true),
                    EquipamentTemplateId = table.Column<Guid>(type: "uuid", nullable: true),
                    RaceTemplatesId = table.Column<Guid>(type: "uuid", nullable: true),
                    ShieldTemplateId = table.Column<Guid>(type: "uuid", nullable: true),
                    WeaponTemplateId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feed", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Feed_ArmorTemplates_ArmorTemplateId",
                        column: x => x.ArmorTemplateId,
                        principalTable: "ArmorTemplates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Feed_Class_ClassTemplatesId",
                        column: x => x.ClassTemplatesId,
                        principalTable: "Class",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Feed_EquipamentTemplates_EquipamentTemplateId",
                        column: x => x.EquipamentTemplateId,
                        principalTable: "EquipamentTemplates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Feed_Feed_CommitId",
                        column: x => x.CommitId,
                        principalTable: "Feed",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Feed_Race_RaceTemplatesId",
                        column: x => x.RaceTemplatesId,
                        principalTable: "Race",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Feed_ShieldTemplates_ShieldTemplateId",
                        column: x => x.ShieldTemplateId,
                        principalTable: "ShieldTemplates",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Feed_WeaponTemplates_WeaponTemplateId",
                        column: x => x.WeaponTemplateId,
                        principalTable: "WeaponTemplates",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArmorTemplates_CreatedAtId",
                table: "ArmorTemplates",
                column: "CreatedAtId");

            migrationBuilder.CreateIndex(
                name: "IX_Class_UserId",
                table: "Class",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Class_UserId1",
                table: "Class",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_ClassCharacteristic_ClassCharacteristicId",
                table: "ClassCharacteristic",
                column: "ClassCharacteristicId");

            migrationBuilder.CreateIndex(
                name: "IX_ClassCharacteristic_ClassId",
                table: "ClassCharacteristic",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_EquipamentTemplates_CreatedAtId",
                table: "EquipamentTemplates",
                column: "CreatedAtId");

            migrationBuilder.CreateIndex(
                name: "IX_Feed_ArmorTemplateId",
                table: "Feed",
                column: "ArmorTemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_Feed_ClassTemplatesId",
                table: "Feed",
                column: "ClassTemplatesId");

            migrationBuilder.CreateIndex(
                name: "IX_Feed_CommitId",
                table: "Feed",
                column: "CommitId");

            migrationBuilder.CreateIndex(
                name: "IX_Feed_EquipamentTemplateId",
                table: "Feed",
                column: "EquipamentTemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_Feed_RaceTemplatesId",
                table: "Feed",
                column: "RaceTemplatesId");

            migrationBuilder.CreateIndex(
                name: "IX_Feed_ShieldTemplateId",
                table: "Feed",
                column: "ShieldTemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_Feed_WeaponTemplateId",
                table: "Feed",
                column: "WeaponTemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_Message_ChatId",
                table: "Message",
                column: "ChatId");

            migrationBuilder.CreateIndex(
                name: "IX_Race_CharacteristicsId",
                table: "Race",
                column: "CharacteristicsId");

            migrationBuilder.CreateIndex(
                name: "IX_Race_CreatedAtId",
                table: "Race",
                column: "CreatedAtId");

            migrationBuilder.CreateIndex(
                name: "IX_Race_UserId",
                table: "Race",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Sheets_ClassId",
                table: "Sheets",
                column: "ClassId");

            migrationBuilder.CreateIndex(
                name: "IX_Sheets_RaceId",
                table: "Sheets",
                column: "RaceId");

            migrationBuilder.CreateIndex(
                name: "IX_ShieldTemplates_CreatedAtId",
                table: "ShieldTemplates",
                column: "CreatedAtId");

            migrationBuilder.CreateIndex(
                name: "IX_WeaponTemplates_CreatedAtId",
                table: "WeaponTemplates",
                column: "CreatedAtId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClassCharacteristic");

            migrationBuilder.DropTable(
                name: "Feed");

            migrationBuilder.DropTable(
                name: "Message");

            migrationBuilder.DropTable(
                name: "Sheets");

            migrationBuilder.DropTable(
                name: "ArmorTemplates");

            migrationBuilder.DropTable(
                name: "EquipamentTemplates");

            migrationBuilder.DropTable(
                name: "ShieldTemplates");

            migrationBuilder.DropTable(
                name: "WeaponTemplates");

            migrationBuilder.DropTable(
                name: "Chats");

            migrationBuilder.DropTable(
                name: "Class");

            migrationBuilder.DropTable(
                name: "Race");

            migrationBuilder.DropTable(
                name: "RaceCharacteristic");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
