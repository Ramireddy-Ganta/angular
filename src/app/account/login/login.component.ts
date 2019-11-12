import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder,Validators,FormGroup  }  from '@angular/forms';
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm:FormGroup;
    loading=false;
    submitted=false;
    constructor(private route:Router,private formBilder:FormBuilder,private zone:NgZone) {
        this.loginForm=this.formBilder.group({
            username :['',Validators.required],
            password :['',Validators.required]
        })
     }
     get f() { return this.loginForm.controls; }
    ngOnInit(){ }
    onSubmit(){
        debugger;
        this.submitted=true;
        if(this.loginForm.invalid){
            return;
        }
        this.loading=true;
        if(this.loginForm.controls.username.value ==='admin' && this.f.password.value ==='12345'){
            document.cookie= "username =admin";
            this.zone.run(() => {
                this.route.navigateByUrl('/projects');
              });
              
            //this.route.navigate(['projects']);
            alert("successfully logged in!")
        }else{
            alert("Invalid user!");
        }
    }
}