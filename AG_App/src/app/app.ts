import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , LoginComponent , Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AG_App');
  name:string = 'Manohar Yadav';

  updateName(){
    this.name='Hitesh Yadav';
    this.sum(10 , 20 , 30);
  }

  sum(a:number , b: number , c:number){
    // return a+b+c;
    console.log(a+b+c);
  }
}
