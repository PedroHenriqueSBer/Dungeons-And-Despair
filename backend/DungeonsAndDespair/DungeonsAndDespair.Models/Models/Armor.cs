using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class Armor : Shield
    {
        public int MaximumArmorClass { get; set; }
        public int MinimumArmorClass { get; set; }
        public bool StealthAbility { get; set; }
    }
}
