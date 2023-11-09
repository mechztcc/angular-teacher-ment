import { Component, Input } from '@angular/core';
import {
  faCircleCheck,
  faGamepad,
  faGem,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/modules/users/shared/types/user.interface';

@Component({
  selector: 'app-card-team-member',
  templateUrl: './card-team-member.component.html',
  styleUrls: ['./card-team-member.component.scss'],
})
export class CardTeamMemberComponent {
  @Input() check: boolean = false;

  @Input() user: IUser = {
    email: 'default@email.com',
    name: 'default name',
    role: 'STUDENT',
    id: 0,
    createdAt: new Date().toISOString(),
  };

  icons = {
    level: faGamepad,
    gem: faGem,
    cap: faGraduationCap,
    check: faCircleCheck,
  };
}
