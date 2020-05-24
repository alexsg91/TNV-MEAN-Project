import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.dataService.addEntry(form.form.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    })
  }
}
