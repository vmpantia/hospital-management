using HM.Api.Contractors;
using HM.Api.DataAccess;
using HM.Api.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace HM.Api.Services
{
    public class PatientService : IPatientService
    {
        private readonly HMDbContext _db;
        public PatientService(HMDbContext db) => _db = db;

        public async Task<IEnumerable<PatientDTO>> GetPatientsAsync()
        {
            return await _db.Patients.Select(data => new PatientDTO
            {
                InternalID = data.InternalID,
                PatientID = data.PatientID,
                FirstName = data.FirstName,
                MiddleName = data.MiddleName,
                LastName = data.LastName,
                Gender = data.Gender,
                CivilStatus = data.CivilStatus,
                Birthdate = data.Birthdate,
                ContactNo = data.ContactNo,
                EmailAddress = data.EmailAddress,
                Address = data.Address,
                Type = data.Type,
                TypeDescription = Common.Utility.ConvertTypeToString(data.Type),
                Status = data.Status,
                StatusDescription = Common.Utility.ConvertStatusToString(data.Type),
                CreatedDate = data.CreatedDate,
                ModifiedDate = data.ModifiedDate
            }).ToListAsync();
        }

        public async Task SavePatientAsync(PatientDTO data)
        {
            await _db.Patients.AddAsync(Common.Utility.ParseDTO(data));
            await _db.SaveChangesAsync();
        } 
    }
}
