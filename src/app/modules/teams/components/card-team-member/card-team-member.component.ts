import { Component } from '@angular/core';
import { faChartSimple, faGamepad, faGem } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-team-member',
  templateUrl: './card-team-member.component.html',
  styleUrls: ['./card-team-member.component.scss'],
})
export class CardTeamMemberComponent {
  icons = {
    level: faGamepad,
    gem: faGem
  };
}
