import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { HOST_NAME } from '../constant';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [NgFor],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent {

httpclint=inject(HttpClient)

data:any=[];

ngOnInit(){
  this.httpclint.get(`${HOST_NAME}/specialty`).subscribe((res:any)=>{
this.data=res;
console.log(this.data)
  })
}
}
