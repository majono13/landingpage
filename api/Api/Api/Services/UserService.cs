using Api.Data;
using Api.Data.Dto;
using Api.Models;
using AutoMapper;
using FluentResults;
using System.Text.RegularExpressions;

namespace Api.Services
{
    public class UserService
    {
        private UserContext _userContext;
        private IMapper _mapper;

        public UserService(UserContext userContext, IMapper mapper)
        {
            _userContext = userContext;
            _mapper = mapper;
        }

        public  Result IsValidEmail(UserModel user)
        {

            try
            {
                //E-mail vazio
                if (string.IsNullOrEmpty(user.Email)) return Result.Fail("E-mail não informado.").WithError("E-mail não informado");

                //E-mail já cadastrado
                UserModel _user = _userContext.Users.FirstOrDefault(u => u.Email == user.Email);
                if (_user != null) return Result.Fail("E-mail já cadastrado.");

                //E-mail inválido
                if (!Regex.IsMatch(user.Email, @"\w+[@]\w+[.]com")) return Result.Fail(new Error("E-mail inválido."));

                return Result.Ok();
            }
            catch
            {
                return Result.Fail("Erro interno");
            }
        
        }

        public Result newUser(UserDto u)
        {
            UserModel user = _mapper.Map<UserModel>(u);

            Result res = IsValidEmail(user);

            try
            {
                if (res.IsFailed)
                {
                    return Result.Fail(res.Errors);
                }

                _userContext.Add(user);
                _userContext.SaveChanges();

                return Result.Ok();
            }
            catch
            {
                return Result.Fail("Erro interno");
            }
        }
    }
}
