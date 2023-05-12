using HM.Api.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace HM.Api.DataAccess
{
    public class HMDbContext : DbContext
    {
        public HMDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Patient> Patients { get; set; }
    }
}
