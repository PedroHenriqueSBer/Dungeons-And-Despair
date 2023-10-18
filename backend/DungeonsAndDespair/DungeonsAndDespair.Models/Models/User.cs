using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public ICollection<RaceTemplates>? RaceTemplates { get; set; }
        public ICollection<ClassTemplates>? ClassTemplates { get; set; }
        public ICollection<Class>? SubscribedClass { get; set; }
        public ICollection<Race>? SubscribedRace { get; set; }

    }
}
