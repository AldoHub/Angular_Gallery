import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-watch-video',
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.css']
})
export class WatchVideoComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute) { }

  videoLargeUrl: string

  ngOnInit() {
    let url= this.ActivatedRoute.snapshot.params["url"];
    this.videoLargeUrl= url;
  }

}
