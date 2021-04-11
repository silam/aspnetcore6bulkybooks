using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WCFClient.BasicHttpBindingService;
using WCFClient.IISHostCustomerService;
using System.Threading;
namespace WCFClient
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("...HTTP BINDING...");
                
                using (BasicHttpBindingService.CustomerServiceClient customerServiceClient1 = new BasicHttpBindingService.CustomerServiceClient("BasicHttpBinding_ICustomerService"))
                {
                    Console.WriteLine("***** Console Based WCF Client Started *****");
                    BasicHttpBindingService.Customer customer = customerServiceClient1.GetCustomerDetails(1);
                    Console.WriteLine("***** Consume WCF Service *****");
                    Console.WriteLine("HTTP Binding WCF Service Response :{0}", customer.CustomerName);                    
                }
                Console.WriteLine("...");
                Console.WriteLine("...TCP BINDING...");
                using (BasicHttpBindingService.CustomerServiceClient customerServiceClient2 = new BasicHttpBindingService.CustomerServiceClient("NetTcpBinding_ICustomerService"))
                {
                    Console.WriteLine("***** Console Based WCF Client Started *****");
                    BasicHttpBindingService.Customer customer = customerServiceClient2.GetCustomerDetails(1);
                    Console.WriteLine("***** Consume WCF Service *****");
                    Console.WriteLine("TCP Binding WCF Service Response :{0}", customer.CustomerName);                 
                }
                Console.WriteLine("...");
                Console.WriteLine("...IIS HTTP BINDING...");
                using (IISHostCustomerService.CustomerServiceClient customerServiceClient3 = new IISHostCustomerService.CustomerServiceClient("BasicHttpBinding_ICustomerService1"))
                {
                    Console.WriteLine("***** Console Based WCF Client Started *****");
                    IISHostCustomerService.Customer customer = customerServiceClient3.GetCustomerDetails(1);
                    Console.WriteLine("***** Consume WCF Service *****");
                    Console.WriteLine("IIS HTTP Binding WCF Service Response :{0}", customer.CustomerName);
                }
                Console.WriteLine("...");
                Console.WriteLine("...Async Calling of WCF Service...");
                Console.WriteLine("***** The Async Customer Client *****\n");

                using (AsynchronousCallWCFService.CustomerServiceClient asynProxyService = new AsynchronousCallWCFService.CustomerServiceClient("NetTcpBinding_ICustomerService1"))
                {
                    asynProxyService.Open();

                    // Add numbers in an async manner, using a lambda expression.
                    IAsyncResult asyncResult = asynProxyService.BeginGetServerResponse(786,
                      strResult =>
                      {
                          Console.WriteLine("Get Server Response = {0}", asynProxyService.EndGetServerResponse(strResult));
                      },
                      null);

                    while (!asyncResult.IsCompleted)
                    {
                        Thread.Sleep(100);
                        Console.WriteLine("In Progress...");
                    }
                }
                Console.ReadLine();         
            }
            catch (Exception ex)
            {
                Console.WriteLine("Aysnhcronous WCFClient Server Response ERROR:{0}", ex);
            }

        }
    }
}
