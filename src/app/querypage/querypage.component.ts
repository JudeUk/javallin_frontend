import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ChatboxComponent } from "../chatbox/chatbox.component";

@Component({
    selector: 'app-querypage',
    standalone: true,
    templateUrl: './querypage.component.html',
    styleUrl: './querypage.component.css',
    imports: [SidenavComponent, ChatboxComponent]
})
export class QuerypageComponent {

}
 