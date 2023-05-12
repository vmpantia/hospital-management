using HM.Api.Contractors;
using HM.Api.Data;
using HM.Api.Models.DTO;

namespace HM.Api.Services
{
    public class PatientService : IPatientService
    {
        public PatientService() { }

        public async Task<IEnumerable<PatientDTO>> GetPatientsAsync()
        {
            return Stubs.Patients;
        }
    }
}
