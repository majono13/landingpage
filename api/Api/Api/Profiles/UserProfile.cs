using Api.Data.Dto;
using AutoMapper;
using Api.Models;

namespace Api.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserDto, UserModel>();
        }
    }
}
