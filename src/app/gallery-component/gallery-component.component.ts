import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";
import { Lightbox } from 'angular2-lightbox';

interface Images{
id: number,
url: string

}

interface searchResult{
  id: number,
  url : string
}


@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.component.html',
  styleUrls: ['./gallery-component.component.css']
})
export class GalleryComponentComponent implements OnInit {
  constructor( private httpClient: HttpClient, private Http: Http,  private Lightbox: Lightbox ) { 
    
  }
  value : string
  resultArray: searchResult[]
  search: string
  message: string
  imgsArray: any[]
  searchArray: any[]
  images: Images[]

  show: boolean = false
 
  // get the images from the API, we should get the latest everytime we start the app
  getImages(){
    this.httpClient.get<[Images]>("http://www.splashbase.co/api/v1/images/latest?images_only=true").subscribe((data)=>{
    
   

     //since the data comes inside an object with a name property
     // we get first that "images" property that inside stores all the data from the response
     let response=(data["images"]);
     //we init the property for this class
     this.images=[]; 
     this.imgsArray=[];
     //now we loop through the array and push the data
      
     response.forEach(element => {
      this.images.push(element);
      
        //const for lightbox
        const images={
          src: element["url"]
        }

        //array for the lightbox
        this.imgsArray.push(images); 


     });
        

     
       
      });

      
  
  }

  //create the fetching function used on the search input
  getSearchData(event:any){
    //get the value of the input the
    //function is linked to with the event
   
   if(event.keyCode === 13){
    this.value = event.target.value;
    this.search=this.value;

    
    //do the request
    this.httpClient.get<[searchResult]>("http://www.splashbase.co/api/v1/images/search?query=" + this.search ).subscribe((response)=>{
     //the data is inside an object "images"
      


     let responseImages=response["images"];
     if(responseImages.length == 0){
      this.message = "No images matched the given keyword(s)";
     }else{
        
     //init the array and push each result
     this.resultArray=[];
     this.searchArray=[];
     this.message= "Results for: " + this.value;  
       responseImages.forEach(element => {
       this.resultArray.push(element);
            //const for lightbox
        const images2={
          src: element["url"]
        }

        //array for the lightbox
        this.searchArray.push(images2); 
        this.show= true;

     })
    }
 
    });
  }
  }
  
//lightbox function to display the images
//this one reacts over a click event

//the index comes from the array element set on the front end

  open(index: number){
    this.Lightbox.open(this.imgsArray,index);
  }

  open2(index: number){
    this.Lightbox.open(this.searchArray,index);
  }

  ngOnInit() {
  this.getImages();
    
  }

}
