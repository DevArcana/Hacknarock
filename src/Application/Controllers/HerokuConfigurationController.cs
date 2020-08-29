using System;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Route("api/rest/configuration")]
    public class HerokuConfigurationController : BaseController
    {
        [HttpGet]
        public IActionResult GetHerokuVariables()
        {
            return Ok(new
            {
                Auth0 = new
                {
                    Audience = "http://devmountain-hacknarock.herokuapp.com/api/",
                    ClientId = Environment.GetEnvironmentVariable("AUTH0_CLIENT_ID"),
                    Domain = Environment.GetEnvironmentVariable("AUTH0_DOMAIN")
                }
            });
        }
    }
}