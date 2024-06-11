import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    AuthService
  ],
  standalone: true
})
export class LoginComponent {
     constructor(private supabase:AuthService){}
  async handleAuth(){
    console.log(11 );
    
      const reponse= await this.supabase.googleSignin();
      console.log("adf"+ reponse);
      
  }
  

}
