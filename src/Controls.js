import React, {Component} from 'react';
import { CirclePicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faSquareFull, faPlay, faCircle, faPen, faSlash, faFont, faImage } from '@fortawesome/free-solid-svg-icons'

class Controls extends Component{
    constructor(props){
        super(props);
    }
    /*can throw an img tag inside of the button tag(for icons)*/
    render(){
        return(
            <div>
                <div className="control">
                    <ul>
                        <li className="control-item"><button><FontAwesomeIcon icon={faLongArrowAltRight} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon icon={faSquareFull} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon className = 'triangle' icon={faPlay} onClick={(event)=> this.props.addItem(event, 'triangle')/></button></li>
                        <li className="control-item"><button><FontAwesomeIcon icon={faCircle} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon icon={faSlash} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon icon={faPen} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon icon={faFont} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon icon={faImage} /></button></li>
                    </ul>
                    <CirclePicker />
                </div>
            </div>
        );
    }
}

export default Controls;
