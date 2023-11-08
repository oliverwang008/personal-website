import './PlacesLived.css';
import HK from '../../images/hk.png';
import SG from '../../images/sg.png';
import BC from '../../images/bc.png';
import SYD from '../../images/syd.png';
import SF from '../../images/sf.png';
import MEL from '../../images/mel.png';

function PlacesLived() {
    return (

        <div className="content2">
            <div className="place1">
                <a href="https://en.wikipedia.org/wiki/Hong_Kong" target="_blank" rel="noreferrer">
                    <img alt="hk" className="citypic" src={HK} />
                </a>
            </div>
            <div className="place2">
                <a href="https://en.wikipedia.org/wiki/Singapore" target="_blank" rel="noreferrer">
                    <img alt="sg" className="citypic" src={SG} />
                </a>
            </div>
            <div className="place3">
                <a href="https://en.wikipedia.org/wiki/Barcelona" target="_blank" rel="noreferrer">
                    <img alt="bc" className="citypic" src={BC} />
                </a>
            </div>
            <div className="place4">
                <a href="https://en.wikipedia.org/wiki/Sydney" target="_blank" rel="noreferrer">
                    <img alt="syd" className="citypic" src={SYD} />
                </a>
            </div>
            <div className="place5">
                <a href="https://en.wikipedia.org/wiki/San_Francisco" target="_blank" rel="noreferrer">
                    <img alt="sf" className="citypic" src={SF} />
                </a>
            </div>
            <div className="place6">
                <a href="https://en.wikipedia.org/wiki/Melbourne" target="_blank" rel="noreferrer">
                    <img alt="mel" className="citypic" src={MEL} />
                </a>
            </div>
        </div>
    )
}

export default PlacesLived;