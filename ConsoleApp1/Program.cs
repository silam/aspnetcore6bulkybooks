using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WcfCustomerService;
using System.ServiceModel;
using System.ServiceModel.Description;
//https://www.codeproject.com/Articles/89312/Windows-Communication-Foundation-QuickStart-Multip
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Console based WCF Host Engine");
            using (ServiceHost serviceHost = new ServiceHost(typeof(CustomerService)))
            {
                serviceHost.Open();
                foreach (ServiceEndpoint serviceEndpoint in serviceHost.Description.Endpoints)
                {
                    Console.WriteLine(serviceEndpoint.Name);
                    Console.WriteLine(serviceEndpoint.Contract);
                    Console.WriteLine(serviceEndpoint.Address);
                    Console.WriteLine(serviceEndpoint.Binding);


                }

                Console.ReadLine();
            }
        }
    }
}

/*
netsh http add urlacl url=http://+:8000/ServiceModelSamples/Service user=mylocaluser

 You have created a service.

To test this service, you will need to create a client and use it to call the service. 
You can do this using the svcutil.exe tool from the command line with the following syntax:


svcutil.exe http://localhost:56098/CustomerService.svc?wsdl
You can also access the service description as a single file:

http://localhost:56098/CustomerService.svc?singleWsdl
This will generate a configuration file and a code file that contains the client class. Add the two files to your client application and use the generated client class to call the Service. For example:

C#

class Test
{
    static void Main()
    {
        CustomerServiceClient client = new CustomerServiceClient();

        // Use the 'client' variable to call operations on the service.

        // Always close the client.
        client.Close();
    }
}

 */
