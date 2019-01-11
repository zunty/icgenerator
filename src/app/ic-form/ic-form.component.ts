import { Component, OnInit, Input, ɵConsole, Pipe, PipeTransform  } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { parseString } from "xml2js";
import * as vkbeautify from 'vkbeautify';

@Pipe({
  name: 'xml'
})
export class XmlPipe implements PipeTransform {
  transform(value: string): string {
      return vkbeautify.xml(value);
  }
}

@Component({
  selector: "app-ic-form",
  templateUrl: "./ic-form.component.html",
  styleUrls: ["./ic-form.component.css"]
})
export class IcFormComponent implements OnInit {
  form: FormGroup;
  model: any = {};
  groupList: any = [];
  isNotFirefox = true;

  constructor() {}
  message = this.model;
  fileToUpload: File = null;

  ngOnInit() {
    if (navigator.userAgent.indexOf("Chrome") != -1) this.isNotFirefox = false;

    //this.model.serviceName = "TestServiceNameBAS"
    //this.model.icNumber = "TestDE.15"
    //this.model.serviceType = 'Business Activity Service'
    //this.model.status = 'In progress'
    //this.model.description = 'Does important things'
    //this.model.author = 'João Ribeiro'
    //this.model.eproseedName = 'jribeiro'
    this.model.soap = 'true'
    //this.model.soapEndpoint = 'soapEndpointURL'
    //this.model.rest = 'true'
    //this.model.restEndpoint = 'restEndpointURL'

    // Introduction Section:
    //1.2. Service Scope
    this.model.scopeServices = [
      //'ReviewClaimDataEntryDS',
      //'ReviewClaimDataEntryDS',
      //"ReviewClaimDataEntryDS"
    ];

    //1.3.Definitions, Acronyms, and Abbreviations
    this.model.definitions = [
      { acronym: "ESB", definition: "Enterprise Service Bus" },
      { acronym: "SIL", definition: "Services Integration Layer" },
      { acronym: "CDM", definition: "Common Data Model" },
      { acronym: "DCTM", definition: "Documentum" },
      { acronym: "ESS", definition: "Enterprise Scheduling Service" },
      { acronym: "SOA", definition: "Oracle Service-Oriented Architecture" },
      { acronym: "BPM", definition: "Oracle Business Process Management" },
      { acronym: "OHS", definition: "Oracle HTTP Server" },
      { acronym: "SOAP", definition: "Simple Object Access Protocol" },
      { acronym: "WSDL", definition: "Web Service Definition Language" }
    ];

    //Initialize some variables
    //1.4.References
    this.model.references = [
      {docReference: 'Technical Objects', url: 'https://wiki.eproseed.com/display/DMFC/02+-+Technical+Objects', version: '0.1'},
      //{docReference: 'Authorization', url: 'https://wiki.eproseed.com/display/DMFC/AuthorizationType', version: '0.4'},
    ];

    // Definition Section:
    //2.3. Service Description
    //this.model.serviceDescription = 'get a claim through the UI and then can edit it.'

    this.model.serviceFunctionalities = [
      //'Get last updated claim form interim DB and enrich it;',
      //'Set latest claim',
      //'Return set of claims'
    ];

    // Functionality Section:
    //3.1. Service Overview
    this.model.devURL = "http://esb-devwb-lb.daman.ae/";
    this.model.testURL = "http://esb-testwb-lb.daman.ae/";

    //Operations
    this.model.operations = [];

    // 4. Artifacts Section:
    // Result Codes
    this.model.resultCodes = [
      //{code: 'FIN-0003201', description: 'Success'},
      //{code: 'FIN-9003202', description: 'Service Fault'},
      //{code: 'FIN-9003203', description: 'InvalidInput'}
    ];

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
  };

  addScopeService(name) {
    this.model.scopeServices.push(name);
  }

  deleteScopeService(delElem) {
    var index = this.model.scopeServices.indexOf(delElem);
    if (index > -1) {
      this.model.scopeServices.splice(index, 1);
    }
  }

  addServiceFunctionalities(name) {
    this.model.serviceFunctionalities.push(name);
  }

  deleteServiceFunctionalities(delElem) {
    var index = this.model.serviceFunctionalities.indexOf(delElem);
    if (index > -1) {
      this.model.serviceFunctionalities.splice(index, 1);
    }
  }

  addReferences(givenname, givenurl, givenversion) {
    var newRef = [
      { docReference: givenname, url: givenurl, version: givenversion }
    ];
    this.model.references.push(newRef[0]);
  }

  deleteReference(delElem: any) {
    var index = this.model.references
      .map(function(e) {
        return e.docReference;
      })
      .indexOf(delElem);
    if (index > -1) {
      this.model.references.splice(index, 1);
    }
  }

  addResultCode(givencode, givendescription) {
    var newCode = [{ code: givencode, description: givendescription }];
    this.model.resultCodes.push(newCode[0]);
  }

  deleteResultCode(delElem: any) {
    var index = this.model.resultCodes
      .map(function(e) {
        return e.code;
      })
      .indexOf(delElem);
    if (index > -1) {
      this.model.resultCodes.splice(index, 1);
    }
  }

  addOperation(givenName){
    var operationSample = {
      name: givenName,
      type: "",
      reqFields: [],
      respFields: [],
      requestText: [],
      responseText: []
    };
    this.model.operations.push(operationSample);
  }

  onSubmit() {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.model));
  }

  copyContentToClipboard() {
    var selection = window.getSelection();
    selection.removeAllRanges;
    var range = document.createRange();
    range.selectNode(document.getElementById("content"));
    selection.addRange(range);
    document.execCommand("copy");
  }

  copyTitleToClipboard() {
    var selection = window.getSelection();
    selection.removeAllRanges;
    var range2 = document.createRange();
    range2.selectNode(document.getElementById("title-text"));
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

    _model.operations = []; //Clean Variable

    parseString(data, function(err, result) {
      var nOperations = data.match(/<con:operation/g).length;
      var serviceName = result["con:soapui-project"]["con:interface"][0].$.name;

      if (serviceName) {
        serviceName = serviceName.replace("Service", "");
        serviceName = serviceName.replace("Binding", "");
        _model.serviceName = serviceName;
        for (let type in _this.serviceType) {
          let endWith = type + "$";
          if (serviceName.search(endWith) != -1) {
            _model.serviceType = _this.serviceType[type];
            break;
          }
        }
      }

      //Operations info extraction
      for (var i = 0; i < nOperations; i++) {
        var operationSample = {
          name: "",
          type: "",
          reqFields: [],
          respFields: [],
          requestText: [],
          responseText: []
        };

        operationSample.name =
          result["con:soapui-project"]["con:interface"][0]["con:operation"][
            i
          ].$.name;

        operationSample.requestText =
          result["con:soapui-project"]["con:interface"][0]["con:operation"][i][
            "con:call"
          ][0]["con:request"][0].replace(/\\r|\n/g, "");
          

        var nElem = 0;

        parseString(operationSample.requestText, function(err, reqResult) {
          for (let x in reqResult["soapenv:Envelope"]) {
            if (x === "_") {
              continue;
            }

            for (
              var xi = 0;
              xi < reqResult["soapenv:Envelope"][x].length;
              xi++
            ) {
              
              for (let y in reqResult["soapenv:Envelope"][x][xi]) {
                if (y === "_") {
                  continue;
                }

                for (
                  var yi = 0;
                  yi < reqResult["soapenv:Envelope"][x][xi][y].length;
                  yi++
                ) {
                  
                  for (let z in reqResult["soapenv:Envelope"][x][xi][y][yi]) {
                    if (z === "_" || z === "0") {
                      continue;
                    }

                    var respElemZ = {
                      mandatory: "",
                      name: "",
                      type: "",
                      description: "",
                      nSpaces: []
                    };

                    respElemZ.name = z.substring(z.indexOf(":") + 1);
                    respElemZ.type = "XML Element";
                    respElemZ.mandatory = "[1]";
                    respElemZ.description = "Parent element";
                    operationSample.reqFields.push(respElemZ);
                    nElem++;

                    if (z.includes("CBMHeader")){respElemZ.description="HeaderType in Technical Objects"; continue;}

                    for (
                      var zi = 0;
                      zi <
                      reqResult["soapenv:Envelope"][x][xi][y][yi][z].length;
                      zi++
                    ) {
                                           
                      for (let k in reqResult["soapenv:Envelope"][x][xi][y][yi][
                        z
                      ][zi]) {
                        if (k === "_" || k === "0") {
                          continue;
                        }
                        if(!isNaN(+k.substring(k.indexOf(":") + 1))){continue;}
                       
                        var respElemK = {
                          mandatory: "",
                          name: "",
                          type: "",
                          description: "",
                          nSpaces: ['']
                        };
                        respElemK.name = k.substring(k.indexOf(":") + 1);
                        if(typeof reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][0] == 'string'){respElemK.mandatory = "[0,1]"; respElemK.type='String'}
                        else { if(respElemK.name.includes("List")){ respElemK.mandatory = "[0,∞]";respElemK.type=respElemK.name + 'Type'}
                               else {respElemK.mandatory = "[0,1]"; respElemK.type='XMLElement'}}
                        respElemK.description = "";
                        operationSample.reqFields.push(respElemK);
                        nElem++;


                        for (
                          var ki = 0;
                          ki <
                          reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k]
                            .length;
                          ki++
                        ) {

                          for (let w in reqResult["soapenv:Envelope"][x][xi][y][
                            yi
                          ][z][zi][k][ki]) {
                            if (w === "_" || w === "0") {
                              continue;
                            }
                            if(!isNaN(+w.substring(w.indexOf(":") + 1))){continue;}
                            
                            var respElemW = {
                              mandatory: "",
                              name: "",
                              type: "",
                              description: "",
                              nSpaces: ['','']
                            };
                            respElemW.name = w.substring(w.indexOf(":") + 1);
                            if(typeof reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w][0] == 'string'){respElemW.mandatory = "[0,1]"; respElemW.type='String'}
                            else { if(respElemW.name.includes("List")){ respElemW.mandatory = "[0,∞]";respElemW.type=respElemW.name + 'Type'}
                            else {respElemW.mandatory = "[0,1]";respElemW.type='XMLElement'}}  
                            respElemW.description = "";
                            operationSample.reqFields.push(respElemW);
                            nElem++;

                            for (
                              var wi = 0;
                              wi <
                              reqResult["soapenv:Envelope"][x][xi][y][yi][z][
                                zi
                              ][k][ki][w].length;
                              wi++
                            ) {
                              
                              for (let l in reqResult["soapenv:Envelope"][x][
                                xi
                              ][y][yi][z][zi][k][ki][w][wi]) {
                                if (l === "_") {
                                  continue;
                                }
                                if(!isNaN(+l.substring(l.indexOf(":") + 1))){continue;}

                                var respElemL = {
                                  mandatory: "",
                                  name: "",
                                  type: "",
                                  description: "",
                                  nSpaces: ['','','']
                                };
                                respElemL.name = l.substring(
                                  l.indexOf(":") + 1
                                );
                                if(typeof reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w][wi][l][0] == 'string'){respElemL.mandatory = "[0,1]";respElemL.type='String'}
                                else { if(respElemL.name.includes("List")){ respElemL.mandatory = "[0,∞]"; respElemL.type=respElemL.name + 'Type';}
                                       else {respElemL.mandatory = "[0,1]"; respElemL.type='XMLElement'}} 
                                respElemL.description = "";
                                operationSample.reqFields.push(respElemL);
                                nElem++;

                                for (
                                  var li = 0;
                                  li <
                                  reqResult["soapenv:Envelope"][x][xi][y][yi][z][
                                    zi
                                  ][k][ki][w][wi][l].length;
                                  li++
                                ) {
                                  
                                  for (let r in reqResult["soapenv:Envelope"][x][
                                    xi
                                  ][y][yi][z][zi][k][ki][w][wi][l][li]) {
                                    if (r === "_") {
                                      continue;
                                    }
                                    if(!isNaN(+r.substring(r.indexOf(":") + 1))){continue;}

                                    var respElemR = {
                                      mandatory: "",
                                      name: "",
                                      type: "",
                                      description: "",
                                      nSpaces: ['','','','']
                                    };
                                    respElemR.name = r.substring(
                                      r.indexOf(":") + 1
                                    );
                                    if(typeof reqResult["soapenv:Envelope"][x][xi][y][yi][z][zi][k][ki][w][wi][l][li][r][0] == 'string'){respElemR.mandatory = "[0,1]";respElemR.type='String'}
                                    else { if(respElemR.name.includes("List")){ respElemR.mandatory = "[0,∞]";respElemR.type=respElemR.name + 'Type'}
                                           else {respElemR.mandatory = "[0,1]";respElemR.type='XMLElement'}} 
                                    respElemR.description = "";
                                    operationSample.reqFields.push(respElemR);
                                    nElem++;
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
            }
          }
        });

        

        operationSample.responseText = ["<soapenv:Envelope></soapenv:Envelope>"]

        _model.operations.push(operationSample);

        //console.log(operationSample)
        //console.log(_model);
      }
    });
  }
}
