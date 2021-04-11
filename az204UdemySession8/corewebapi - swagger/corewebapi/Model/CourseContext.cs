using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace corewebapi.Model
{
    public class CourseContext : DbContext
    {
        // Replace your connecting string
        readonly string connectionstring = "Server=tcp:az204sqldb.database.windows.net,1433;Initial Catalog=az204sqldatabase;Persist Security Info=False;User ID=sichilam;Password=Ham@32%91W21;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
        public DbSet<Course> Courses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(connectionstring);
            base.OnConfiguring(options);
        }
    }

    
}
