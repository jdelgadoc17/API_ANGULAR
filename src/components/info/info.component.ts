import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { eldenringService } from '../services/eldenring.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {

  info: any[] = [];
  constructor (private eldenringService: eldenringService){

  }


  ngOnInit(): void {
  
  this.eldenringService.getEldenRingData().subscribe((data) =>{
    this.info = data.data;
    console.log(data.data); //comprobacion
  });

}
}
