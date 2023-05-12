using HM.DAL.DataAccess.Entities;

namespace HM.DAL.Contractors
{
    public interface IUnitOfWork
    {
        IBaseRepository<Patient> PatientRepository { get; }
        Task SaveAsync();
    }
}