import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicio/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotActiveGuard implements CanActivate {

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.IsLogged()) {
      this.router.navigate(['/hub']);
      return false;
    }
    return true;
  }
  
}
