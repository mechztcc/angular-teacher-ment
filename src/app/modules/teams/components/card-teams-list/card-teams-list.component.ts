import { Component, Input } from '@angular/core';
import {
  faBook,
  faCalendar,
  faClock,
  faCog,
  faHand,
  faMagnifyingGlass,
  faPen,
  faPerson,
  faPlusCircle,
  faPuzzlePiece,
  faScroll,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { ITeam } from '../../shared/types/team.interface';

@Component({
  selector: 'app-card-teams-list',
  templateUrl: './card-teams-list.component.html',
  styleUrls: ['./card-teams-list.component.scss'],
})
export class CardTeamsListComponent {
  @Input() team: ITeam;

  icons = {
    add: faPlusCircle,
    settings: faCog,
    pen: faPen,
    users: faUsers,
    hand: faHand,
    person: faPerson,
    see: faMagnifyingGlass,
    book: faBook,
    clock: faCalendar,
    points: faPuzzlePiece,
    lesson: faScroll
  };
}
