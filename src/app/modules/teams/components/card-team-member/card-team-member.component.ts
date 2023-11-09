import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  faCircleCheck,
  faEnvelope,
  faGamepad,
  faGem,
  faGraduationCap,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/modules/users/shared/types/user.interface';

@Component({
  selector: 'app-card-team-member',
  templateUrl: './card-team-member.component.html',
  styleUrls: ['./card-team-member.component.scss'],
})
export class CardTeamMemberComponent {
  @Input() user: IUser = {
    email: 'default@email.com',
    name: 'default name',
    role: 'STUDENT',
    id: 0,
    createdAt: new Date().toISOString(),
  };

  @Output() emitter: EventEmitter<boolean> = new EventEmitter();

  icons = {
    level: faGamepad,
    gem: faGem,
    cap: faGraduationCap,
    check: faCircleCheck,
    remove: faTrash,
    email: faEnvelope
  };

  onRemove() {
    this.emitter.emit(true);
  }
}
