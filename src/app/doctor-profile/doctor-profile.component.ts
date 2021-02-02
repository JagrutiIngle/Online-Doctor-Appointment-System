import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  doctor:Doctor;
  doctorEmailId=sessionStorage.getItem('doctorLogged');
  constructor(private doctorService:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.doctorService.getDoctorDetails(this.doctorEmailId).subscribe(
      data=>{
        console.log("Response received");
        this.doctor=data;
      },
      error=>console.log("Exception occurred")
    )
  }
  deleteDoctorAccount(){
    this.doctorService.deleteDoctorAccount(this.doctorEmailId).subscribe(
      data=>{
        console.log("Response received");
        this.doctor=data;   
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });; 
      },
      error=>console.log("Exception occurred")
    )
  }
}
