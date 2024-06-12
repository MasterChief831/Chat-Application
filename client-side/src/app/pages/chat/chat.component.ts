import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  async logout() {
    this.auth.googleSignout().then(() => {
      this.router.navigate(['\login'])
    }).catch((err) => {
      console.log(err);

    })
  }


}
