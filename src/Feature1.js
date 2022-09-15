import morePodcast from './images/more_podcast.gif';
import moreSlides from './images/more_slides.gif';
import toolAdapt from './images/tool_adapt.gif';
import toolBookmark from './images/tool_bookmark.gif';
import toolGenerator from './images/tool_generator.gif';

export default function Feature1(){
    return(
        <div class="feature1">
        <div class="grid-container-2">
            <a href="#" class="a-hover">
                <img src={morePodcast} alt="Podcast"/>

            </a>
            <a href="#" class="a-hover">
                <img src={moreSlides} alt="Slides"/>
            </a>
            
        </div>

       <div class="flex-img-3">
                <div>
                    <img class="responsive-image" src={toolAdapt}/>
                </div>

                <div>
                    <img class="responsive-image" src={toolBookmark}/>
                </div>

                <div>
                    <img class="responsive-image" src={toolGenerator}/>
                </div>
       </div>
    </div>
    )
}

