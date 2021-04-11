
///https://blog.drinkbird.com/aspnet-mvc-angular-razor-templates/
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AspnetMvcAngular.Web.Startup))]
namespace AspnetMvcAngular.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
