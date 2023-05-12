using HM.Api.Contractors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HM.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        public readonly IPatientService _patient;
        public PatientController(IPatientService patient) => _patient = patient;

        [HttpGet]
        public async Task<IActionResult> GetPatientsAsync()
        {
            try
            {
                var result = _patient.GetPatientsAsync();
                return Ok(result);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
