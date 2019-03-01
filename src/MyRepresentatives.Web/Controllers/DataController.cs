using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Mvc;
using MyRepresentatives.Services.NewsServices;
using MyRepresentatives.Services.RepresentativesServices;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MyRepresentatives.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class DataController : Controller {
        private readonly IRepresentativesInfoService _repsInfoService;
        private readonly INewsService _newsService;

        public DataController (IRepresentativesInfoService repsInfoService, INewsService newsService) {
            _repsInfoService = repsInfoService;
            _newsService = newsService;
        }

        [HttpGet ("[action]")]
        [ProducesResponseType(typeof(JObject), (int) HttpStatusCode.OK)]
        public async Task<IActionResult> Representatives ([FromQuery] string address) {
            var json = await _repsInfoService.GetReprestatives (address); 
            return Ok(json);
        }

        [HttpGet ("[action]")]
        [ProducesResponseType(typeof(JObject), (int) HttpStatusCode.OK)]
        public async Task<IActionResult> News () {
            var json = await _newsService.GetNews ();
            return Ok(json);
        }
    }
}