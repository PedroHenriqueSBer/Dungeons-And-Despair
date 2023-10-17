using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Models.Models
{
    public class Commit
    {
        public Guid Id { get; set; }
        public User User { get; set; }
        public string Text { get; set; }
        public int Like { get; set; }
        public int UnLike { get; set; }
        public ICollection<Commit> Commits { get; set; }
    }
}
