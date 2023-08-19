import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {

services: any;

constructor(private dataService:DataService) {}

ngOnInit(): void{
  this.getServicesData();
}

getServicesData(){

    this.dataService.getData().subscribe(res =>{
    this.services = res;
    });
    
}

insertData(){
  console.log("Hello Alexie")
}

}

