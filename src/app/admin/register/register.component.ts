import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerGroup = new FormGroup({
    mail: new FormControl(''),
    username: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    repeat: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  signup(){
    
  }
}
