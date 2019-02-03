import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  model: FormGroup;

  exampleContext: any;

  constructor(private fb: FormBuilder) {
    this.model = this.fb.group({
      firstName: ['girish'],
      lastName: ['thanki'],
      address: this.fb.group({
        street: ['London Road'],
        city: ['New York'],
        state: ['NYC'],
        zip: ['N10 5RJ']
      }),
    });

    /*
    this.exampleContext = {
      $implicit: 'default context property when none specified',
      modelProperty: this.model
    };
    */
  }

  ngOnInit() {
  }

}
