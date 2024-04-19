import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { PaperAirplanes } from '../Data/AiroplaneData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons/faListOl';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import Instructions from './Instructions';
import Downloadprint from './Downloadprint';


const Planedetail = () => {


    const [activeTab, setActiveTab] = useState('instructions');

    const handleInstructionsClick=()=>{
        setActiveTab('instructions');
    }

    const handleDownloadClick=()=>{
        setActiveTab('download');
    }
    const { name } = useParams();

    const paperplane = PaperAirplanes.find(plane => plane.name === name);

    const planeshortinfo = paperplane.shortInfo;
    const planelonginfo = paperplane.longInfo;
    const imageUrl = `/img/${paperplane.imageFilename}`;
    const airoplaneimage = `/img/transparent/${paperplane.airoplane}`


    return (
        <div>
            <div className="container">
                <div className="card position-relative bg-main uppercard" style={{ top: "-15px" }}>
                    <div className="card-body text-center">
                        <div className="row mx-0 mx-sm-4 mx-md-4 p-2">
                            <div className="col-12 text-center">
                                <div className="row position-relative">
                                    <div className="col-lg-3">
                                        <div className="detailcard">
                                            <div className="card-body p-0">
                                                <img src={imageUrl} className="img-fluid object-fit-cover" alt={name} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="planedetail text-white text-start ">
                                            <h1 className="fs-1 fontlondrina">{name}</h1>

                                            <span className="" style={{ fontSize: '18px' }}>{planeshortinfo}</span>
                                            <p className="big mt-2">{planelonginfo}</p>
                                        </div>
                                        <div className="plane-animate">
                                            <img src={airoplaneimage} className="img-fluid airoplanefly" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row  mt-4">
                                    <div className="col-lg-6 ">
                                        <div className={`text-white fs-5 fw-semibold tabplane ${activeTab === 'instructions' ? 'active' :''}`} style={{cursor:'pointer'}}>
                                            <div className="text-center">
                                                <span><FontAwesomeIcon icon={faListOl} /></span>
                                                <span className="nav-link  detailtab" onClick={handleInstructionsClick}>Instructions</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className={`text-white fs-5 fw-semibold tabplane ${activeTab === 'download' ? 'active' :''}`} style={{cursor:'pointer'}}>
                                            <div className="text-center">
                                                <span><FontAwesomeIcon icon={faPrint} /></span>
                                                <span  className="nav-link active detailtab" onClick={handleDownloadClick}>Download & Print</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {activeTab === 'instructions' && <Instructions paperplane={paperplane} />}
            {activeTab === 'download' && <Downloadprint paperplane={paperplane} />}
        </div>
    )
}

export default Planedetail