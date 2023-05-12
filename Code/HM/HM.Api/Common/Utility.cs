using HM.Api.Models.DTO;
using HM.Api.Models.Entities;
using Microsoft.VisualBasic;

namespace HM.Api.Common
{
    public class Utility
    {
        public static string ConvertStatusToString(int type)
        {
            switch (type)
            {
                case Constants.STATUS_ENABLED_INT:
                    return Constants.STATUS_ENABLED_STRING;
                case Constants.STATUS_DISABLED_INT:
                    return Constants.STATUS_DISABLED_STRING;
                default:
                    return Constants.STATUS_DELETION_STRING;
            }
        }

        public static string ConvertTypeToString(int type)
        {
            switch (type)
            {
                case Constants.TYPE_IN_INT:
                    return Constants.TYPE_IN_STRING;
                default:
                    return Constants.TYPE_OUT_STRING;
            }
        }

        public static Patient ParseDTO(PatientDTO dto)
        {
            return new Patient
            {

                InternalID = dto.InternalID,
                PatientID = dto.PatientID,
                FirstName = dto.FirstName,
                MiddleName = dto.MiddleName,
                LastName = dto.LastName,
                Gender = dto.Gender,
                CivilStatus = dto.CivilStatus,
                Birthdate = dto.Birthdate,
                ContactNo = dto.ContactNo,
                EmailAddress = dto.EmailAddress,
                Address = dto.Address,
                Type = dto.Type,
                Status = dto.Status,
                CreatedDate = dto.CreatedDate,
                ModifiedDate = dto.ModifiedDate
            };
        }
    }
}
