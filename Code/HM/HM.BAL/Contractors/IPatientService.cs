using HM.BAL.Models.DTO;

namespace HM.BAL.Contractors
{
    public interface IPatientService
    {
        Task<IEnumerable<PatientDTO>> GetPatientsAsync();
        Task SavePatientAsync(PatientDTO data);
    }
}