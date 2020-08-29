using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Application.Controllers
{
    [Route("api/rest/configuration")]
    public class HerokuConfigurationController : BaseController
    {
        private readonly IConfiguration _configuration;
        
        public HerokuConfigurationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        [HttpGet]
        public IActionResult GetHerokuVariables()
        {
            var clientId = Environment.GetEnvironmentVariable("AUTH0_CLIENT_ID");
            var domain = Environment.GetEnvironmentVariable("AUTH0_DOMAIN");
            
            return Ok(new
            {
                Auth0 = new
                {
                    Audience = "http://devmountain-hacknarock.herokuapp.com/api/",
                    ClientId = string.IsNullOrWhiteSpace(clientId) ? _configuration.GetSection("Auth0")["ClientId"] : clientId,
                    Domain = string.IsNullOrWhiteSpace(clientId) ? _configuration.GetSection("Auth0")["Domain"] : domain
                }
            });
        }
    }
}