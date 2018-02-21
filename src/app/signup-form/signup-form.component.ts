import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(form){
    console.log(form);
    let {username, password} = form.value;
    console.log(`El usuario es ${username} con el passwd ${password}`);
  }

}
