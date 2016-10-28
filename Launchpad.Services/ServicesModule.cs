﻿using Autofac;
using Launchpad.Services.Interfaces;
using System.Net.Http;

namespace Launchpad.Services
{
    public class ServicesModule : Module
    {
        /* Note: If this module is shared with an application that does not have a request lifecycle, these registrations
         * need to be updated (Instance Per Request will cause an error) See the reference link for options
         * Reference: http://docs.autofac.org/en/latest/faq/per-request-scope.html
         * */
        protected override void Load(ContainerBuilder builder)
        {
            //This will register the type WidgetService as it's implemented interfaces. In this case, dependencies on IWidgetService will resolve to a concrete
            //instance of WidgetService
            builder.RegisterType<WidgetService>()
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterType<StatusCollectorService>()
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterType<HttpClient>()
                .InstancePerRequest(); //Let the container dispose of it at the end of the request

            builder.RegisterAssemblyTypes(ThisAssembly)
                .AssignableTo<IStatusMonitor>()
                .AsImplementedInterfaces()
                .InstancePerRequest();

            builder.RegisterType<RequestMetricsService>()
                .AsImplementedInterfaces()
                .SingleInstance();

            builder.RegisterType<UserService>()
                .AsImplementedInterfaces()
                .InstancePerRequest();
                
        }
    }
}