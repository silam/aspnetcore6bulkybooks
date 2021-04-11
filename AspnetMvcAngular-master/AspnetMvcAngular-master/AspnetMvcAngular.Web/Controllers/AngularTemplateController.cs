using System.Web.Mvc;

namespace AspnetMvcAngular.Web.Controllers
{
    public class AngularTemplateController : Controller
    {
        public PartialViewResult RenderView(string name) {
            return PartialView($"~/app/templates/{name}");
        }
    }
}