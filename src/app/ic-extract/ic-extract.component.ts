import { Component, OnInit } from '@angular/core';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-ic-extract',
  templateUrl: './ic-extract.component.html',
  styleUrls: ['./ic-extract.component.css']
})
export class IcExtractComponent implements OnInit {

  fileToUpload: File = null;
  xml: String = null;

  constructor() { 
  }

  ngOnInit() {
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
    parseString(data, function (err, result) {
      _this.xml = result["con:soapui-project"]["con:interface"][0].$.name;
    });
  }

}
