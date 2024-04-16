import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Message {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule]

})
export class ChatGptComponent {

  @ViewChild('messageContainer') messageContainer!: ElementRef;

  messages: Message[] = [];
  currentMessage: string = '';

  constructor(private http: HttpClient) { }

  sendMessage() {
    if (this.currentMessage.trim() === '') return;
  
    // Send the message to the Django backend
    this.http.post<any>('http://127.0.0.1:8000/chat_constituition/', { query: this.currentMessage })
      .subscribe(
        response => {
          // Handle the response from the backend
          console.log('Response from backend:', response);
          // Assuming 'as_output' and 'retriever_output' are keys in the response object
          const { as_output, retriever_output } = response;
          // Update the UI with the response
          this.messages.push({
            sender: 'ChatGPT',
            content: as_output // Display 'as_output' from the response
          });
          this.messages.push({
            sender: 'Retriever',
            content: retriever_output // Display 'retriever_output' from the response
          });
          // Scroll to the bottom of the chat container
          this.scrollToBottom();
        },
        error => {
          console.error('Error sending message to backend:', error);
          // Handle error if needed
        }
      );
  
    // Add user's message to the chat
    this.messages.push({
      sender: 'You',
      content: this.currentMessage
    });
  
    // Clear the input field
    this.currentMessage = '';
  
    // Scroll to the bottom of the chat container
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }, 0);
  }
}
