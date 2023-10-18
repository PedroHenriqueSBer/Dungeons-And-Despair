using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Models
{
    public class ClassCharacteristic
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int level { get; set; }
        public ICollection<ClassCharacteristic> SubCharacteristics { get; set; }
    }
}
