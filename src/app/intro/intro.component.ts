import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  
  //Global Variables
  serviceName = 'ReviewClaimDataEntryBAS'
  serviceType = 'Business Activity Service'
  version = '0.1'
  previousVersion = 'None'
  icNumber = 'DE14.02.01.93'
  virtualization = 'Virtualization' //If it's not a virtualization leave blank: ''
  status='Full Implementation'
  startDate = '15/12/2018'
  endDate = '20/12/2018'
  protocol = 'SOAP/REST' //protocols used: SOAP, REST or both (SOAP/REST)


  // Document Control Section:
  //Change Record
  changesRegisters = [
  { dateFormat1: '2018-07-31', dateFormat2: '31/07/2018',  name: 'João Ribeiro', eproseedName: 'jribeiro', version: '0.1', changes: 'Created document'},
  { dateFormat1: '2018-08-31', dateFormat2: '31/08/2018',  name: 'Vitor Fernandes', eproseedName: 'vhfernandes', version: '0.2', changes: 'Added diagrams and tables'},
  { dateFormat1: '2018-09-12', dateFormat2: '12/09/2018',  name: 'João Ribeiro', eproseedName: 'jribeiro', version: '0.3', changes: 'Added Aris diagram'}
  ]
  usersUrl: 'https://wiki.eproseed.com/display/'

  //Reviewers
  reviewersRegisters = [
  { dateFormat1: '2018-07-31', dateFormat2: '31/07/2018',  name: 'João Ribeiro', eproseedName: 'jribeiro', position:'Team leader'},
  { dateFormat1: '2018-08-31', dateFormat2: '31/08/2018',  name: 'Vitor Fernandes', eproseedName: 'vhfernandes', position:'Code Manager'}
  ]

  //References 
  references = [
  	{docReference: 'Technical Objects', url: 'https://wiki.eproseed.com/display/DMFC/02+-+Technical+Objects', version: '0.1'},
  	{docReference: 'Authorization', url: 'https://wiki.eproseed.com/display/DMFC/AuthorizationType', version: '0.4'},
  ]


  // Introduction Section:
  //1.2. Service Scope
  scopeServices = [
   'ReviewClaimDataEntryBAS',
   'ReviewClaimDataEntryDS'
  ]

  //1.3.Definitions, Acronyms, and Abbreviations
  definition = [
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

  // Definition Section:
  //2.3. Service Description
  serviceDescription = 'get a claim through the UI and then can edit it.'

  serviceFunctionalities = [
   'Get last updated claim form interim DB and enrich it;',
   'Set latest claim',
   'Return set of claims'
  ]


  // Functionality Section:
  //3.1. Service Overview
  devURL = 'http://esb-devwb-lb.daman.ae/'
  testURL = 'http://esb-testwb-lb.daman.ae/'
  endpoints = [
  {name: 'SOAP Endpoint', endpoint: 'daman-fsip-esb-osb-finance-bas-review-claim-data-entry/ProxyServices/ReviewClaimDataEntryBASSOAP'},
  {name: 'REST Endpoint', endpoint: 'fsip/esb/api/daman-fsip-esb-osb-finance-app/review-claim-data-entry-bas/data-entry/v4/ReviewClaimDataEntryBASREST'}
  ]

  //Operations
  operations = [
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
  resultCodes = [
  	{code: 'FIN-0003201', description: 'Success'},
  	{code: 'FIN-9003202', description: 'Service Fault'},
  	{code: 'FIN-9003203', description: 'InvalidInput'}
  ]

 
  // 5. Open and Closed Issues:
  // Open Issues
    openIssues = [
  { id: '1', issue: 'OpenIssue1',  resolution: 'In progress', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
  { id: '1', issue: 'OpenIssue2',  resolution: 'In progress', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
  ]

  // Closed Issues
    closedIssues = [
 { id: '3', issue: 'ClosedIssue1',  resolution: 'Done', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
 { id: '4', issue: 'ClosedIssue1',  resolution: 'Done', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
 { id: '5', issue: 'ClosedIssue1',  resolution: 'Done', responsability: 'João Ribeiro', targetDate: '25/12/2018', impactDate: '25/12/2018'},
  ]

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
