using HM.Api.Contractors;
using HM.Api.Models.DTO;
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

        [HttpGet("GetPatients")]
        public async Task<IActionResult> GetPatientsAsync()
        {
            try
            {
                var result = await _patient.GetPatientsAsync();
                return Ok(result);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("SavePatient")]
        public async Task<IActionResult> SavePatientAsync([FromBody]PatientDTO data)
        {
            try
            {
                await _patient.SavePatientAsync(data);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }

}
