import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocRequestsService {

  constructor(private http:HttpClient) { }

  doctorList(){
    return this.http.get('http://localhost:1999');
  }

  
  
  
}
