import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  _url= 'https://api.mercadolibre.com/sites/MCO/search?q=';
  uri='https://api.mercadolibre.com/items/';
  urluser='https://api.mercadolibre.com/users/'
  offset="&offset=";
    
  constructor(private http: HttpClient) { 
    
  }
 
  getProducto(search: String,page){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json');

    return this.http.get(this._url+search+this.offset+page,{
      headers:header
      
    });
  }
  getSellerId(id: String){

    return this.http.get(this.urluser+ id);
  }


  getProductoId(id: String){

    return this.http.get(this.uri+ id);
  }

}
