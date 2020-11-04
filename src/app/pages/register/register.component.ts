import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
declare let $ : any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public submitted = false;

  constructor( private formBuilder: FormBuilder, private userService: UserService) {
    
    this.userForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      secondName:new FormControl('', [Validators.required, Validators.minLength(4)]),
      birthDate: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword : new FormControl('', Validators.required)
    }, {
        validator: this.confirmedValidator('password', 'confirmPassword')
    });
    
  }

  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
   

     

  addNewUser(){
    this.submitted = true;
    
    let newUser = new User(this.userForm.value.name, this.userForm.value.secondName, this.userForm.value.birthDate, this.userForm.value.email, this.userForm.value.password);
    console.log(newUser)
    this.userService.createNewUSer(newUser).subscribe((data:User) =>{
      $('#added').modal('show') 
      }, error => {
        this.userForm.reset()
        $('#invalid').modal('show') 
      })    
     
  }

  get f() { return this.userForm.controls; }
 

  ngOnInit(): void {
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
