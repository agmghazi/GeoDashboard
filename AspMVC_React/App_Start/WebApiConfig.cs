using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AspMVC_React.App_Start
{
    public class WebApiConfig
    {

        public static void Register(HttpConfiguration configuration)
        {
            //var settings = configuration.Formatters.JsonFormatter.SerializerSettings;
            //settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            //settings.Formatting = Newtonsoft.Json.Formatting.Indented;
           // configuration.MapHttpAttributeRoutes();
            

            configuration.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}