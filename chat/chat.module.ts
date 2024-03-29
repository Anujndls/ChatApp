import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';


@NgModule({
  declarations: [ChatDialogComponent],
  exports: [ChatDialogComponent], // <-- export here
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ChatService]
})
export class ChatModule { }
