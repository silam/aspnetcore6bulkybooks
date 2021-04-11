using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Mail;
using System.Runtime.CompilerServices;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebApplicationUnitTest;
using WebApplicationUnitTest.Controllers;
using Moq;

namespace UnitTestProject2
{
    [TestClass]
    public class UnitTest1
    {
        string rname;
        WebApplicationUnitTest.Controllers.HomeController homecontroller = new WebApplicationUnitTest.Controllers.HomeController();


        [TestInitialize]
        public void TestInit()
        {
            homecontroller = new WebApplicationUnitTest.Controllers.HomeController();
            rname ="Lamsi";
        }
        [TestCleanup]
        public void TestCleanu()
        {
            homecontroller = null;
            rname = string.Empty;
        }

        [TestMethod]
        public void TestMethod1()
        {
            // A: Arange a class, object
            //WebApplicationUnitTest.Controllers.HomeController homecontroller = new WebApplicationUnitTest.Controllers.HomeController();
            // A: act to exeucte 
            string name = homecontroller.concat("Lam", "si");
            // Assert 
            Assert.AreEqual(rname, name,"Test Pass with return correct");


        }
        [TestMethod]
        public void TestMethod2()
        {
            string name = homecontroller.concat("Vi", "Lam");
            Assert.AreEqual(rname, name);
        }

        [TestMethod]
        public void TestMethod3()
        {
            List<string> first = new List<string>();
            first.Add("Si");

            List<string> second = new List<string>();
            second.Add("Lam");

            CollectionAssert.AreEqual(first, second);


        }
        [TestMethod]
        public void TestMethod4()
        {
            List<string> first = new List<string>();
            first.Add("Si");
            List<string> second = new List<string>();
            second.Add("SiLam");

            CollectionAssert.Contains(second, first);

        }
        [TestMethod]
        public void TestMethod5()
        {
            PrivateObject privObj = new PrivateObject(typeof(HomeController));
            var result = privObj.Invoke("Add", 10, 10);
            Assert.AreEqual(result, 20);

        }

        [TestMethod]
        public void TestMethod6()
        {
            Mock<checkEmployee> chk = new Mock<checkEmployee>();
            chk.Setup(x => x.checkEmp()).Returns(true);

            processEmployee proc = new processEmployee();
            Assert.AreEqual(proc.insertEmployee(chk.Object), true);
        }

        [TestMethod]
        public void TestMethod7()
        {
            Assert.AreEqual("SMS Sender", new sender().send(new smsSender()));
            Assert.AreEqual("email sender", new sender().send(new emailSender()));

        }
        [TestMethod]
        public void TestMethod8()
        {
            var mocksender = new Mock<ISender>();

            var senderobj = new sender().send(mocksender.Object);

        }

        [TestMethod]
        public void TestMethod9()
        {
            StubExtensionManager stubManger = new StubExtensionManager();
            FileChecker fc = new FileChecker(stubManger);

            bool ret = fc.CheckFile("myfile");

            Assert.AreEqual(true, ret);
        }


        [TestMethod]
        public void TestMethod10()
        {
            // arange
            MockExtensionService mockservice = new MockExtensionService();

            // injection
            ExtensionAnalyzer analyzer = new ExtensionAnalyzer(mockservice);

            // act
            analyzer.ExtensionCheck("myfile");

            //assert
            Assert.AreEqual(mockservice.errormessage, "Wrong Type");

        }
    }
}
