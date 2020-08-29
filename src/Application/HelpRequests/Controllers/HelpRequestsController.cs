using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Controllers;
using Application.HelpRequests.Queries;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Application.HelpRequests.Controllers
{
    public class HelpRequestsController : BaseController
    {
        private readonly IMediator _mediator;

        public HelpRequestsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> ListHelpRequests([FromQuery] ListHelpRequestsQuery query)
        {
            try
            {
                return Ok(await _mediator.Send(query));
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
