import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { HOST_NAME } from './constant';

@Component({
  selector: 'app-appoin',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgFor],
  template: `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">doctor_name</th>
      <th scope="col">patient_name</th>
      <th scope="col">day</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let x of users">
      <th scope="row">1</th>
      <td>{{x.doctor_name}}</td>
      <td>{{x.patient_name}}</td>
      <td>{{x.day}}</td>
      <td>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" [attr.data-bs-target]="'#delModal' + x._id">
      delete
    </button>
    
    <div class="modal fade" [id]="'delModal' + x._id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you want to delete guest with ID: {{ x.username}}?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" (click)="delete(x._id)">Delete</button>
          </div>
        </div>
      </div>
    </div>

      </td>
    </tr>

  </tbody>
</table>
              `,
  styles: [``]
})
export class appoinComponent {

    users:any=[];

    httpCliet=inject(HttpClient)

    ngOnInit(){
        this.httpCliet.get(`${HOST_NAME}/appointment`).subscribe(  (res:any)=>{ 
            this.users=res;
           console.log(this.users); 
         });
    }


    delete(id:any){
        this.httpCliet.delete(`${HOST_NAME}/appointment/documents/${id}`).subscribe(  (res:any)=>{ 
            this.users=res;
           console.log(this.users); 
         });
    }

}
