using HM.DAL.Contractors;
using HM.DAL.DataAccess;
using HM.DAL.DataAccess.Entities;

namespace HM.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly HMDbContext _db;
        private IBaseRepository<Patient> _patient;
        public UnitOfWork(HMDbContext db) => _db = db;

        public IBaseRepository<Patient> PatientRepository
        {
            get
            {
                if (_patient == null)
                    _patient = new BaseRepository<Patient>(_db);

                return _patient;
            }
        }

        public async Task SaveAsync()
        {
            var result = await _db.SaveChangesAsync();

            if (result <= 0)
                throw new Exception("Error in saving data to database.");

            Dispose();
        }

        public void Dispose()
        {
            _db.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
