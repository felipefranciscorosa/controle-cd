import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Cd } from '../model/cd';
import { Constants } from '../util/constants';
import { NgForm } from '@angular/forms';
import { CdStorageService } from './first-storage.service';
import { WebStorageUtil } from '../util/web-storage-util';
import { Shared } from '../util/shared';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [CdStorageService],
})
export class FirstComponent implements OnInit,AfterViewInit{
  @ViewChild('form') form!: NgForm;

  cd!: Cd;
  cds!: Cd[];
  title = 'Primeiro App';

  constructor(private cdService: CdStorageService){

  }
  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.cd = new Cd("","",0,"",0);
    this.cds = this.cdService.getCds();
  }
  onSubmit(){
    if (!this.cdService.isExist(this.cd.album)) {
      this.cdService.save(this.cd);
    } else {
      this.cdService.update(this.cd);
    }

    this.form.reset();
    this.cd = new Cd("","",0,"",0);

    this.cds = this.cdService.getCds();

    this.cdService.notifyTotalCds();
  }
  onEdit(cd: Cd) {
    //this.user = user;
    let clone = Cd.clone(cd);
    this.cd = clone;
  }
  onDelete(album: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover ' + album
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.cdService.delete(album);

    this.cds = this.cdService.getCds();
    this.cdService.notifyTotalCds();
  }
  ngAfterViewInit(): void {

  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

