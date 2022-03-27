import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  constructor() {}
  @Input() img: string = 'valor inicial';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/images/default.png';

  ngOnInit(): void {}

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoade() {
    console.log('Hijo');
    this.loaded.emit(this.img);
  }
}
