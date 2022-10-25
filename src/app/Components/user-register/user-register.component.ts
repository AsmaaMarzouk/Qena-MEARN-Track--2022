import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
userFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    // this.userFormGroup=new FormGroup({
    //     // fullName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{3,}')]),
    //     fullName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    //     email:new FormControl(''),
    //     mobileNo:new FormControl(''),
    //     password:new FormControl(''),
    //     address:new FormGroup({
    //       city:new FormControl(''),
    //       street:new FormControl('')
    //     }),

    //   });
    this.userFormGroup=this.formBuilder.group({
      fullName: ['',[Validators.required,Validators.minLength(3)]],
      email:[''],
      mobileNo:formBuilder.array([formBuilder.control('')]),
      address:this.formBuilder.group({
        city:[''],
        street:['']
      }),
      password:[''],
      rePassword:['']
    })
  }

// convert fullName to property
get fullName(){
  return this.userFormGroup.get('fullName');
}
get mobileNo(){
  return this.userFormGroup.get('mobileNo') as FormArray;
}

addMobileInp(){
  this.mobileNo.push(this.formBuilder.control(''));
}
  ngOnInit(): void {
  }
register(){

}
}
