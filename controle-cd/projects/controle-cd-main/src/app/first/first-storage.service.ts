import { Cd } from './../model/cd';
import { Constants } from './../util/constants';
import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { WebStorageUtil } from '../util/web-storage-util';
import { Shared } from '../util/shared';
import {CdObservableService} from './../services/cd-observable.service';

@Injectable()
export class CdStorageService {
  cds!: Cd[];
  private cdSource!: BehaviorSubject<number>;
  constructor(private cdObservableService: CdObservableService) {
    this.cdObservableService.getAll().subscribe((value) =>{this.cds =<Cd[]>value});

  }

  save(cd: Cd) {
    this.cds.push(cd);
    this.cdObservableService.post(cd).subscribe((value) =>{});
  }

  update(cd: Cd) {
    this.cds = this.cds.filter((c) => {
      return c.id?.valueOf() != cd.id?.valueOf();
    });
    this.cds.push(cd);
    this.cdObservableService.put(cd).subscribe((value) =>{});
  }

  delete(cd: Cd): boolean {
    this.cds = this.cds.filter((c) => {return c.id?.valueOf() != cd.id?.valueOf();});
    this.cdObservableService.delete(cd).subscribe((value) =>{});
    return true;
  }

  isExist(value: number): boolean {
    for (let c of this.cds) {
      if (c.id?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  async getCds(): Promise<Cd[]> {
    //this.cdPromisseService.get().then((value) =>{this.cds =<Cd[]>value
    //                                            return this.cds;
    //                                            })
    //                      .catch((e) => {this.cds = []
    //                                    return this.cds;
    //                                    })
    //                      ;
    //await
    this.cdObservableService.getAll().subscribe((value) =>{this.cds =<Cd[]>value});;
    return this.cds;
  }

  notifyTotalCds() {
    this.cdSource.next(this.cds.length);
    // if (this.getUsers()?.length > 1) {
    //   this.userSource.complete();
    // }
  }

}
