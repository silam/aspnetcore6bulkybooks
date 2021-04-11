using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WcfCustomerService;
using System.ServiceModel;

namespace WcfHost
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("***** Console Based WCF Host Engine *****");

                using (ServiceHost serviceHost = new ServiceHost(typeof(CustomerService)))
                {
                    // Open the HOST and Start LISTENING for incoming messages.
                    serviceHost.Open();
                    Console.WriteLine();
                    Console.WriteLine("***** Host Information *****");
                    foreach (System.ServiceModel.Description.ServiceEndpoint serviceEndpoint in serviceHost.Description.Endpoints)
                    {
                        Console.WriteLine("A [Address]: {0}", serviceEndpoint.Address);
                        Console.WriteLine("B [Binding]: {0}", serviceEndpoint.Binding.Name);
                        Console.WriteLine("C [Contract]: {0}", serviceEndpoint.Contract.Name);
                        Console.WriteLine();
                    }
                    Console.WriteLine("**********************");
                    
                    // Keep the service running until the Enter key is pressed.
                    Console.WriteLine("THE WCF-CUSTOMER-SERIVE IS RUNNING.");
                    Console.WriteLine("PRESS ENTER-KEY TO END WCF SERVICE.");
                    Console.ReadLine();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}
