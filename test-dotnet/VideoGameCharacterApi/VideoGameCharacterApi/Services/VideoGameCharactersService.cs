using Microsoft.AspNetCore.Http.HttpResults;
using VideoGameCharacterApi.Models;

namespace VideoGameCharacterApi.Services
{
    public class VideoGameCharactersService : IVideoGameCharactersService
    {

        static List<Character> characters = new List<Character>
            {
                new Character { id = 1, name = "one", game="Super Mario", role="eiei"},
                new Character { id = 2, name = "two", game="Super Mario", role="eiei"},
                new Character { id = 3, name = "three", game="Super Mario", role="eiei"},
                new Character { id = 4, name = "four", game="Super Mario", role="eiei"},
            };
        public Task<Character> addCharacterAsync(Character character)
        {
            throw new NotImplementedException();
        }

        public Task<bool> deleteCharacterAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Character>> getAllCharactersAsync()
        {
            return await Task.FromResult(characters);
        }

        public async Task<Character?> getCharacterByIdAsync(int id)
        {
            var result = characters.FirstOrDefault(c => c.id == id);
            return await Task.FromResult(result);
        }

        public Task<bool> updateCharacterAsync(int id, Character character)
        {
            throw new NotImplementedException();
        }
    }
}
