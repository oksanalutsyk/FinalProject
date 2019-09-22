import { Component, OnInit } from '@angular/core';
import { MessageServices } from 'src/app/shared/services/message-services';
import { IMessage } from 'src/app/shared/interfaces/message.interface';


@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {
  adminMessage: Array<IMessage> = []
  messageId: number;


  constructor(private messageService: MessageServices) {
    this.getMessage()
  }

  ngOnInit() {
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
  public isDeleteMessage(message: IMessage): void {
    const id = message.id
    this.messageService.delMessage(id).subscribe(
      () => {
        this.getMessage();
      }
    )
  }
}
