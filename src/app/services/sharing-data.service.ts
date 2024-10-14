import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {


  private _idProductEventEmiter:EventEmitter<number>=new EventEmitter();

  constructor() { }

  get idProductEventEmiter(){
    return this._idProductEventEmiter;
  }
}
