namespace HM.Api.Models.DTO
{
    public class PatientDTO
    {
        public Guid InternalID { get; set; }
        public string PatientID { get; set; }
        public string FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string CivilStatus { get; set; }
        public DateTime Birthdate { get; set; }
        public string ContactNo { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public int Type { get; set; }
        public string? TypeDescription { get; set; }
        public int Status { get; set; }
        public string? StatusDescription { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
