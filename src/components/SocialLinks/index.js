import './SocialLinks.css';
import FACEBOOK from '../../images/facebook.png';
import INSTAGRAM from '../../images/instagram.png';
import LINKEDIN from '../../images/linkedin.png';


function SocialLinks() {
    return (

        <div className="content3">
            <a href="#">
                <div className="link">
                    <img className="socialpic" src={LINKEDIN}/>
                        <div className="linktext">
                            <strong>Linkedin</strong>
                        </div>
                </div>
            </a>

            <a href="https://www.facebook.com/xiao.wang.967/" target="_blank" rel="noreferrer">
                <div className="link">
                    <img className="socialpic" src={FACEBOOK}/>
                        <div className="linktext">
                            <strong>Facebook</strong>
                        </div>
                </div>
            </a>
            <a href="#">
                <div className="link">
                    <img className="socialpic" src={INSTAGRAM}/>
                        <div className="linktext">
                            <strong>Instagram</strong>
                        </div>
                </div>
            </a>
        </div>
    )
}

export default SocialLinks;