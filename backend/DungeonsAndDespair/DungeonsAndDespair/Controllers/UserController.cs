using DungeonsAndDespair.Aplication.InputModel;
using DungeonsAndDespair.Aplication.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DungeonsAndDespair.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly IUserService _service;
        public UserController(IUserService service)
        {
            _service = service;
        }
        [HttpPost]
        public IActionResult NewUser(NewUserInputModel user)
        {
            try
            {
                return Ok(_service.NewUser(user));
            }
            catch
            {
                return BadRequest();
            }
        }
        [HttpGet("{id}")]
        public IActionResult GetUserById(Guid id)
        {
            try
            {
                return Ok(_service.GetUserById(id));
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
