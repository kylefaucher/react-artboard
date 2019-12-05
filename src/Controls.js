import React, {Component} from 'react';

class Controls extends React.Component{
    constructor(props){
        super(props);
    }
    /*can throw an img tag inside of the button tag(for icons)*/
    render(){
        return(
                <div className="control">
                    <li className="control-item"><button>arrow</button></li>
                    <li className="control-item"><button>square</button></li>
                    <li className="control-item"><button>triangle</button></li>
                    <li className="control-item"><button>circle</button></li>
                    <li className="control-item"><button>line</button></li>
                    <li className="control-item"><button>pen</button></li>
                    <li className="control-item"><button>text</button></li>
                </div>
        );
    }
}

export default Controls;
