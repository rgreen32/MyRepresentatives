using System.Net.Http;
using System.Threading.Tasks;
using MyRepresentatives.Core.Settings;
using Newtonsoft.Json.Linq;

namespace MyRepresentatives.Services.RepresentativesServices {
    public interface IRepresentativesInfoService {
        Task<JObject> GetReprestatives (string address);
    }

    public class RepresentativesInfoService : IRepresentativesInfoService {
        private readonly IGoogleSettings _googleSettings;

        public RepresentativesInfoService (IGoogleSettings googleSettings) {
            _googleSettings = googleSettings;
        }

        public async Task<JObject> GetReprestatives(string address) {
            var key = _googleSettings.CivicInfoApiKey;
            using (var client = new HttpClient ()) {
                var response = await client.GetAsync ($"https://www.googleapis.com/civicinfo/v2/representatives?address={address}&key={key}");
                if (!response.IsSuccessStatusCode) {
                    var errorMessage = await response.Content.ReadAsStringAsync ();
                    var innerException = new HttpRequestException (errorMessage);
                    throw new HttpRequestException ("Error getting info from vendor.", innerException);
                }
                var content = await response.Content.ReadAsStringAsync ();
                JObject json = JObject.Parse (content);
                return json;
            }
        }
    }
}