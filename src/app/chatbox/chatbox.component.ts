import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
    selector: 'app-chatbox',
    standalone: true,
    templateUrl: './chatbox.component.html',
    styleUrl: './chatbox.component.css',
    imports: [SidenavComponent]
})
export class ChatboxComponent {

}
