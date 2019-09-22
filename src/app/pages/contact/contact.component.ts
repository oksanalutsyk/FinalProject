import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageServices } from 'src/app/shared/services/message-services';
import { TextService } from 'src/app/shared/services/text.service';
import { IMessage } from 'src/app/shared/interfaces/message.interface';
import { NewMessage } from 'src/app/shared/classes/new-message.class';
import { NgForm } from '@angular/forms';
import { IText } from 'src/app/shared/interfaces/text.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  adminMessage: Array<IMessage> = []
  adminText: Array<IText> = []
  messageName: string;
  messageEmail: string;
  messageText: string;
  messageId: number;

  newMesage: IMessage;

  @ViewChild('myForm', { static: true }) signUpForm: NgForm;

  constructor(private messageService: MessageServices, private textService: TextService) {

  }

  ngOnInit() {
    this.getMessage()
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

  private getMessage(): void {
    this.messageService.getMessage().subscribe(
      data => {
        this.adminMessage = data;
      },
      err => {
        console.log(err)
      }
    )
  }
  public isAddMessage(form: NgForm): void {
    const newMessage: IMessage = new NewMessage(
      0,
      this.messageName,
      this.messageEmail,
      this.messageText,
    );
    if (this.adminMessage.length >= 1) {
      newMessage.id = this.adminMessage.slice(-1)[0].id + 1;
      this.messageName = '',
        this.messageEmail = '',
        this.messageText = '',
        this.messageService.addMessage(newMessage).subscribe(
          () => {
            this.getMessage();
          })
    }
    else {
      this.newMesage = {
        id: 0,
        name: this.messageName,
        email: this.messageEmail,
        message: this.messageText,
      }
      this.adminMessage.push(newMessage)
      this.messageService.addMessage(newMessage).subscribe(
        () => {
          this.getMessage();
        })
      this.messageName = '',
        this.messageEmail = '',
        this.messageText = ''
      this.signUpForm.resetForm();
    }
    form.resetForm();
  }


}
