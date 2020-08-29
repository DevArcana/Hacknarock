using System.Threading.Tasks;
using Application.Controllers;
using Application.Infrastructure.Persistance;
using Application.Users.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Application.Users.Controllers
{
    [Microsoft.AspNetCore.Components.Route("api/rest/users")]
    public class UsersController : BaseController
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public UsersController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("{phoneNumber}")]
        public async Task<IActionResult> GetUserDetails(string phoneNumber)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phoneNumber);

            if (user == null)
            {
                return NotFound();
            }
            
            return Ok(_mapper.Map<UserDto>(user));
        }
        
        [HttpPost]
        public async Task<IActionResult> GetUserDetails([FromBody] UserDto userDto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.PhoneNumber == userDto.PhoneNumber);

            if (user != null)
            {
                return BadRequest();
            }

            user = new User(userDto.PhoneNumber, userDto.FirstName, userDto.LastName);
            _context.Add(user);
            await _context.SaveChangesAsync();
            
            return Ok(_mapper.Map<UserDto>(user));
        }
    }
}