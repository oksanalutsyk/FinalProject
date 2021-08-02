import { Component, OnInit } from '@angular/core';
import { IAbout } from 'src/app/shared/interfaces/about.interface';
import { AboutService } from 'src/app/shared/services/about.service';
import { NewAbout } from 'src/app/shared/classes/new-about.class';


@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit {

  adminAbout: Array<IAbout> = []

  newAbout: IAbout
  audienceOld: number
  audienceNew: number
  saleOld: number
  saleNew: number

  editStatus: boolean = false
  editId: number;


  constructor(private aboutService: AboutService) {

  }

  ngOnInit() {
    this.getAbout()//виклик методу

  }


  private getAbout(): void {
    this.aboutService.getAbout().subscribe(
      data => {
        this.adminAbout = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  public isAddAbout(): void {
    const newAbout: IAbout = new NewAbout(
      0,
      this.audienceOld,
      this.audienceNew,
      this.saleOld,
      this.saleNew,
    );
    if (this.adminAbout.length >= 1) {
      this.newAbout.id = this.adminAbout.slice(-1)[0].id + 1;
      this.aboutService.addAbout(newAbout).subscribe(
        () => {
          this.getAbout();
        })
    }
    else {
      this.newAbout = {
        id: 0,
        oldPersentOne: this.audienceOld,
        newPersentOne: this.audienceNew,
        oldPersentTwo: this.saleOld,
        newPersentTwo: this.saleNew,
      }
      this.adminAbout.push(newAbout)
      this.aboutService.addAbout(newAbout).subscribe(
        () => {
          this.getAbout();
        })
    }

  }
  public isEditAbout(item: IAbout): void {
    console.log(item)
    this.editStatus = true;
    this.audienceOld = item.oldPersentOne
    this.audienceNew = item.newPersentOne
    this.saleOld = item.oldPersentTwo
    this.saleNew = item.newPersentTwo
    this.editId = item.id
  }

  public isSaveEditAbout(): void {
    const newAbout: IAbout = new NewAbout(
      1,
      this.audienceOld,
      this.audienceNew,
      this.saleOld,
      this.saleNew,

    );
    this.audienceOld = null,
      this.audienceNew = null,
      this.saleOld = null,
      this.saleNew = null,
      this.aboutService.editAbout(newAbout).subscribe(() => {
        this.getAbout();;
      })

    this.editStatus = false;
  }
}
