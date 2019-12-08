import { Component } from '@angular/core';
import axios from 'axios';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    category: new FormControl('', [
      Validators.required
    ]),
    subject: new FormControl('', []),
  });
    

  onSubmit() {
    // console.log("submit!", this.myForm.value);
    axios({
      method: 'post',
      url: '/',
      data: this.myForm.value
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log("error occured: ", err);
    })
  }
}
