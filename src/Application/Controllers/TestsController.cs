using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Authorize]
    public class TestsController : BaseController
    {
        [HttpGet]
        public ActionResult<string> GetSecretText()
        {
            return Ok("This is super secret text.");
        }
    }
}