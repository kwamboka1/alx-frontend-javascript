/// <reference path="crud.d.ts" />

import { rowID, rowElement } from './interface';
import * as CRUD from './crud';

/* object 
----------*/

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Saliva',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 23, ...row};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
