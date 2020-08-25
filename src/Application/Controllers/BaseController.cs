using Microsoft.AspNetCore.Mvc;

namespace Application.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("api/rest/[controller]")]
    public abstract class BaseController : ControllerBase
    {
        
    }
}