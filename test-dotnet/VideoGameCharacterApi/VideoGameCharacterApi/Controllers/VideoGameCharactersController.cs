using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VideoGameCharacterApi.Models;
using VideoGameCharacterApi.Services;

namespace VideoGameCharacterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoGameCharactersController(IVideoGameCharactersService service) : ControllerBase
    {
        
        [HttpGet]
        public async Task<ActionResult<List<Character>>> GetCharacters()
        {
            return Ok(service.getAllCharactersAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Character>> GetCharacter(int id)
        {
            var character = await service.getCharacterByIdAsync(id);
            if (character is null)
            {
                return NotFound("Character with that id does not exist");
            }
            return Ok(character);
        }

    }
}
