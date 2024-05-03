import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

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
    isLoading: boolean = false;
    constructor(private http: HttpClient) { } // Inject HttpClient for API calls (if applicable)
  
    ngOnInit() { }
  

    // Saveline sendMessage
    sendMessage(event?: any) {
      // Check if the event is provided and prevent default behavior
      if (event) {
        event.preventDefault();
      }
      if (this.userInput.trim() !== '') {
        this.isLoading = true; // Set loading state to true when sending a message
        try {
          this.queryLLM(this.userInput).then(response => {
            this.messages.push({ sender: 'LegalLens', content: response.message,userInput:this.userInput}); 
            this.userInput = '';
            this.isLoading = false; // Set loading state to false after receiving a response
            console.log(this.messages)
          });
        } catch (error) {
          console.error('Error querying LLM:', error);
          this.messages.push({ sender: 'Error', content: 'There appears to be a problem please type your input again',userInput:this.userInput });
          this.isLoading = false; // Ensure loading state is set to false even in case of error
        }
      }
    }
  
    // Saveline queryLLM
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


//     sendMessage() {
//       if (this.userInput.trim() !== '') {
//           this.isLoading = true; // Set loading state to true when sending a message
//           this.queryLLM(this.userInput).subscribe({

              
//               next: (response) => {
//                   this.messages.push({ sender: 'LegalLens', content: response, userInput: this.userInput });
//                   this.userInput = '';
//               },
//               error: (error) => {
//                   console.error('Error querying LLM:', error);
//                   this.messages.push({ sender: 'Error', content: 'There appears to be a problem please type your input again', userInput: this.userInput });
//               },
//               complete: () => {
//                   this.isLoading = false; // Set loading state to false after receiving a response
//               }
//           });
//       }
//   }
  


//   queryLLM(userInput: string): Observable<string> {
//     // const llmEndpoint = 'https://legal-legal-vkjha.ondigitalocean.app/chat_constituition/'; 

//     const llmEndpoint = 'http://127.0.0.1:8000/chat_constituition/';
//     return new Observable<string>(observer => {
//         fetch(llmEndpoint, {
//             method: 'POST',
//             body: JSON.stringify({ query: userInput }),
//             headers: {
//                 'Content-Type': 'application/json',
//                 // Add any necessary headers here
//             },
//         }).then(response => {
//             const reader = response.body?.getReader();
//             const decoder = new TextDecoder();
//             if (!response.ok) {
//                 // Handle response error
//                 observer.error('Error querying LLM');
//                 return;
//             }

//             function push() {
//                 return reader?.read().then(({ done, value }) => {
//                     if (done) {
//                         observer.complete();
//                         return;
//                     }

//                     // Parse text content from response
//                     const events = decoder.decode(value).split('\n\n');
//                     let content = '';
//                     for (let i = 0; i < events.length; i++) {
//                         const event = events[i];
//                         if (event === 'data: [DONE]') break;
//                         if (event && event.slice(0, 6) === 'data: ') {
//                             const data = JSON.parse(event.slice(6));
//                             content += data.choices[0].delta?.content || '';
//                         }
//                     }
//                     observer.next(content);
//                     push();
//                 });
//             }

//             push();
//         }).catch((err: Error) => {
//             // Handle fetch error
//             observer.error('Error querying LLM');
//         });
//     });
// }

}
