import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  name: string
  urlImage: string
  constructor(private AnimeService: AnimeService) { }

  ngOnInit() {
  }

search(){
  this.AnimeService.getAnime(this.name).subscribe((data:any) => {
    this.urlImage = data.sprites.front_default
  })
}
}
