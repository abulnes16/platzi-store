import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('angel',
      [
       Validators.email,
        Validators.required
      ]);
    // this.emailField.valueChanges.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  sendEmail(): void {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
