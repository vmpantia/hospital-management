using HM.DAL.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace HM.DAL.DataAccess
{
    public class HMDbContext : DbContext
    {
        public HMDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Patient> Patients { get; set; }
    }
}
