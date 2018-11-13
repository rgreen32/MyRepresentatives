using System;
using System.Xml;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MyRepresentatives.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {

        [HttpGet("[action]")]

        public async Task<JObject> Representatives([FromQuery] string address){
            
            string key = "AIzaSyC9CLZBzgPy6UOKvtfB6QXArls9bHYPd4Q";

            HttpClient client = new HttpClient();
            
            HttpResponseMessage response = await client.GetAsync("https://www.googleapis.com/civicinfo/v2/representatives?address="+address+"&key="+key);
            
            HttpContent content = response.Content;

            string mycontent = await content.ReadAsStringAsync();
            JObject json = JObject.Parse(mycontent);
            return json;

        }

        [HttpGet("[action]")]
        
        public async Task<JObject> News(){
            HttpClient client = new HttpClient();

            HttpResponseMessage response = await client.GetAsync("https://www.google.com/alerts/feeds/08772208001329649335/34486127172127848");
            
            HttpContent content = response.Content;

            string xml = await content.ReadAsStringAsync();

            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            JObject json = JObject.Parse(JsonConvert.SerializeXmlNode(doc));
            return json;


        }

    }
}
