using Microsoft.Extensions.DependencyInjection;
using MyRepresentatives.Core.Settings;

namespace MyRepresentatives.Core {
    public static class ServiceCollectionExtensions {
        public static void AddMyRepresentativesCore (this IServiceCollection services) {
            services.AddSingleton<IGoogleSettings, GoogleSettings> ();
        }
    }
}