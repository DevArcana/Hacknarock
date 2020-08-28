using System;
using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    public class HerokuConfigurationController : BaseController
    {
        [HttpGet]
        public IActionResult GetHerokuVariables()
        {
            return Ok(new
            {
                Auth0 = new
                {
                    Audience = Environment.GetEnvironmentVariable("AUTH0_AUDIENCE"),
                    ClientId = Environment.GetEnvironmentVariable("AUTH0_CLIENT_ID"),
                    ClientSecret = Environment.GetEnvironmentVariable("AUTH0_CLIENT_SECRET"),
                    Domain = Environment.GetEnvironmentVariable("AUTH0_DOMAIN")
                }
            });
        }
    }
}