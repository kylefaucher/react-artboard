import React, {Component} from 'react';
import { CirclePicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faSquareFull, faPlay, faCircle, faPen, faSlash, faFont, faImage } from '@fortawesome/free-solid-svg-icons'

class Controls extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="control">
                    <ul>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faLongArrowAltRight} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faSquareFull} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} className = 'triangle' icon={faPlay} onClick={(event)=> this.props.addItem(event, 'triangle')}/></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faCircle} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faSlash} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faPen} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faFont} /></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faImage} /></button></li>
                    </ul>
                    <CirclePicker onChange = {this.props.handleColorChange} />
                </div>
            </div>
        );
    }
}

export default Controls;
