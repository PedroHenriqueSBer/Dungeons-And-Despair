using DungeonsAndDespair.Aplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class ShieldTemplate : Shield
    {
        public User CreatedAt { get; set; }
        public int Like { get; set; }
        public int UnLike { get; set; }
        public ICollection<Commit> commits { get; set; }
    }
}
