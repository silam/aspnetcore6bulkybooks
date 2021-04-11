using mvcapp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace webapi.Controllers
{
    public class CourseController : ApiController
    {
        List<Course> dtset;

        public CourseController()
        {
            dtset = new List<Course>()
            {
                new Course {Id=1,Name="AZ-104", Description="Microsoft Azure Administrator", Rating=4.5},
                new Course {Id=2,Name="AZ-204", Description="Microsoft Azure Developer", Rating=4.6},
                new Course {Id=3,Name="AZ-303", Description="Microsoft Azure Architect", Rating=4.7}
            };

        }
        // GET: api/Course
        public List<Course> Get()
        {
            return dtset;
        }

        // GET: api/Course/5
        public Course Get(int id)
        {
            Course obj = dtset.FirstOrDefault(c => c.Id == id);
            return obj;
        }

        // POST: api/Course
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Course/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Course/5
        public void Delete(int id)
        {
        }
    }
}
