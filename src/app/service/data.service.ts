import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

registerUser(data: any){
 // console.log(data);
  return this.http.post(environment.apiUrl+'/api/register/',data);
  
}
login(data:any){
  return this.http.post(environment.apiUrl+'/api/login/',data);
}

}
