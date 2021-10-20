using magiccom.Models;
using Microsoft.AspNetCore.Mvc;

namespace magiccom.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MessagesController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromForm] FormData formData)
        {
            System.Console.WriteLine($"Text={formData.Text} Dropdown={formData.Dropdown}");
            return Ok();
        }
    }
}