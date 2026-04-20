namespace VideoGameCharacterApi.Models
{
    public class Character
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;

        public string game { get; set; } = string.Empty;
        public string role { get; set; } = string.Empty;
    }
}
