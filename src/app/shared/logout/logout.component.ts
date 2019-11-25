import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    localStorage.removeItem('logins');
    localStorage.removeItem('userid');
    this.auth.logout();
    Swal.fire('Logged Out Successfully' , '' , 'success');
      this.route.navigate(['/disp']);
  }

}
