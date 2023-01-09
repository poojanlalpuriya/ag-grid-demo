import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ColDef, GridApi, GridReadyEvent, RowNode } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gridOptions: any;
  columnDefs: { field: string; type: string }[];
  rowData: { make: string; model: string; price: number }[];
  defaultColDef: { sortable: boolean };
  private gridApi!: GridApi;
  ageType!: string;
  ddValue: any;
  searchType!: any;
  graterless: { field: string }[];
  textField!: string;
  constructor() {
    this.defaultColDef = {
      sortable: true,
    };

    this.columnDefs = [
      { field: 'make', type: 'string' },
      { field: 'model', type: 'string' },
      { field: 'price', type: 'number' },
    ];
    this.graterless = [{ field: '>' }, { field: '<' }, { field: '=' }];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];
  }

  //Value Of type that we passed
  externalFilterChanged(newValue: any) {
    console.log('--->changes', newValue.target.value);

    this.textField = newValue.target.value;
    this.gridApi.onFilterChanged();
  }

  onGridReady(params: GridReadyEvent) {
    console.log('--->gridReady', params);
    console.log('--->val', this.searchType);
    console.log(params);
    this.gridApi = params.api;
  }

  isExternalFilterPresent(): boolean {
    // this.searchType = event;
    console.log(this.searchType);
    console.log(this.textField);
    console.log(this.gridApi);

    // if ageType is not everyone, then we are filtering
    return true;
  }

  doesExternalFilterPass(node: RowNode): boolean {
    console.log('--->pass', node);

    if (node.data) {
      console.log(this.ageType);
      console.log(this.searchType);

      this.textField = (
        document.getElementById('BlablaBla') as HTMLInputElement
      ).value;
      this.searchType = (
        document.getElementById('headerValue') as HTMLInputElement
      ).value;
      console.log(this.textField);

      // console.log(node.data['model']);
      if (this.textField) {
        return node.data[this.searchType] == this.textField;
      }
      // return node.data['make'] == this.textField;
      // switch (ageType) {
      //   case 'below25':
      //     return node.data.age < 25;
      //   case 'between25and50':
      //     return node.data.age >= 25 && node.data.age <= 50;
      //   case 'above50':
      //     return node.data.age > 50;
      //   case 'dateAfter2008':
      //     return asDate(node.data.date) > new Date(2008, 1, 1);
      //   default:
      //     return true;
      // }
    }
    return true;
  }

  ddValueChange(e: any) {
    console.log(e.target.value);
    this.searchType = e.target.value;
    console.log(this.searchType);
  }

  blabla() {
    this.gridApi.setQuickFilter(
      (document.getElementById('BlablaBla') as HTMLInputElement).value
    );
  }
}
