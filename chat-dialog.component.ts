import { ChatService, Message } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  messages: Message[];
  formValue: string;
  scroller: any;
  timestamp: Date;

  constructor(private chat: ChatService,private http:HttpClient) { }

  ngOnInit() {
  }

  sendMessage() {
    this.http.post("https://polar-bayou-45040.herokuapp.com/get_data",{'user_query':this.formValue, 'session_id':"12345"})
    this.messages.push();
  }

}