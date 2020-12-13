import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ListUser: User[];
  userUrl = '/login';
  constructor(private http: HttpClient, private router: Router) {
  }

  public Getuser() {
    return this.http.get<User[]>(this.userUrl);
  }

  Verification(login, mdp) {
    let log = 0;
    this.Getuser().subscribe(
      (data) => {
        this.ListUser = data;
        for (let i = 0; i < this.ListUser.length; i++) {

          if ((this.ListUser[i].login == login) && (this.ListUser[i].mdp == mdp)) {
            log = 1;
            // this.router.navigate(['acceuil']);
            console.log(this.ListUser);
            this.router.navigate(['Home']);
          }
        }
        if (log == 0) {
          alert('verifier votre Login et Mot passe');

        }


      },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    )
    ;
  }
}


