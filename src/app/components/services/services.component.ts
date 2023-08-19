import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {

services: any;          // Services offered by the hospital
genders: any;           // Genders
patientServices: any;   // All Patients' services entries

patient = new Patient()

constructor(private dataService:DataService) {}

ngOnInit(): void{
  this.getServicesData();
  this.getGendersData();
  this.getPatientServices();
}

getServicesData(){

    this.dataService.getServices().subscribe(res =>{
    this.services = res;
    });
    
}

getGendersData(){
  this.dataService.getGender().subscribe(res =>{
    this.genders = res;
    });
}

insertData(){
  this.dataService.insertData(this.patient).subscribe(res =>{
  this.getPatientServices()
  //console.log(res)
  })
}

getPatientServices(){
  this.dataService.patientsServices().subscribe(res =>{
    this.patientServices = res;
    });
}

}

