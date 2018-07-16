﻿// ------------------------------------------------------------------------------
//  <auto-generated>
//      This code was generated by SpecFlow (http://www.specflow.org/).
//      SpecFlow Version:2.2.0.0
//      SpecFlow Generator Version:2.2.0.0
// 
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
//  </auto-generated>
// ------------------------------------------------------------------------------
#region Designer generated code
#pragma warning disable
namespace VoyageSpecFlow.Features.VoyageStepfeatures
{
    using TechTalk.SpecFlow;
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("TechTalk.SpecFlow", "2.2.0.0")]
    [System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [NUnit.Framework.TestFixtureAttribute()]
    [NUnit.Framework.DescriptionAttribute("Voyage Login & Logout")]
    public partial class VoyageLoginLogoutFeature
    {
        
        private TechTalk.SpecFlow.ITestRunner testRunner;
        
#line 1 "SpecFlowFeatureLogin.feature"
#line hidden
        
        [NUnit.Framework.OneTimeSetUpAttribute()]
        public virtual void FeatureSetup()
        {
            testRunner = TechTalk.SpecFlow.TestRunnerManager.GetTestRunner();
            TechTalk.SpecFlow.FeatureInfo featureInfo = new TechTalk.SpecFlow.FeatureInfo(new System.Globalization.CultureInfo("en-US"), "Voyage Login & Logout", "\tIn order to get access to protected sections of the site\r\n\tA user\r\n    Should be" +
                    " able to sign in and sing out", ProgrammingLanguage.CSharp, ((string[])(null)));
            testRunner.OnFeatureStart(featureInfo);
        }
        
        [NUnit.Framework.OneTimeTearDownAttribute()]
        public virtual void FeatureTearDown()
        {
            testRunner.OnFeatureEnd();
            testRunner = null;
        }
        
        [NUnit.Framework.SetUpAttribute()]
        public virtual void TestInitialize()
        {
        }
        
        [NUnit.Framework.TearDownAttribute()]
        public virtual void ScenarioTearDown()
        {
            testRunner.OnScenarioEnd();
        }
        
        public virtual void ScenarioSetup(TechTalk.SpecFlow.ScenarioInfo scenarioInfo)
        {
            testRunner.OnScenarioStart(scenarioInfo);
        }
        
        public virtual void ScenarioCleanup()
        {
            testRunner.CollectScenarioErrors();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("User is not signed up")]
        public virtual void UserIsNotSignedUp()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("User is not signed up", ((string[])(null)));
#line 6
this.ScenarioSetup(scenarioInfo);
#line 7
      testRunner.Given("I do not exist as a user", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Given ");
#line 8
      testRunner.When("I sign in with valid credentials", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line 9
      testRunner.Then("I see an invalid login message", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line 10
      testRunner.And("I should be signed out", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "And ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("User logged in successfully")]
        public virtual void UserLoggedInSuccessfully()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("User logged in successfully", ((string[])(null)));
#line 12
this.ScenarioSetup(scenarioInfo);
#line 13
      testRunner.Given("I exist as a user", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Given ");
#line 14
      testRunner.When("I sign in with valid credentials", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line 15
      testRunner.Then("I should be signed in", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line 16
      testRunner.And("I should be on home page", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "And ");
#line hidden
            this.ScenarioCleanup();
        }
        
        [NUnit.Framework.TestAttribute()]
        [NUnit.Framework.DescriptionAttribute("User logged out")]
        public virtual void UserLoggedOut()
        {
            TechTalk.SpecFlow.ScenarioInfo scenarioInfo = new TechTalk.SpecFlow.ScenarioInfo("User logged out", ((string[])(null)));
#line 18
this.ScenarioSetup(scenarioInfo);
#line 19
      testRunner.Given("I am logged in", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Given ");
#line 20
      testRunner.Then("I should be on home page", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line 21
      testRunner.When("I click sign out button", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "When ");
#line 22
      testRunner.Then("I should be signed out", ((string)(null)), ((TechTalk.SpecFlow.Table)(null)), "Then ");
#line hidden
            this.ScenarioCleanup();
        }
    }
}
#pragma warning restore
#endregion