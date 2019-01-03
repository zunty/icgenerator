import { Component, OnInit, Input, ɵConsole} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { parseString } from 'xml2js';

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
  fileToUpload: File = null;

  ngOnInit() {
    this.model.serviceName = "TestServiceNameBAS"
    this.model.icNumber = "TestDE.15"
    this.model.serviceType = 'Business Activity Service'
    this.model.status = 'In progress'
    this.model.description = 'Do important things'
    this.model.author = 'João Ribeiro'
    this.model.eproseedName = 'jribeiro'
    this.model.soap = 'true'
    this.model.soapEndpoint = 'soapEndpointURL'
    this.model.rest = 'true'
    this.model.restEndpoint = 'restEndpointURL'

  // Introduction Section:
  //1.2. Service Scope
    this.model.scopeServices = [
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

/*
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
*/
    
  }

  addScopeService(name) {
    this.model.scopeServices.push(name);
  }

  deleteScopeService(delElem){
    var index = this.model.scopeServices.indexOf(delElem);
    if (index > -1) {
      this.model.scopeServices.splice(index, 1);
    }
  }

  addServiceFunctionalities(name) {
    this.model.serviceFunctionalities.push(name);
  }

  deleteServiceFunctionalities(delElem){
    var index = this.model.serviceFunctionalities.indexOf(delElem);
    if (index > -1) {
      this.model.serviceFunctionalities.splice(index, 1);
    }
  }

  addReferences(givenname,givenurl,givenversion) {
    var newRef = [
      {docReference: givenname, url: givenurl, version: givenversion},
    ]
    this.model.references.push(newRef[0]);
  }

  deleteReference(delElem: any){
    var index = this.model.references.map(function(e){return e.docReference}).indexOf(delElem);
    console.log
    if (index > -1) {
      this.model.references.splice(index, 1);
    }
  }

  addResultCode(givencode,givendescription) {
    var newCode = [
      {code: givencode, description: givendescription},
    ]
    this.model.resultCodes.push(newCode[0]);
  }

  deleteResultCode(delElem: any){
    var index = this.model.resultCodes.map(function(e){return e.code}).indexOf(delElem);
    console.log
    if (index > -1) {
      this.model.resultCodes.splice(index, 1);
    }
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  copyContentToClipboard(){
       var selection = window.getSelection();
       selection.removeAllRanges;
       var range = document.createRange();
       range.selectNode(document.getElementById('content'));
       console.log(range);
       selection.addRange(range);
       document.execCommand("copy");
  }

  copyTitleToClipboard(){
     
     var selection = window.getSelection();
     selection.removeAllRanges;
     var range2 = document.createRange();
     range2.selectNode(document.getElementById('title-text'));
     selection.addRange(range2);
     document.execCommand("copy");
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  extract() {
    var reader = new FileReader();
    var _this = this;
    reader.onloadend = function() {
      _this.show(String(reader.result));
    };
    reader.readAsText(this.fileToUpload);
  }

  show(data: String) {
    var _this = this;
    var _extracted = this.model;
    var nOperations = 2;
    parseString(data, function (err, result) {
      _extracted.serviceName = result["con:soapui-project"]["con:interface"][0].$.name;
      _extracted.icNumber = result["con:soapui-project"].$.name;
      console.log(result["con:soapui-project"]["con:interface"][0]["con:operation"][0].$.name)
      
      //Operations info extraction
      for(var i=0;i<nOperations;i++){
        _extracted.operations[i].name = result["con:soapui-project"]["con:interface"][0]["con:operation"][i].$.name
      }

    });
  }


}
