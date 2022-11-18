using System.ComponentModel.DataAnnotations;

namespace Api.Models
{
    public class UserModel
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
