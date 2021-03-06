import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { CovidData } from './../../models/data.model'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  dataEntry : CovidData

  continents = ["Europe", "America", "Asia", "Oceania", "Africa", "Antartide"]
  classifications = ["Very low", "Low" , "Medium" , "High" , "Very high"]

  onSubmit(form : NgForm){
    this.dataEntry = form.form.value;
    console.log(this.dataEntry);
    
    this.dataService.addEntry(this.dataEntry).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    })
  }
}
