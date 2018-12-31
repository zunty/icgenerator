import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ic-form',
  templateUrl: './ic-form.component.html',
  styleUrls: ['./ic-form.component.css']
})
export class IcFormComponent implements OnInit {
  form: FormGroup;
  model: any = {};
  groupList:any = [];
  boolTest=true;


  constructor() { }
  message = this.model

  ngOnInit() {

  // Introduction Section:
  //1.2. Service Scope
    this.model.scopeServices = [
    'ReviewClaimDataEntryBAS',
    'ReviewClaimDataEntryDS',
    'ReviewClaimDataEntryDS',
    'ReviewClaimDataEntryDS'
   ]

   
  //1.3.Definitions, Acronyms, and Abbreviations
  this.model.definitions = [
    {acronym: 'ESB', definition: 'Enterprise Service Bus'},
    {acronym: 'SIL', definition: 'Services Integration Layer'},
    {acronym: 'CDM', definition: 'Common Data Model'},
    {acronym: 'DCTM', definition: 'Documentum'},
    {acronym: 'ESS', definition: 'Enterprise Scheduling Service'},
    {acronym: 'SOA', definition: 'Oracle Service-Oriented Architecture'},
    {acronym: 'BPM', definition: 'Oracle Business Process Management'},
    {acronym: 'OHS', definition: 'Oracle HTTP Server'},
    {acronym: 'SOAP', definition: 'Simple Object Access Protocol'},
    {acronym: 'WSDL', definition: 'Web Service Definition Language'}
  ]

  //Initialize some variables
  //1.4.References 
  this.model.references = [
  	{docReference: 'Technical Objects', url: 'https://wiki.eproseed.com/display/DMFC/02+-+Technical+Objects', version: '0.1'},
  	{docReference: 'Authorization', url: 'https://wiki.eproseed.com/display/DMFC/AuthorizationType', version: '0.4'},
  ]

  
  // Definition Section:
  //2.3. Service Description
  this.model.serviceDescription = 'get a claim through the UI and then can edit it.'

  this.model.serviceFunctionalities = [
   'Get last updated claim form interim DB and enrich it;',
   'Set latest claim',
   'Return set of claims'
  ]

  // Functionality Section:
  //3.1. Service Overview
  this.model.devURL = 'http://esb-devwb-lb.daman.ae/'
  this.model.testURL = 'http://esb-testwb-lb.daman.ae/'
  this.model.endpoints = [
  {name: 'SOAP Endpoint', endpoint: 'daman-fsip-esb-osb-finance-bas-review-claim-data-entry/ProxyServices/ReviewClaimDataEntryBASSOAP'},
  {name: 'REST Endpoint', endpoint: 'fsip/esb/api/daman-fsip-esb-osb-finance-app/review-claim-data-entry-bas/data-entry/v4/ReviewClaimDataEntryBASREST'}
  ]

    //Operations
  this.model.operations = [
      {name: 'Operation example 1', 
       type: 'SOAP',
       reqFields: 
         [
          {mandatory:'[ 1 ]', name: 'RespHeader', type: 'XML Element', description: 'desc1'},
          {mandatory:'[ 0..1 ]', name: 'RespBody', type: 'XML Element2', description: 'desc2'},
          {mandatory:'[ 0..∞]', name: 'Authorization', type: 'XML Element3', description: 'desc3'}
         ],
        respFields: 
         [
          {mandatory:'[ 1 ]', name: 'RespHeader', type: 'XML Element', description: 'desc1'},
          {mandatory:'[ 0..1 ]', name: 'RespBody', type: 'XML Element2', description: 'desc2'},
          {mandatory:'[ 0..∞]', name: 'Authorization', type: 'XML Element3', description: 'desc3'}
         ],
           requestText : [
        {
          "ReqHeader" : {},
          "ReqBody" : {
            "Claim" : {
              "ClaimID" : "33172",
        }}
        }
        ],
        responseText : [
        {
          "ReqHeader" : {},
          "ReqBody" : {
            "Claim" : {
              "ClaimID" : "33172",
        }}
        }
        ]
      },
      {name: 'Operation example 2', 
       type: 'REST',
       reqFields: 
         [
          {mandatory:'[ 1 ]', name: 'RespHeader', type: 'XML Element', description: 'desc1'},
          {mandatory:'[ 0..1 ]', name: 'RespBody', type: 'XML Element2', description: 'desc2'},
          {mandatory:'[ 0..∞]', name: 'Authorization', type: 'XML Element3', description: 'desc3'}
         ],
        respFields: 
         [
          {mandatory:'[ 1 ]', name: 'RespHeader', type: 'XML Element', description: 'desc1'},
          {mandatory:'[ 0..1 ]', name: 'RespBody', type: 'XML Element2', description: 'desc2'},
          {mandatory:'[ 0..∞]', name: 'Authorization', type: 'XML Element3', description: 'desc3'}
         ],
           requestText : [
        {
          "ReqHeader" : {},
          "ReqBody" : {
            "Claim" : {
              "ClaimID" : "33172",
        }}
        }
        ],
        responseText : [
        {
          "ReqHeader" : {},
          "ReqBody" : {
            "Claim" : {
              "ClaimID" : "33172",
        }}
        }
        ]
      }
      ]


  // 4. Artifacts Section:
  // Result Codes
  this.model.resultCodes = [
  	{code: 'FIN-0003201', description: 'Success'},
  	{code: 'FIN-9003202', description: 'Service Fault'},
  	{code: 'FIN-9003203', description: 'InvalidInput'}
  ]

  // 5. Open and Closed Issues:
  // Open Issues
  this.model.openIssues = [
    { id: '1', issue: 'OpenIssue1',  resolution: 'In progress', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
    { id: '1', issue: 'OpenIssue2',  resolution: 'In progress', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
    ]
  
  // Closed Issues
  this.model.closedIssues = [
   { id: '3', issue: 'ClosedIssue1',  resolution: 'Done', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
   { id: '4', issue: 'ClosedIssue1',  resolution: 'Done', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
   { id: '5', issue: 'ClosedIssue1',  resolution: 'Done', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
    ]

  

    

  this.model.serviceName = "TestServiceName"
  this.model.icNumber = "TestDE.15"
  this.model.serviceType = 'Business Activity Service'
  this.model.status = 'In progress'
  this.model.description = 'Do important things'
  this.model.author = 'João Ribeiro'
  this.model.eproseedName = 'jribeiro'
    
  }

  addElement(name) {
    console.log(this.groupList)
    this.groupList.push(name);
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  copyToClipboard(){

      var range = document.createRange();
       range.selectNode(document.getElementById('content'));
       window.getSelection().addRange(range);
       document.execCommand("copy");
       alert("text copied") 
  
  }

}
