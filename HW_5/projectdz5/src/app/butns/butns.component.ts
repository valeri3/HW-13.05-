import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-butns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './butns.component.html',
  styleUrl: './butns.component.css'
})

export class ButnsComponent implements OnInit{

  currentVehicle: 'car' | 'plane' | 'ship' | null = null;

  showVehicle(vehicle: 'car' | 'plane' | 'ship'): void {
    this.currentVehicle = vehicle;
  }

  constructor() { }
  ngOnInit(): void {
  }


}



