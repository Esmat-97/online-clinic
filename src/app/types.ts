import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { HOST_NAME } from './constant';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [NgFor],
  template: `
  <div class="container" >
        
  <h1>Top Specialties</h1>
  <div class="books">

      <div class="book" id="og-book" *ngFor="let x of data">
          <div class="title"> {{x.name}} </div>
      </div>

  </div>
</div>
`,

  styles: [`

     * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.books {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1rem;
}

.book {
    background-color: #ddd;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem;
    padding: 1rem;
    text-align: center;
    width: calc(33.333% - 1rem);
}

.book:hover {
    background-color: #eee;
    cursor: pointer;
}

.title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}
  `]
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
