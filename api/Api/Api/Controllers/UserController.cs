using Api.Data;
using Api.Data.Dto;
using Api.Models;
using Api.Services;
using FluentResults;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private UserService _userService;


        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult AddUser([FromBody] UserDto user)
        {
           Result res = _userService.newUser(user);

            if(res != null)
            {
                if (res.IsSuccess) return Ok();

                if (res.IsFailed) return StatusCode(400, res.Reasons[0].Message);
            }
            return StatusCode(500);
        }
    }
}
