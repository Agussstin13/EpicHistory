using Microsoft.EntityFrameworkCore;
using EpicBackend.Models;

namespace EpicBackend.Data{
    public class EpicContext : DbContext
    {
        public EpicContext(DbContextOptions<EpicContext> options) : base(options){

        }
        public DbSet<Users> users => Set<Users>();
    }
}