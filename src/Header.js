import twitterIcon from './images/twitter.gif';
import adImage from './images/ad.PNG';
import Logo from './Logo';

function Header (){
    return(
        <div className="header">
        <div className="twitter-block header-col">
            <div>
                <img src={twitterIcon} className="bird-icon" alt='Twitter' />

            </div>
            <div>
                <p>Download - CSS, sketch paper, and templates for: Acorn, Fireworks, Flash, InDesign, GIMP,
                    Inkscape,
                    Illustrator, OmniGraffle, Photoshop, QuarkXPress, Visio, Exp Design. Repository at <a
                        href="#">GitHub</a></p>
            </div>
        </div>

        <Logo/>
        <div className="ad-block header-col">
            <img src={adImage} alt="ad image"/>
        </div>


    </div>
    )
}
export default Header