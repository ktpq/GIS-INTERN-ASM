using Microsoft.EntityFrameworkCore;
using VideoGameCharacterApi.Models;

namespace VideoGameCharacterApi.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {

        // DbSet = database, Characters = table
        public DbSet<Character> Characters => Set<Character>();
    }
}
