namespace HM.DAL.Contractors
{
    public interface IBaseRepository<T> where T : class
    {
        Task AddAsync(T entity);
        Task DeleteAsync(object id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<IEnumerable<T>> GetByConditonAync(Func<T, bool> condition);
        Task<T> GetByIDAsync(object id);
        Task UpdateAsync(object id, object model);
    }
}