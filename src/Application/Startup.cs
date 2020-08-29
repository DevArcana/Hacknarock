using System;
using System.Threading.Tasks;
using Application.Infrastructure;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Application
{
    public class Startup
    {
        private readonly Guid _fingerprint;
    
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            _fingerprint = Guid.NewGuid();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddFluentValidation(fv =>
            {
                fv.RunDefaultMvcValidationAfterFluentValidationExecutes = false;
            });
            
            services.AddInfrastructure(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseInfrastructure(env);

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            // Sign each response with the fingerprint
            app.Use((context, next) =>
            {
                context.Response.OnStarting(state =>
                {
                    context.Response.Headers.Add("Access-Control-Expose-Headers", "Api-Fingerprint");
                    context.Response.Headers.Add("Api-Fingerprint", new[] {_fingerprint.ToString()});

                    return Task.CompletedTask;
                }, context);
                return next.Invoke();
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
            app.UseSpaStaticFiles();
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer("start");
                }
            });
        }
    }
}
