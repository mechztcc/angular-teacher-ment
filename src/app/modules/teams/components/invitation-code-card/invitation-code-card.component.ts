import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faClone, faCopy, faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invitation-code-card',
  template: `<div class="rounded-lg border p-3 mt-3 shadow-md">
    <div class="flex justify-between">
      <span>Invite code:</span>
      <h3 class="font-semibold text-xl">
        {{ code }}
      </h3>
    </div>

    <hr class="my-2" />

    <div class="flex justify-end mt-3">
      <fa-icon
        [icon]="icons.copy"
        class="text-gray-500 cursor-pointer mx-5"
        (click)="onCopyToClipBoard()"
      ></fa-icon>
      <fa-icon [icon]="icons.share" class="text-gray-500"></fa-icon>
    </div>
  </div>`,
  styleUrls: ['./invitation-code-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvitationCodeCardComponent {
  @Input() code: string;

  icons = {
    copy: faCopy,
    share: faShare,
    clone: faClone,
  };

  onCopyToClipBoard() {
    navigator.clipboard.writeText(this.code);
  }
}
