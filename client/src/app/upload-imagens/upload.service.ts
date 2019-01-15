
import { Injectable } from '@angular/core';
import { ImagemModel } from './model/imagem.model';
import { UploadServiceRest } from './upload.service-rest';
import { Observable, throwError, of } from 'rxjs';

@Injectable()
export class UploadService {

    constructor(private serviceRest: UploadServiceRest) { }

    public enviarDados(model: ImagemModel): Observable<ImagemModel> {
        console.log("MODEL", model)
        return this.serviceRest.saveDatosRest(model);
    }

}