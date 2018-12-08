using System.Net.Http;
using System.Threading.Tasks;
using System.Xml;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MyRepresentatives.Services.NewsServices {
    public interface INewsService {
        Task<JObject> GetNews ();
    }

    public class NewsService : INewsService {
        public async Task<JObject> GetNews () {
            HttpClient client = new HttpClient ();
            HttpResponseMessage response = await client.GetAsync ("https://www.google.com/alerts/feeds/08772208001329649335/34486127172127848");
            if (!response.IsSuccessStatusCode) {
                var errorMessage = await response.Content.ReadAsStringAsync ();
                var innerException = new HttpRequestException (errorMessage);
                throw new HttpRequestException ("Error getting info from vendor.", innerException);
            }
            HttpContent content = response.Content;
            string xml = await content.ReadAsStringAsync ();
            XmlDocument doc = new XmlDocument ();
            doc.LoadXml (xml);
            JObject json = JObject.Parse (JsonConvert.SerializeXmlNode (doc));
            return json;
        }
    }
}