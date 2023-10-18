using DungeonsAndDespair.API.DataBase.Context;
using DungeonsAndDespair.Aplication.InputModel;
using DungeonsAndDespair.Aplication.Interfaces;
using DungeonsAndDespair.Aplication.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DungeonsAndDespair.Aplication.Services
{
    public class UserServices : IUserService
    {
        private readonly DbSet<User> _repository;
        private readonly DnDsprContext _db;
        public UserServices(DnDsprContext repository)
        {
            _db = repository;
            _repository = repository.User;
        }
        public User GetUserById(Guid id) => 
            _repository.Find(id);

        public User NewUser(NewUserInputModel User)
        {
            var user = User.ToModel();
            _repository.Add(user);
            _db.SaveChanges();
            return user;
        }
    }
}
