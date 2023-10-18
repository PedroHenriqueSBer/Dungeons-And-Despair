using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class Chat
    {
        public Guid Id { get; set; }
        [NotMapped]
        public List<User> Users { get; set; }
        public List<Guid> UsersId { get; set; }
        public List<Message>? Messages { get; set; }

    }
}
