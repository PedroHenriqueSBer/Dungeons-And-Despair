using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Models.Models
{
    public class ClassTemplates : Class
    {
        public User CreatedAt { get; set; }
        public int Like { get; set; }
        public int UnLike { get; set; }
        public ICollection<Commit> commits { get; set; }
    }
}
