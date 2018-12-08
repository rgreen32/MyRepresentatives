using System;

namespace MyRepresentatives.Core.Settings {

    public interface IGoogleSettings {
        string CivicInfoApiKey { get; }
    }

    public class GoogleSettings : IGoogleSettings {
        public string CivicInfoApiKey =>
            Environment.GetEnvironmentVariable ("googleApiKey");
    }
}