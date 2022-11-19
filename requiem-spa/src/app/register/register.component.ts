import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  emailForm = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(3)],
    ],
  });

  message: string = '';
  res!: boolean;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  addUser() {
    console.log(this.emailForm.value);
    this.registerService.newUser(this.emailForm.value).subscribe({
      error: (err) => {
        this.setTimeOut(false);
        this.message = err.error;
      },
      next: (res) => {
        this.setTimeOut(true);
        this.message = 'E-mail cadastrado com sucesso!';
      },
    });
  }

  setTimeOut(res: boolean) {
    setTimeout(() => {
      this.res = res;
    }, 2000);
    this.res = null;
  }
}
