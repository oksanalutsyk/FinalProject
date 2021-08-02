import { Component, OnInit, ViewChild } from '@angular/core';
import { IRegistration } from 'src/app/shared/interfaces/registration.interface';
import { NewRegistration } from 'src/app/shared/classes/new-registration.class';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { ILogin } from 'src/app/shared/interfaces/login.interface';
import { NewLogin } from 'src/app/shared/classes/new-login.class';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-big-header',
  templateUrl: './big-header.component.html',
  styleUrls: ['./big-header.component.scss']

})
export class BigHeaderComponent implements OnInit {
  //Modal
  adminRegistration: Array<IRegistration> = []
  adminLogin: Array<ILogin> = []
  newRegistration: IRegistration
  newLogin: ILogin

  @ViewChild('myForm', { static: true }) signUpForm: NgForm;
  @ViewChild('myForm2', { static: true }) signInForm: NgForm;


  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPass: string;
  userEmail2: string;
  userPass2: string;



  defaultQuantity: number = 1;
  productAddToCart: any;
  allTotal: number

  cart: boolean = false
  constructor(private registrationService: RegistrationService, private productDetailsService: ProductDetailsService, ) {

    this.productAddToCart = this.productDetailsService.getProductFromCart();
    this.productDetailsService.addProductToCart(this.productAddToCart);
    this.showCount()
  }

  ngOnInit() {
    this.getRegistration()//виклик методу

  }

  public get getProductCount(){
    return this.productDetailsService.products.length
  }
  // Кількість товарів в корзині
  public showCount(): void {
    if (this.productAddToCart) {
      this.cart = true
    }
  }
  
  private getRegistration(): void {
    this.registrationService.getRegistration().subscribe(
      data => {
        this.adminRegistration = data;
      },
      err => {
        console.log(err)
      }
    )
  }

  private getLogin(): void {
    this.registrationService.getLogin().subscribe(
      data => {
        this.adminLogin = data;
      },
      err => {
        console.log(err)
      }
    )
  }



  //Реєстрація
  public AddRegistration(form: NgForm): void {
    const newRegistration: IRegistration = new NewRegistration(
      0,
      this.userFirstName,
      this.userLastName,
      this.userEmail,
      this.userPass,
    );
    if (this.userFirstName && this.userLastName && this.userEmail && this.userPass) {
      if (this.adminRegistration.length >= 1) {
        newRegistration.id = this.adminRegistration.slice(-1)[0].id + 1;
        this.userFirstName = '',
          this.userLastName = '',
          this.userEmail = '';
        this.userPass = '';
        this.registrationService.addRegistration(newRegistration).subscribe(
          () => {
            this.getRegistration();
          })
      }
      else {
        this.newRegistration = {
          id: 0,
          firstName: this.userFirstName,
          lastName: this.userLastName,
          login: this.userEmail,
          pass: this.userPass,
        }
        this.adminRegistration.push(newRegistration)
        this.registrationService.addRegistration(newRegistration).subscribe(
          () => {
            this.getRegistration();
          })
        this.signUpForm.resetForm();
      }

      form.resetForm();

    }
  }
  //Логінування
  public AddLogin(form: NgForm): void {
    const newLogin: ILogin = new NewLogin(
      0,
      this.userEmail2,
      this.userPass2,
    );
    if (this.adminLogin.length >= 1) {
      newLogin.id = this.adminLogin.slice(-1)[0].id + 1;
      this.registrationService.addLogin(newLogin).subscribe(
        () => {
          this.getLogin();
        })
    }
    else {
      this.newLogin = {
        id: 0,
        login: this.userEmail2,
        pass: this.userPass2,
      }
      this.adminLogin.push(newLogin)
      this.registrationService.addLogin(newLogin).subscribe(
        () => {
          this.getLogin();
        })


    }

    this.check()
    this.userEmail2='';
    this.userPass2='';

    this.signInForm.resetForm();
    form.resetForm();
  }

  //Перевірка логінування
  public check(): void {
    let elem1

    for (let i = 0; i < this.adminRegistration.length; i++) {
      console.log(this.adminRegistration)

      console.log(this.adminRegistration[i])
      elem1 = this.adminRegistration[i]
      console.log(this.userPass2)

      if (this.userEmail2 == elem1.login && this.userPass2 == elem1.pass) {
        getId('form1').style.display = 'none'
        getId('form2').style.display = 'none'
        getId('form3').style.display = 'block'
        getId('one').innerHTML = elem1.firstName + " " + elem1.lastName
        getId('two').innerHTML = this.userEmail2

      }
    }
  }




  //Зміна вікон
  public signUpClose(form: NgForm): void {
    let check2 = true;
    if (check2) {
      getId('form1').style.display = 'none'
      getId('form2').style.display = 'block'
      getId('form3').style.display = 'none'

      check2 = false
    }
    // this.signUpForm.resetForm();
    // form.resetForm();
  }


  public signInClose(form: NgForm): void {
    let check = true;
    if (check) {
      getId('form2').style.display = 'none'
      getId('form1').style.display = 'block'
      getId('form3').style.display = 'none'
      check = false
    }
    
    this.userEmail2 = '';
    this.userPass2 = '';
    // this.signInForm.resetForm();
    // form.resetForm();
  }

  public returnToStart() {
    let check = true;
    if (check) {
      getId('form2').style.display = 'none'
      getId('form1').style.display = 'block'
      getId('form3').style.display = 'none'
      check = false
    }
  }
}

let getId = x => document.getElementById(x)
