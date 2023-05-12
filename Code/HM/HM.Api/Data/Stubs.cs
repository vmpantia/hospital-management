using HM.Api.Models.DTO;

namespace HM.Api.Data
{
    public class Stubs
    {
        public static List<PatientDTO> Patients { 
            get
            {
                return new List<PatientDTO>
                {
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    },
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    },
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    },
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    },
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    },
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    },
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    },
                    new PatientDTO
                    {
                        InternalID = Guid.NewGuid(),
                        PatientID  = "1",
                        FirstName = "Vincent",
                        MiddleName = "Marino",
                        LastName = "Pantia"
                    }
                };
            }
        }
    }
}
