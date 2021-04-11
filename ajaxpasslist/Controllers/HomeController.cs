using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ajaxpasslist.Controllers
{
    public class Customer
    {
        public string Name { get; set; }
        public string Age { get; set; }
    }
    public class HomeController : Controller
    {
        [HttpPost]
        public JsonResult GetValues(List<Customer> row)
        {
            return Json(row);
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}