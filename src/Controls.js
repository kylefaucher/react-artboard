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
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faLongArrowAltRight} onClick={(event)=> this.props.addItem(event, 'arrow')}/></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faSquareFull} onClick={(event)=> this.props.addItem(event, 'rect')}/></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faPlay} onClick={(event)=> this.props.addItem(event, 'tri')}/></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faCircle} onClick={(event)=> this.props.addItem(event, 'circle')}/></button></li>
                        <li className="control-item"><button><FontAwesomeIcon style = {{color: this.props.color }} icon={faSlash} onClick={(event)=> this.props.addItem(event, 'line')}/></button></li>
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
