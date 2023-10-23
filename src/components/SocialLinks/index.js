import './SocialLinks.css';
import FACEBOOK from '../../images/facebook.png';
import INSTAGRAM from '../../images/instagram.png';
import LINKEDIN from '../../images/linkedin.png';


function SocialLinks() {
    return (

        <div class="content2">
            <div class="place1">
                <a href="https://en.wikipedia.org/wiki/Hong_Kong" target="_blank" rel="noreferrer">
                    <img alt="hk" className="citypic"/>
                </a>
            </div>
            <div class="place2">
                <a href="https://en.wikipedia.org/wiki/Singapore" target="_blank" rel="noreferrer">
                    <img alt="sg" className="citypic"/>
                </a>
            </div>
            <div class="place3">
                <a href="https://en.wikipedia.org/wiki/Barcelona" target="_blank" rel="noreferrer">
                    <img alt="bc" className="citypic"/>
                </a>
            </div>
            <div class="place4">
                <a href="https://en.wikipedia.org/wiki/Sydney" target="_blank" rel="noreferrer">
                    <img alt="syd" className="citypic"/>
                </a>
            </div>
            <div class="place5">
                <a href="https://en.wikipedia.org/wiki/San_Francisco" target="_blank" rel="noreferrer">
                    <img alt="sf" className="citypic"/>
                </a>
            </div>
            <div class="place6">
                <a href="https://en.wikipedia.org/wiki/Melbourne" target="_blank" rel="noreferrer">
                    <img alt="mel" className="citypic"/>
                </a>
            </div>
        </div>
    )
}

export default SocialLinks;