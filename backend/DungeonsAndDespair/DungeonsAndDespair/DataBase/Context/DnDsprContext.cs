using DungeonsAndDespair.Aplication.Models;
using Microsoft.EntityFrameworkCore;

namespace DungeonsAndDespair.API.DataBase.Context
{
    public class DnDsprContext : DbContext
    {
        public DnDsprContext(DbContextOptions<DnDsprContext> options) : base(options)
        {
        }
        public DbSet<User> User { get; set; }
        public DbSet<RaceTemplates> RaceTemplates { get; set; }
        public DbSet<ClassTemplates> ClassTemplates { get; set; }
        public DbSet<Sheet> Sheets { get; set; }
        public DbSet<Chat> Chats { get; set; }
        public DbSet<Commit> Feed { get; set; }
        public DbSet<WeaponTemplate> WeaponTemplates { get; set; }
        public DbSet<EquipamentTemplate> EquipamentTemplates { get; set; }
        public DbSet<ArmorTemplate> ArmorTemplates { get; set; }
        public DbSet<ShieldTemplate> ShieldTemplates { get; set; }

    }
}
