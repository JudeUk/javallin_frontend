import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

interface Message {
  sender: string;
  content: string;
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
        console.log('heeeeey')
      if (this.userInput.trim() !== '') {
        try {
          this.queryLLM(this.userInput).then(response => {
            this.messages.push({ sender: 'LLM', content: response.message });
            this.userInput = ''; 
            console.log(response)
          });
        } catch (error) {
          console.error('Error querying LLM:', error);
          this.messages.push({ sender: 'Error', content: 'There appears to be a problem please type your input again' });
        }
      }
    }
  
    
    async queryLLM(userInput: string): Promise<any> {
      if (!this.http) { 
        throw new Error('HttpClient not available for LLM communication');
      }
  
      const llmEndpoint = 'https://legal-legal-vkjha.ondigitalocean.app/chat_constituition/'; 
      const requestBody = { query: userInput };
      const response = await this.http.post<any>(llmEndpoint, requestBody).toPromise();
      return response
    }

}
