using HM.Api.Contractors;
using HM.Api.Models.DTO;
using System.Collections;

namespace HM.Api.Services
{
    public class PatientService : IPatientService
    {
        public PatientService() { }

        public async Task<IEnumerable<PatientDTO>> GetPatientsAsync()
        {
            return new List<PatientDTO>();
        }
    }
}
