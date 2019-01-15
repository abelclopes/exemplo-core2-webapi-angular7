import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-imagens',
  templateUrl: './upload-imagens.component.html',
  styleUrls: ['./upload-imagens.component.scss']
})
export class UploadImagensComponent implements OnInit {

  private imageSrc: string = '';

  constructor() { }

  ngOnInit() {
  }

  public handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  public _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }
}
