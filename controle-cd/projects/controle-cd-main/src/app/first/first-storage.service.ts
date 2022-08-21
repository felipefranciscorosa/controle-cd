import { Cd } from './../model/cd';
import { Constants } from './../util/constants';
import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { WebStorageUtil } from '../util/web-storage-util';

@Injectable()
export class CdStorageService {
  cds!: Cd[];
  private cdSource!: BehaviorSubject<number>;
  constructor() {
    this.cds = WebStorageUtil.get(Constants.CDS_KEY);
    this.cdSource = new BehaviorSubject<number>(this.cds.length);
  }

  save(cd: Cd) {
    this.cds = WebStorageUtil.get(Constants.CDS_KEY);
    this.cds.push(cd);
    WebStorageUtil.set(Constants.CDS_KEY, this.cds);
  }

  update(cd: Cd) {
    this.cds = WebStorageUtil.get(Constants.CDS_KEY);
    this.delete(cd.album);
    this.save(cd);
  }

  delete(album: string): boolean {
    this.cds = WebStorageUtil.get(Constants.CDS_KEY);
    this.cds = this.cds.filter((c) => {
      return c.album?.valueOf() != album?.valueOf();
    });

    WebStorageUtil.set(Constants.CDS_KEY, this.cds);
    return true;
  }

  isExist(value: string): boolean {
    this.cds = WebStorageUtil.get(Constants.CDS_KEY);
    for (let c of this.cds) {
      if (c.album?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getCds(): Cd[] {
    this.cds = WebStorageUtil.get(Constants.CDS_KEY);
    return this.cds;
  }

  notifyTotalCds() {
    this.cdSource.next(this.getCds()?.length);
    // if (this.getUsers()?.length > 1) {
    //   this.userSource.complete();
    // }
  }

  asObservable(): Observable<number> {
    return this.cdSource;
    //return this.userSource.asObservable()
  }
}
