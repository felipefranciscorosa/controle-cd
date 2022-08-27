import { Cd } from './../model/cd';
import { Constants } from './../util/constants';
import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { WebStorageUtil } from '../util/web-storage-util';
import { Shared } from '../util/shared';
import {CdPromisseService} from './../services/cd-promisse.service';

@Injectable()
export class CdStorageService {
  cds!: Cd[];
  private cdSource!: BehaviorSubject<number>;
  constructor(private cdPromisseService: CdPromisseService) {
    this.cdPromisseService.get().then((value) =>{this.cds =<Cd[]>value})
                          .catch((e) => {this.cds = [] });

  }

  save(cd: Cd) {
    this.cds.push(cd);
    this.cdPromisseService.post(cd).then((value) =>{})
    .catch((e) => {});
  }

  update(cd: Cd) {
    this.cds = this.cds.filter((c) => {
      return c.id?.valueOf() != cd.id?.valueOf();
    });
    this.cds.push(cd);
    this.cdPromisseService.put(cd).then((value) =>{})
    .catch((e) => {});
  }

  delete(cd: Cd): boolean {
    this.cds = this.cds.filter((c) => {return c.id?.valueOf() != cd.id?.valueOf();});
    this.cdPromisseService.delete(cd).then((value) =>{})
                                     .catch((e) => {});
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
    this.cds =  <Cd[]> await this.cdPromisseService.get();
    return this.cds;
  }

  notifyTotalCds() {
    this.cdSource.next(this.cds.length);
    // if (this.getUsers()?.length > 1) {
    //   this.userSource.complete();
    // }
  }

}
