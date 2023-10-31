using Microsoft.AspNetCore.Mvc;

namespace DungeonsAndDespair.API.Controllers
{
    public class User : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
