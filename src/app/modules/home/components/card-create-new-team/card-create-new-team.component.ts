import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { ModalRenderService } from 'src/app/shared/services/modal-render/modal-render.service';

@Component({
  selector: 'app-card-create-new-team',
  templateUrl: './card-create-new-team.component.html',
  styleUrls: ['./card-create-new-team.component.scss'],
})
export class CardCreateNewTeamComponent {
  icons = {
    name: faUsers
  }
  constructor(public modalRender: ModalRenderService) {}
}
