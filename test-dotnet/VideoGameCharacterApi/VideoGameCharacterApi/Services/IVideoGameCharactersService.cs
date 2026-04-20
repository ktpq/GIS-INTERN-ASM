using VideoGameCharacterApi.Models;

namespace VideoGameCharacterApi.Services
{
    public interface IVideoGameCharactersService
    {
        Task<List<Character>> getAllCharactersAsync();
        Task<Character?> getCharacterByIdAsync(int id);
        Task<Character> addCharacterAsync(Character character);

        Task<bool> updateCharacterAsync(int id, Character character);

        Task<bool> deleteCharacterAsync(int id);
    }
}
