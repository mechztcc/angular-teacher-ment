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

  constructor(public sidebarService: SidebarService) {}
}
