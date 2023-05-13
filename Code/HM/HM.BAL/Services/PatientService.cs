using HM.Api.Commons;
using HM.BAL.Contractors;
using HM.BAL.Models.DTO;
using HM.DAL.Contractors;

namespace HM.BAL.Services
{
    public class PatientService : IPatientService
    {
        private readonly IUnitOfWork _uow;
        public PatientService(IUnitOfWork uow) => _uow = uow;

        public async Task<IEnumerable<PatientDTO>> GetPatientsAsync()
        {
            var result = await _uow.PatientRepository.GetAllAsync();
            return result.Select(data => new PatientDTO
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
                TypeDescription = Utility.ConvertTypeToString(data.Type),
                Status = data.Status,
                StatusDescription = Utility.ConvertStatusToString(data.Type),
                CreatedDate = data.CreatedDate,
                ModifiedDate = data.ModifiedDate
            }).ToList();
        }

        public async Task SavePatientAsync(PatientDTO data)
        {
            var isAdd = data.InternalID == Guid.Empty;

            if(isAdd) 
                await _uow.PatientRepository.AddAsync(Utility.ParseDTO(data));
            else
            {
                await _uow.PatientRepository.UpdateAsync(data.InternalID, new
                {
                    data.FirstName, data.MiddleName, data.LastName, data.Gender,
                    data.CivilStatus, data.Birthdate, data.ContactNo, data.EmailAddress,
                    data.Address, data.Type, data.Status, 
                    ModifiedDate = data.ModifiedDate
                });
            }

            await _uow.SaveAsync();
        } 
    }
}
