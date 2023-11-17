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

    <div class="flex justify-end mt-3">
      <button
        class="shadow-sm border p-2 rounded-lg"
        (click)="onCopyToClipBoard()"
      >
        <fa-icon [icon]="icons.copy" class="text-gray-500"></fa-icon>
      </button>
      <button class="shadow-sm border mx-2 p-2 rounded-lg">
        <fa-icon [icon]="icons.share" class="text-gray-500"></fa-icon>
      </button>
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
