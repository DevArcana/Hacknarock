﻿using System.Linq;
using System.Threading.Tasks;
using Application.Controllers;
using Application.HelpRequests.Commands;
using Application.HelpRequests.Queries;
using Application.Users;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Application.HelpRequests.Controllers
{
    [StupidAuth]
    [Route("api/rest/requests")]
    public class HelpRequestsController : BaseController
    {
        private readonly IMediator _mediator;

        public HelpRequestsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        private string PhoneNumber => User.Identities.First(x => x.AuthenticationType == "StupidAuth").Name;

        [HttpGet]
        public async Task<IActionResult> ListHelpRequests([FromQuery] ListHelpRequestsQuery query)
        {
            try
            {
                query.PhoneNumber = PhoneNumber;
                return Ok(await _mediator.Send(query));
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateHelpRequest([FromBody] CreateHelpRequestCommand command)
        {
            try
            {
                command.PhoneNumber = PhoneNumber;
                return Ok(await _mediator.Send(command));
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHelpRequest(int id)
        {
            var query = new GetHelpRequestQuery(id);

            try
            {
                return Ok(await _mediator.Send(query));
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHelpRequest(int id, [FromBody] UpdateHelpRequestCommand command)
        {
            command.Id = id;

            try
            {
                return Ok(await _mediator.Send(command));
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHelpRequest(int id)
        {
            var command = new DeleteHelpRequestCommand(id);

            try
            {
                return Ok(await _mediator.Send(command));
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
