import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/shared/services/about.service';
import { TextService } from 'src/app/shared/services/text.service';
import { IAbout } from 'src/app/shared/interfaces/about.interface';
import { IText } from 'src/app/shared/interfaces/text.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `]
})
export class AboutComponent implements OnInit {
  adminAbout: Array<IAbout> = [];
  adminText:Array<IText> = [];


  constructor(private aboutService: AboutService, private textService: TextService) {
    this.getAbout()//виклик методу
    this.getText()//виклик методу

   }

  ngOnInit() {

  }

  // GET
  private getText(): void {
    this.textService.getText().subscribe(
      data => {
        this.adminText = data;
      },
      err => {
        console.log(err)
      }
    )
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
}
