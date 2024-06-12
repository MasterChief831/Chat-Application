import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // configuring the supbase in our application
  private supabase!:SupabaseClient
  // making client 
  constructor(private route:Router,private ngZone:NgZone) {
    this.supabase=createClient(
      environment.supabaseURL,// project url from supbase and key
      environment.supabaseKey
    );
      

    // finding current status of the user signedIn or not
    this.supabase.auth.onAuthStateChange((event,session)=>{
      console.log("even"+ event);
      console.log("session",session);

        localStorage.setItem("session",JSON.stringify(session?.user));   
        if(session?.user){
            this.ngZone.run(()=>{                  // keeping it outside the Angular zone ,hence increasing the performance
              this.route.navigate(['/chat']);
            })
            
        } 
       })
}

check(){
  const user= localStorage.getItem("session");
}


async googleSignin(): Promise<any> {
  console.log(22);

  try {
    const response = await this.supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    console.log('Response from Supabase sign-in:', response.data);

    return response;
  } catch (error) {
    console.error('Failed to sign in with Google:', error);
    throw error; 
  }
}
async googleSignout(){
  await this.supabase.auth.signOut();
}
  

}
