using System.Reflection;
using Application.Infrastructure.Persistance;
using Application.Infrastructure.Swagger;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper(typeof(Startup));
            services.AddMediatR(typeof(Startup));
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddSpaStaticFiles(options => options.RootPath = "ClientApp/build");
            services.AddSwagger(configuration);
            services.AddPersistance(configuration);
            
            return services;
        }

        public static IApplicationBuilder UseInfrastructure(this IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSwagger(env);
            
            return app;
        }
    }
}