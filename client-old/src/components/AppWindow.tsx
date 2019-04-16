import React from 'react';
import Draggable from 'react-draggable';
import Resizable from 're-resizable';
import './AppWindow.less';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus } from '@fortawesome/pro-regular-svg-icons'

interface AppWindowProps {
    title: string,
    width?: number,
    height?: number,
    beforeClose?: (window: AppWindow, next: () => void) => void,
    onClose?: () => any,
}

interface AppWindowState {
    width?: number,
    height?: number,
}

class AppWindow extends React.Component<AppWindowProps, AppWindowState> {
    container: any;
    
    constructor(props: AppWindowProps) {
        super(props);
        
        this.close = this.close.bind(this);
        this.onCloseButtonClicked = this.onCloseButtonClicked.bind(this);
    }
    
    private onCloseButtonClicked() {
        if (this.props.beforeClose) this.props.beforeClose(this, this.close);
        else this.close();
    }
    
    close() {
        this.container.remove();
        if (this.props.onClose) this.props.onClose();
    }
    
    render() {
        return (
            <div className='WindowContainer' ref={(el: any) => { this.container = el }} style={{
                top: this.props.height ? `calc(100% - ${this.props.height / 2}` : 0,
                left: this.props.width ? `calc(100% - ${this.props.width / 2}` : 0,
            }}>
                <Draggable handle='.Window__TopBar'>
                    <Resizable defaultSize={{
                        width: this.props.width,
                        height: this.props.height,
                    }} minHeight={25}>
                        <div className='Window'>
                            <div className='Window__TopBar'>
                                <span className='Window__TopBar__Title'>
                                    {this.props.title}
                                </span>
                                <div className='Window__TopBar__Buttons'>
                                    <button>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <button className='close' onClick={this.onCloseButtonClicked}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                            <div className='Window__Body'>
                                {this.props.children}
                            </div>
                        </div>
                    </Resizable>
                </Draggable>
            </div>
        );
    }
}

export default AppWindow;