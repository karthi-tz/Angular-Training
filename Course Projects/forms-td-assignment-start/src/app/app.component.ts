import {Component, ViewChild} from '@angular/core';
import {Form, NgForm} from '@angular/forms';
import {from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myForm') form: NgForm;
  defaultSubs = 'advanced';
  data = {
    mail: '',
    subs: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.data.mail = this.form.value.email;
    this.data.subs = this.form.value.subscription;
    this.data.password = this.form.value.password;
    // console.log(this.data.mail);
  }
}
