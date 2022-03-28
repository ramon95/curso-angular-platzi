import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img') set changeImage(newImage: string) {
    this.img = newImage;
  }

  @Output()
  loaded = new EventEmitter<string>();
  imgDefault = './assets/images/default.png';

  constructor() {
    // before render
    // NO async -- once time
    // console.log('constructor', 'imgValue =>', this.img);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoade() {
    this.loaded.emit(this.img);
  }
}
