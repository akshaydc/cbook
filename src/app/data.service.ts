import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* contacts:Contact[]=[
     {cid:'1212',fullName:"Akshay",email:"akshaydc102@gmail.com",mobile:"8971056295",deptName:"CSE"},
     {cid:'3233',fullName:"Mrudulla",email:"mrudulla1998@gmail.com",mobile:"8618432935",deptName:"CSE"},
     {cid:'1645',fullName:"Rajesh",email:"itsmrajesh@gmail.com",mobile:"8971052295",deptName:"CSE"},
     {cid:'1276',fullName:"Bhagya",email:"bhagya@gmail.com",mobile:"8971056297",deptName:"ME"},
     {cid:'2345',fullName:"Gokul",email:"gokulgowda44@gmail.com",mobile:"8971058295",deptName:"CVE"},
     {cid:'6754',fullName:"Achal",email:"achal.sai@gmail.com",mobile:"8971056290",deptName:"ECE"},
     {cid:'9374',fullName:"Amaresh",email:"amarbp007@gmail.com",mobile:"8971056195",deptName:"ISE"},
   ]
 */
  constructor(private http: HttpClient) { }
  getContactData(): Observable<Contact[]> {
    return this.http.get<Contact[]>("https://akshaycbook.herokuapp.com/contacts/");

  }

}
