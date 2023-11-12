import { Component } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-image-render',
  templateUrl: './card-image-render.component.html',
  styleUrls: ['./card-image-render.component.scss'],
})
export class CardImageRenderComponent {
  photo: string;
  reader = new FileReader();
  file: File;

  icons = {
    image: faImage,
  };

  get fileSize() {
    return `${(this.file.size / 1024 ** 2).toFixed(2)} MB` 
  }

  onSelectFile(file: File) {
    this.reader.onload = () => {
      //this.store.photoUrl.push(reader.result as string);
      this.photo = this.reader.result as string;
    };
    this.reader.readAsDataURL(file);
    this.file = file;
  }
}
