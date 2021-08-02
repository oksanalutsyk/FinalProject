import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmail } from 'src/app/shared/interfaces/email.interface';
import { NewEmail } from 'src/app/shared/classes/new-email.class';
import { EmailService } from 'src/app/shared/services/email.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {
  flex: any = "flex"
  adminEmail: Array<IEmail> = []
  emailEmail: string;
  emailId: number;

  newEmail: IEmail

  @ViewChild('myForm', { static: true }) signUpForm: NgForm;

  constructor(private emailService: EmailService) {

  }

  ngOnInit() {
    this.getEmail()
  }



  private getEmail(): void {
    this.emailService.getEmail().subscribe(
      data => {
        this.adminEmail = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  // Надсилання емейлу
  public isAddEmail(form: NgForm): void {
    const newEmail: IEmail = new NewEmail(
      0,
      this.emailEmail,
    );
    if (this.adminEmail.length >= 1) {
      newEmail.id = this.adminEmail.slice(-1)[0].id + 1;
      this.emailEmail = '',
        this.emailService.addEmail(newEmail).subscribe(
          () => {
            this.getEmail();
          })
    }
    else{
      this.newEmail = {
        id: 0,
        email: this.emailEmail,
      }
      this.adminEmail.push(newEmail)
      this.emailService.addEmail(newEmail).subscribe(
        () => {
          this.getEmail();
        })
        this.signUpForm.resetForm();
      }
  
      form.resetForm();
  }
}
