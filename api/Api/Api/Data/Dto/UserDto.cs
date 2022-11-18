using System.ComponentModel.DataAnnotations;

namespace Api.Data.Dto
{
    public class UserDto
    {

        [Required(ErrorMessage ="E-mail não pode estar vazio")]
        public string Email { get; set; }
    }
}
