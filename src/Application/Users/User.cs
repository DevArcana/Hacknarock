namespace Application.Users
{
    public class User
    {
        public int Id { get; set; }
        public string Guid { get; set; } = null!;

        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        private User()
        {
            
        }
        
        public User(string guid)
        {
            Guid = guid;
        }
    }
}