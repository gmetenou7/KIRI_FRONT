import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuRegisterComponent } from './au-register/au-register.component';
import { AuLoginComponent } from './au-login/au-login.component';

const routes: Routes = [
    { path: '', component: AuLoginComponent },
    { path: 'register', component: AuRegisterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRouting { }