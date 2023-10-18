using DungeonsAndDespair.Aplication.InputModel;
using DungeonsAndDespair.Aplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Interfaces
{
    public interface IUserService
    {
        public User NewUser(NewUserInputModel User);
        public User GetUserById(Guid id);
    }
}
