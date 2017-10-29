import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {VideosComponentComponent} from "./videos-component/videos-component.component";
import {GalleryComponentComponent} from "./gallery-component/gallery-component.component";
import {WatchVideoComponent} from "./watch-video/watch-video.component";



//configure the routes
const routes: Routes =[
    {path: "", component: GalleryComponentComponent },
    {path: "videos", component: VideosComponentComponent},
    {path: "videos/:url", component: WatchVideoComponent},
    
   

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]


})
export class AppRoutingModule{}
export const routingComponents =[VideosComponentComponent, GalleryComponentComponent,
                                 WatchVideoComponent]