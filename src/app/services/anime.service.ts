import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private url: string = "https://pokeapi.co/api/v2/pokemon"
  constructor(private http : HttpClient) { }

  getAnime(name: string){
    //template string ecma script 6 especificacion en la que js esta baasdo
    return this.http.get(`${this.url}/${name}`)
  }
}
