import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getServices(){
    return this.httpClient.get('http://127.0.0.1:8000/api/v1/services');
  }

  getGender(){
    return this.httpClient.get('http://127.0.0.1:8000/api/v1/genders');
  }

  patientsServices(){
    return this.httpClient.get('http://127.0.0.1:8000/api/v1/patient_services');
  }

  insertData(info: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/v1/patient_services',info);
  }
}
