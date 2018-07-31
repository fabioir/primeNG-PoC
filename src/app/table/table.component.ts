import { Component, OnInit } from '@angular/core';

import { DmnService } from '../dmn.service';

import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  cols: any = [{field: "test1", header: "test2"}];
  
  rules: any = [{test1: "test3"}];

  decisionTable: any;

  constructor(
    private dmnService: DmnService
  ) { }

  ngOnInit() {
    this.dmnService.parse()
  }

  launch(){
    this.decisionTable = this.dmnService.response.drgElements[0].decisionTable;
    console.log(this.decisionTable);
    this.cols = [{field: "other", header: "otherTest"}];
    this.rules = [{other: 'another'}];

    //Clear
    this.cols = [{field: "number", header: "Number"}];
    this.rules = [];
    //Lets go for the inputs
    let countInputs = 0;
    this.decisionTable.input.forEach(input => {
      const newCol = { field: `input${countInputs}`, header: `input${countInputs}`};

      this.cols.push(newCol);
      countInputs++;
    });

    //Lets go for the outputs
    let countOutputs = 0;
    this.decisionTable.output.forEach(output => {
      const newCol = { field: `output${countOutputs}`, header: `ouptut${countOutputs}`};

      this.cols.push(newCol);
      countOutputs++;
    });

    //Lets go for the rules
    let rowCount = 0;

    this.decisionTable.rule.forEach(rule => {
      const newRule = {};

      newRule['number'] = rowCount;
      rowCount++;

      //InputEntries
      let count = 0;
      rule.inputEntry.forEach(inputEntry => {
        newRule[`input${count}`] = inputEntry.text;
        count++;
      });

      //OutputEntries
      count = 0;
      rule.outputEntry.forEach(outputEntry => {
        newRule[`output${count}`] = outputEntry.text;
        count++;
      });

      this.rules.push(newRule);

     
    });
    console.log(this.cols);

  }

}
