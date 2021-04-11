using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace WcfCustomerService
{
    [ServiceContract]
    public interface ICustomerService
    {
        [OperationContract]
        string GetServerResponse(int value);

        [OperationContract]
        Customer GetCustomerDetails(int customerID);
    }

    [DataContract]
    public class Customer
    {
        int m_CustomerID;
        string m_CustomerName = string.Empty;

        [DataMember]
        public int CustomerID
        {
            get { return m_CustomerID; }
            set { m_CustomerID = value; }
        }

        [DataMember]
        public string CustomerName
        {
            get { return m_CustomerName; }
            set { m_CustomerName = value; }
        }
    }
}
