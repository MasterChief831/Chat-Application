import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase!:SupabaseClient
  constructor() {
    this.supabase=createClient(
      environment.supabaseURL,
      environment.supabaseKey
    );
      
    this.supabase.auth.onAuthStateChange((event,session)=>{
      console.log("even"+ event);
      console.log("session",session);
      
      })
}
// async googleSignin(){
//   console.log(22);
  
//   // await this.supabase.auth.signInWithOAuth({
//   //   provider:"google",
//   // });

//   const response = await this.supabase.auth.signInWithOAuth({
//     provider: 'google',
//   });
  
//   console.log('Response from Supabase sign-in:', response);
  
//   return response;




// }



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
    throw error; // Rethrow the error to propagate it up to the caller
  }
}










async googleSignout(){
  await this.supabase.auth.signOut();
}
  

}
