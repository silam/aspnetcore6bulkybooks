using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WCFClient.basicHttpbindingservice;

namespace WCFClient
{
    class Program
    {
        static void Main(string[] args)
        {
            using (basicHttpbindingservice.CustomerServiceClient customerServiceClient = new CustomerServiceClient("BasicHttpBinding_ICustomerService"))
            {
                Console.WriteLine("***** Console Based WCF Client Started *****");
                Customer customer = customerServiceClient.GetCustomerDetails(1);
                Console.WriteLine("***** Consume WCF Service *****");
                Console.WriteLine("HTTP Binding WCF Service Response :{0}", customer.CustomerName);
                Console.ReadLine();

            }
        }
    }
}
