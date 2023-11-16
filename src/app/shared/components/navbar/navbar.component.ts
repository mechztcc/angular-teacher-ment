import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  icons = {
    menu: faBars,
  };

  get show() {
    return !window.location.href.split('/').includes('users')
  }
  constructor(public sidebarService: SidebarService) {}
}
