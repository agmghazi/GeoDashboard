using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AspMVC_React.Startup))]
namespace AspMVC_React
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
