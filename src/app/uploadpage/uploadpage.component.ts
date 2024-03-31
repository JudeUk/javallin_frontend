import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-uploadpage',
    standalone: true,
    templateUrl: './uploadpage.component.html',
    styleUrl: './uploadpage.component.css',
    imports: [RouterModule]
})
export class UploadpageComponent {

}
