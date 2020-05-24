import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CovidData } from 'src/app/models/data.model';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService, private router : Router) { }

  dataEntry: CovidData;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
    this.dataEntry.id= id;
  }

  fetchEntry(id){
    this.dataService.getEntry(id).subscribe( (res: any ) => {
      this.dataEntry = res;
    })
  }

  onSubmit(){
    this.dataService.editEntry(this.dataEntry)
    .subscribe(response => {
      console.log(response);
      
      this.router.navigate(['/details', this.dataEntry.id])
    }), err => {
      console.log(err);
    }
    this.router.navigate(['/details', this.dataEntry.id])
  }

}
