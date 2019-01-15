import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
import { ImagemModel } from './model/imagem.model';
import { Builder } from 'builder-pattern';

@Component({
  selector: 'app-upload-imagens',
  templateUrl: './upload-imagens.component.html',
  styleUrls: ['./upload-imagens.component.scss']
})
export class UploadImagensComponent implements OnInit {

  public imageSrc: string = '';
  public response: string = '';

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
  }

  public handleInputChange(e): void {
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

  public _handleReaderLoaded(e): void {
    let reader = e.target;
    this.imageSrc = reader.result;
  }

  public savarDados(): void {
    let model = Builder<ImagemModel>()
                .ImagemBase64(this.imageSrc)
                .build();
    console.log(model);
    
    this.imageSrc;
    this.uploadService.enviarDados(model)
      .subscribe(res => {
        this.response = JSON.stringify(res);
        console.log(res)
      })
  }

}
