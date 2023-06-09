﻿using HM.BAL.Contractors;
using HM.BAL.Models.DTO;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> SavePatientAsync(PatientDTO data)
        {
            try
            {
                await _patient.SavePatientAsync(data);
                return Ok("Patient has been saved successfully!");
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }

}
