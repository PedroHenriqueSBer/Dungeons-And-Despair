using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class ClassTemplates : Class
    {
        [NotMapped]
        public User User { get; set; }
        public Guid UserId { get; set; }
        public int Like { get; set; }
        public int UnLike { get; set; }
        public ICollection<Commit> commits { get; set; }
    }
}
