import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {
    FormGroup,
    AbstractControl,
    FormBuilder,
    Validators
} from '@angular/forms';

import {LoginService} from './login.service';

import 'style-loader!./login.scss';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    providers: [LoginService]
})
export class Login {

    public form: FormGroup;
    public username: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;

    constructor(private fb: FormBuilder,
                private router: Router,
                private loginService: LoginService) {
        this.form = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];
    }

    ngOnInit(): void {
        // welcome back?
        let authO$ = this.loginService
            .checkClientHasValidTokenToProceed();

        authO$.subscribe(
            () => {
                this.proceedToDash();
            },
            () => {
                console.debug(`Guard says: 'No authorization grant, please sign in first'.`);
            }
            // this.proceedToDash
        );

    }

    private proceedToDash(): void {
        console.debug(`Guard says: 'Go ahead'. Now entering dashboard.`);
        this.router.navigate(['pages/dashboard']).then();
    }

    public onSubmit(): void {

        if (this.form.valid) {
            this.submitted = true;

            // proceed according to authN result
            this.loginService
                .signInWithCredentials(this.username.value, this.password.value)
                .subscribe(
                    () => {
                        console.debug(`Guard says: 'User authenticated and authorization grant'.`);
                        this.proceedToDash();
                    },
                    () => {
                        console.info(`Guard says: 'Please check username and password'. Abort.`);
                    }
                );

        }

    }
}
