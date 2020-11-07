import { Component, OnInit } from '@angular/core';
import {PlayerComponent} from '../player/player.component';
import { Track, Playlist } from './../../_models/song'
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  track: Track = {
    id : 'b12g32',
    name: 'Gamers',
    trackNumber:12,
    album: 'Dies in Minecraft',
    artist:'Brandino',
    albumArtist: 'Brandino',
    genre: 'Metal',
    year: 2000,
  };


  constructor() { }

  ngOnInit() {
  }

}
