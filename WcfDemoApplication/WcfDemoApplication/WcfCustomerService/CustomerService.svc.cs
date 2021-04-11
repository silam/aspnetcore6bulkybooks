using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace WcfCustomerService
{    
    public class CustomerService : ICustomerService
    {
        public string GetServerResponse(int value)
        {
            return string.Format("RESPONSE FROM WCF SERVICE :{0}", value);
        }

        public Customer GetCustomerDetails(int customerID)
        {
            Customer customer = null;
            if (customerID == 1)
            {
                customer = new Customer();
                customer.CustomerID = 1;
                customer.CustomerName = "Santosh Poojari";
            }
            return customer;
        }
    }
}
