import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Curso Angular Platzi';
  imgParent = '';
  showImage = true;

  onLoaded(img: String) {
    console.log('Padre', img);
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }
}
