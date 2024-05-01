import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

interface Message {
  sender: string;
  content: string;
  userInput : string;
}

@Component({
    selector: 'app-chatbox',
    standalone: true,
    templateUrl: './chatbox.component.html',
    styleUrl: './chatbox.component.css',
    imports: [SidenavComponent,CommonModule,FormsModule]
})
export class ChatboxComponent {
    messages: Message[] = []; // Array to store chat messages
    userInput: string = ''; // User input
  
    constructor(private http: HttpClient) { } // Inject HttpClient for API calls (if applicable)
  
    ngOnInit() { }
  
    sendMessage() {
      if (this.userInput.trim() !== '') {
        try {
          this.queryLLM(this.userInput).then(response => {
            this.messages.push({ sender: 'LegalLens', content: response.message,userInput:this.userInput}); 
            this.userInput = '';
            console.log(this.messages)
          });
        } catch (error) {
          console.error('Error querying LLM:', error);
          this.messages.push({ sender: 'Error', content: 'There appears to be a problem please type your input again',userInput:this.userInput });
        }
      }
    }
  
    
    async queryLLM(userInput: string): Promise<any> {
      if (!this.http) { 
        throw new Error('HttpClient not available for legal lens communication');
      }
  
      const llmEndpoint = 'https://legal-legal-vkjha.ondigitalocean.app/chat_constituition/'; 

      // const llmEndpoint = 'http://127.0.0.1:8000/chat_constituition/';
      const requestBody = { query: userInput };
      const response = await this.http.post<any>(llmEndpoint, requestBody).toPromise();
      return response
    }

}
