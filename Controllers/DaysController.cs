using magiccom.Models;
using Microsoft.AspNetCore.Mvc;

namespace magiccom.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DaysController : ControllerBase
    {
        private static string[] serverData = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };

        [HttpGet]
        public string[] Get()
        {
            return serverData;
        }
    }
}