import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { app } from '../../server';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'javellin-frontend';

  data={
    courseTitle :'Javellin website'
  }

  onClickAlert(){

    alert("Hello World!!!")
  }

  onKeyUp(inputTItle: string ){

    this.data.courseTitle=inputTItle;

  }
}
