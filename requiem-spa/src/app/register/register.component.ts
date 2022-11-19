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
  success!: boolean;

  //Barra de progresso
  value: number = 0;
  showProgress: boolean = false;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  addUser() {
    //Barra de progresso
    this.randomProgress();
    this.showProgress = true;

    //Chamada do serviço
    this.registerService.newUser(this.emailForm.value).subscribe({
      error: (err) => {
        this.showProgress = false;
        if (err?.status == 400) {
          this.setTimeOut(false);
          this.message = err.error;
        } else {
          this.setTimeOut(false);
          this.message = 'Ops! Algo deu errado, tente novamente';
        }
      },
      next: (res) => {
        this.showProgress = false;
        this.setTimeOut(true);
        this.message = 'E-mail cadastrado com sucesso!';
      },
    });
  }

  //Controla exibição da div de status
  setTimeOut(res: boolean) {
    this.success = res;
    setTimeout(() => (this.success = undefined), 3000);
  }

  //Controla exibição da barra de progresso
  randomProgress() {
    console.log(this.value);
    setTimeout(() => {
      while (this.value <= 80) this.value += 10;
    }, 200);
  }
}
