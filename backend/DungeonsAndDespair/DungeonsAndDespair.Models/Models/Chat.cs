using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Models.Models
{
    public class Chat
    {
        public Guid Id { get; set; }
        public List<User> Users { get; set; }
        public List<Message>? Messages { get; set; }

    }
}
