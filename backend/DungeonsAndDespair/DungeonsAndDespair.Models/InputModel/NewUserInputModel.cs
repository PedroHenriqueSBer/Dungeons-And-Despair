using DungeonsAndDespair.Aplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.InputModel
{
    public class NewUserInputModel
    {
        public string Name { get; set;}
        public string Email { get; set;}
        public string Password { get; set;}
        public User ToModel() => new()
        {
            Name = Name,
            Email = Email,
            Password = Password
        };
    }
}
