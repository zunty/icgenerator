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
  this.model.operations = [];

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

  serviceType = {
    DS: "Data Service",
    CS: "Connectivity Service",
    BAS: "Business Activity Service",
    BPS: "Business Process Service",
    DECS: "Decision Service"
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
       /*var element = document.getElementById('content');
       var elemHTML = element.innerHTML.replace(new RegExp('http://localhost', 'g'),'') */
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
    var _model = this.model;
    var nOperations = 4;
    
    _model.operations= []; //Clean Variable

    parseString(data, function (err, result) {
      var serviceName = result["con:soapui-project"]["con:interface"][0].$.name;
      
      if (serviceName) {
        serviceName =  serviceName.replace("Service", "");
        serviceName =  serviceName.replace("Binding", "");  
        _model.serviceName = serviceName;
        for (let type in _this.serviceType) {
            let endWith = type + "$";
            if (serviceName.search(endWith) != -1) {
              _model.serviceType = _this.serviceType[type];
              break;
            }
        }
      }
      
      _model.icNumber = result["con:soapui-project"].$.name;
      console.log("dssfds" + result["con:soapui-project"]["con:interface"][0]["con:settings"][0]["con:part"])
      
      //Operations info extraction
      for(var i=0;i<nOperations;i++){

        var operationSample = {name:'',type:'',reqFields:[],respFields: [],requestText : [],responseText : []}

        operationSample.name = result["con:soapui-project"]["con:interface"][0]["con:operation"][i].$.name
        operationSample.requestText = result["con:soapui-project"]["con:interface"][0]["con:operation"][i]["con:call"][0]["con:request"][0]

        var nElem = 0;

        parseString(operationSample.requestText, function (err, reqResult) {
          for (let x in reqResult["soapenv:Envelope"]) {  
            if (x === '_') { continue; }          
            //console.log("x: " + x + ": "+ reqResult["soapenv:Envelope"][x] + " with length: " + reqResult["soapenv:Envelope"][x].length);

            for (var xi=0; xi<reqResult["soapenv:Envelope"][x].length; xi++) {            
              //console.log("   xi: " + xi);              
                for (let y in reqResult["soapenv:Envelope"][x][xi]) {
                  if (y === '_') { continue; }   
                  //console.log("      y:" + y + ": "+ reqResult["soapenv:Envelope"][x][xi][y] + " with length: " + reqResult["soapenv:Envelope"][x][xi][y].length);

                    for (var yi=0; yi<reqResult["soapenv:Envelope"][x][xi][y].length; yi++) {            
                      //console.log("         yi: " + yi);              
                        for (let z in reqResult["soapenv:Envelope"][x][xi][y][yi]) {
                          if (z === '_' || z === '0') { continue; }

                             
                          //console.log("            z:" + z + ": "+ reqResult["soapenv:Envelope"][x][xi][y][yi][z] + " with length: " + reqResult["soapenv:Envelope"][x][xi][y][yi][z].length);
                          var respElemZ = {mandatory:'', name: '', type: '', description: '', nSpaces:[]}
                          respElemZ.name = z.substring(z.indexOf(":") + 1)
                          respElemZ.type = "XML Element"
                          respElemZ.mandatory = "[1]"
                          respElemZ.description = "Parent element"
                          operationSample.reqFields.push(respElemZ);
                          nElem++;
                          if (z.includes('CBMHeader')) continue;

                          for (var zi=0; zi<reqResult["soapenv:Envelope"][x][xi][y][yi][z].length; zi++) {            
                            //console.log("         zi: " + zi);
                            var kbool=false;               
                              for (let k in reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi]) {
                                if (k === '_' || k === '0') { continue; }
                                if (k === '0') {
                                  kbool=true; continue;
                                }    
                                //console.log("            k:" + k + ": "+ reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k] + " with length: " + reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k].length);
                                var respElemK = {mandatory:'', name: '', type: '', description: '', nSpaces:['']}
                                respElemK.name = k.substring(k.indexOf(":") + 1)
                                respElemK.type = "XML Element"
                                if(kbool)respElemK.mandatory = "[0,1]"
                                else respElemK.mandatory = "[1]"
                                respElemK.description = ""
                                operationSample.reqFields.push(respElemK);
                                nElem++;
                                kbool=false

                                for (var ki=0; ki<reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k].length; ki++) {            
                                  //console.log("         ki: " + ki);
                                  var wbool=false;                
                                    for (let w in reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki]) {
                                      if (w === '_' || w === '0') { continue; }
                                      if (w === '0') {
                                        wbool=true; continue;
                                      }  
                                      //console.log("            w:" + w + ": "+ reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w] + " with length: " + reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w].length);
                                      var respElemW = {mandatory:'', name: '', type: '', description: '', nSpaces:['','']}
                                      respElemW.name = w.substring(w.indexOf(":") + 1)
                                      respElemW.type = "XML Element"
                                      if(wbool)respElemW.mandatory = "[0,1]"
                                      else respElemW.mandatory = "[1]"
                                      respElemW.description = ""
                                      operationSample.reqFields.push(respElemW);
                                      nElem++;
                                      wbool=false;

                                      for (var wi=0; wi<reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w].length; wi++) {            
                                        //console.log("         wi: " + wi);
                                        var lbool=false;              
                                          for (let l in reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w][wi]) {
                                            if (l === '_') { continue;} 
                                            if (l === '0') {
                                              lbool=true; continue;
                                            }
                                            if (l.match("list")) console.log("Value: " + l + " contains a list")
                                            //console.log("            l:" + l + ": "+ reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w][wi][l] + " with length: " + reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w][wi][l].length);
                                            var respElemL = {mandatory:'', name: '', type: '', description: '', nSpaces:['','','']}
                                            respElemL.name = l.substring(l.indexOf(":") + 1)
                                            respElemL.type = "XML Element"
                                            if(lbool)respElemL.mandatory = "[0,1]"
                                            else respElemL.mandatory = "[1]"
                                            respElemL.description = ""
                                            operationSample.reqFields.push(respElemL);
                                            nElem++;
                                            lbool=false;
                                        }
                                      }
                                  }
                                }
                            }
                          }
                      }
                    }
              }
            }
        }
        })
        

        operationSample.responseText = ["<soapenv:Envelope></soapenv:Envelope>"]

        _model.operations.push(operationSample);

        console.log(operationSample)
        console.log(_model)
        
      }

    });
  }


}
