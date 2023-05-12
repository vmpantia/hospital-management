using HM.Api.Models.DTO;

namespace HM.Api.Contractors
{
    public interface IPatientService
    {
        Task<IEnumerable<PatientDTO>> GetPatientsAsync();
    }
}