using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class Weapon : Equipament
    {
        public string Type { get; set; }
        public string Properties { get; set; }
        public char Ability { get; set; }
        public string AtackBonus { get; set; }
        public string Dices { get; set; }
        public string DamageBonus { get; set; }
    }
}
