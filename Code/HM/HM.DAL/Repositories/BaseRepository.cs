using HM.DAL.Contractors;
using HM.DAL.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace HM.DAL.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly DbContext _db;
        private readonly DbSet<T> _table;

        public BaseRepository(HMDbContext db)
        {
            _db = db;
            _table = db.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _table.ToListAsync();
        }

        public async Task<IEnumerable<T>> GetByConditonAync(Func<T, bool> condition)
        {
            return _table.Where(condition).ToList();
        }

        public async Task<T> GetByIDAsync(object id)
        {
            var result = await _table.FindAsync(id);
            if (result == null)
                throw new Exception("No record found in the system.");

            return result;
        }

        public async Task AddAsync(T entity)
        {
            await _table.AddAsync(entity);

        }

        public async Task UpdateAsync(object id, object model)
        {
            var data = await GetByIDAsync(id);
            _db.Entry(data).CurrentValues.SetValues(model);
        }

        public async Task DeleteAsync(object id)
        {
            var data = await GetByIDAsync(id);
            _table.Remove(data);
        }
    }
}
