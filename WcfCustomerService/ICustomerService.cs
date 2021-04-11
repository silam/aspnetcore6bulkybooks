using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace WcfCustomerService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface ICustomerService
    {

        [OperationContract]
        string GetData(int value);

        [OperationContract]
        CompositeType GetDataUsingDataContract(CompositeType composite);

        [OperationContract]
        string GetServerResponse(int value);

        [OperationContract]
        Customer GetCustomerDetails(int customerId);


        // TODO: Add your service operations here
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
    // Use a data contract as illustrated in the sample below to add composite types to service operations.
    [DataContract]
    public class CompositeType
    {
        bool boolValue = true;
        string stringValue = "Hello ";

        [DataMember]
        public bool BoolValue
        {
            get { return boolValue; }
            set { boolValue = value; }
        }

        [DataMember]
        public string StringValue
        {
            get { return stringValue; }
            set { stringValue = value; }
        }

        

    }
}
