import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/shared/services/email.service';
import { IEmail } from 'src/app/shared/interfaces/email.interface';

@Component({
  selector: 'app-admin-email',
  templateUrl: './admin-email.component.html',
  styleUrls: ['./admin-email.component.css']
})
export class AdminEmailComponent implements OnInit {
  adminEmail: Array<IEmail> = []
  emailId: number;

  constructor(private emailService: EmailService) {
    this.getEmail()
  }

  ngOnInit() {
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
  public isDeleteEmail(email: IEmail): void {
    const id = email.id
    this.emailService.delEmail(id).subscribe(
      () => {
        this.getEmail();
      }
    )
  }
}
