using Microsoft.Extensions.DependencyInjection;
using MyRepresentatives.Services.NewsServices;
using MyRepresentatives.Services.RepresentativesServices;

namespace MyRepresentatives.Services {
    public static class ServiceCollectionExtensions {
        public static void AddMyRepresentativesServices (this IServiceCollection services) {
            services.AddScoped<IRepresentativesInfoService, RepresentativesInfoService> ();
            services.AddScoped<INewsService, NewsService>();
        }
    }
}