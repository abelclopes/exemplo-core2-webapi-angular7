import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

import { ImagemRequest } from './model/imagem.request';
import { ImagemResponse } from './model/imagem.response';
import { environment } from 'src/environments/environment';
import { MessageService } from '../messages/message.service';


@Injectable()
export class UploadServiceRest {
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    
    constructor(private http: HttpClient, private messageService: MessageService) { }

    public saveDatosRest(model: ImagemRequest): Observable<ImagemResponse> {

        
        console.log("MODEL", model)

        return this.http.post<ImagemResponse>(`${environment.server_api}/Imagens/`, JSON.stringify(model),{ headers: this.headers})
        .pipe(
            tap((imagem: ImagemResponse) => this.log(`saveDatosRest w/ id=${model.ImagemBase64}`)),
            catchError(this.handleError<ImagemResponse>('saveDatosRest'))
          );
        
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }
}