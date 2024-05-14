import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButnsComponent} from "./butns/butns.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButnsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectdz5';
}
