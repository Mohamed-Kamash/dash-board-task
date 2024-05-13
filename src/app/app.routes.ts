import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",loadComponent:()=>import('./componenets/home/home.component').then((m)=>m.HomeComponent),title:'Home'},
    {path:"details/:id",loadComponent:()=>import('./componenets/userdetails/userdetails.component').then((m)=>m.UserdetailsComponent),title:'User Details'},
    {path:"**",loadComponent:()=>import('./componenets/not-found/not-found.component').then((m)=>m.NotFoundComponent),title:'404 Not Found'}
];
