import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";

//to be able to send parameter between components
//add the next imports
import { Router } from "@angular/router";


interface Video{
id: string,
large_url:string,
url: string
}


@Component({
  selector: 'app-videos-component',
  templateUrl: './videos-component.component.html',
  styleUrls: ['./videos-component.component.css']
})
export class VideosComponentComponent implements OnInit {

  
  constructor(private Http: Http, private HttpClient: HttpClient, private Router: Router) { }
  
  videos: Video[]
  

  getLatestVideos(){
    this.HttpClient.get<[Video]>("http://www.splashbase.co/api/v1/images/latest?videos_only=true").subscribe((response)=>{
       console.log(response["images"]); 
       let $videosResponse= response["images"];
       this.videos = [];
       $videosResponse.forEach(element => {
        this.videos.push(element);  
      });
      console.log(this.videos);
    });

  }

  //the video param is the on the user triggered the event
  onSelect(video){
    this.Router.navigate(["/videos",video.large_url]);
  }



  ngOnInit() {
  this.getLatestVideos();
  }

}
