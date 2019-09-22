import { Component, OnInit } from '@angular/core';
import { TextService } from 'src/app/shared/services/text.service';
import { IText } from 'src/app/shared/interfaces/text.interface';
import { NewText } from 'src/app/shared/classes/new-text.class';

@Component({
  selector: 'app-admin-text',
  templateUrl: './admin-text.component.html',
  styleUrls: ['./admin-text.component.css']
})
export class AdminTextComponent implements OnInit {

  adminText: Array<IText> = []
  newText: IText

  newArrivals: string;
  aboutStoryOne: string;
  aboutStoryTwo: string;
  aboutTeam: string;
  contactTeam: string;

  editStatus: boolean = false
  editId: number;


  constructor(private textService: TextService) { }

  ngOnInit() {
    this.getText()
  }
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

  public isAddText(): void {
    const newText: IText = new NewText(
      0,
      this.newArrivals,
      this.aboutStoryOne,
      this.aboutStoryTwo,
      this.aboutTeam,
      this.contactTeam,
    );
    if (this.adminText.length >= 1) {
      this.newText.id = this.adminText.slice(-1)[0].id + 1;
      this.textService.addText(this.newText).subscribe(
        () => {
          this.getText();
        })
    }
    else {
      this.newText = {
        id: 0,
        newArrivals: this.newArrivals,
        aboutStoryOne: this.aboutStoryOne,
        aboutStoryTwo: this.aboutStoryTwo,
        aboutTeam: this.aboutTeam,
        contactTeam: this.contactTeam,
      }
      this.adminText.push(this.newText)
      this.textService.addText(newText).subscribe(
        () => {
          this.getText();
        })
    }

  }

  public isEditText(item: IText): void {
    // console.log(item)
    this.editStatus = true;
    this.newArrivals = item.newArrivals
    this.aboutStoryOne = item.aboutStoryOne
    this.aboutStoryTwo = item.aboutStoryTwo
    this.aboutTeam = item.aboutTeam
    this.contactTeam = item.contactTeam
    // this.editId = item.id
  }


  public isSaveEditText(): void {
    const newText: IText = new NewText(
      1,
      this.newArrivals,
      this.aboutStoryOne,
      this.aboutStoryTwo,
      this.aboutTeam,
      this.contactTeam,

    );
    this.newArrivals = null,
      this.aboutStoryOne = null,
      this.aboutStoryTwo = null,
      this.aboutTeam = null,
      this.contactTeam = null,
      this.textService.editText(newText).subscribe(() => {
        this.getText();;
      })

    this.editStatus = false;
  }
}
