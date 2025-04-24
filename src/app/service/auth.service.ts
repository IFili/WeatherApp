import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string="https://localhost:7144/api/User/"
  constructor(private http: HttpClient) { }


  signUp(userObject:any){ 
    console.log('User Object:', userObject); 
    // return this.http.post<any>(`${this.baseUrl}register` , userObject)
    return this.http.post<any>(`${this.baseUrl}register`, userObject);

  }

  login(loginObject: any){
    return this.http.post<any>(`${this.baseUrl}login` , loginObject)

  }
}
