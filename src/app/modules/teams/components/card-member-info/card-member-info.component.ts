import { Component, Input } from '@angular/core';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/modules/users/shared/types/user.interface';

@Component({
  selector: 'app-card-member-info',
  templateUrl: './card-member-info.component.html',
  styleUrls: ['./card-member-info.component.scss'],
})
export class CardMemberInfoComponent {
  @Input() member: any;
  icons = {
    email: faEnvelope,
    cap: faGraduationCap
  }
}
