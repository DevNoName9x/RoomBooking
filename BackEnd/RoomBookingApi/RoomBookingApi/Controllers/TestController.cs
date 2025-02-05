using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RoomBookingApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet("secure")]
        [Authorize] // Yêu cầu Token hợp lệ
        public IActionResult GetSecureData()
        {
            return Ok(new { message = "Bạn đã truy cập API bảo mật!" });
        }
    }
}
