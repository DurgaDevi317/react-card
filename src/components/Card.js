import React from 'react';
import {FiDownload, FiMoreVertical} from 'react-icons/fi';
import '../css/Card.css';
import DocIcon from '../icons/DocIcon';
import PrintIcon from '../icons/PrintIcon';
import DeleteIcon from '../icons/DeleteIcon';

class Card extends React.Component{
    render(){
        return(
            <div className="card-main-div">
                <div className="dropdown-div">
                    <button className="dropdown-btn">
                        <FiMoreVertical/>
                    </button>
                    <ul className="dropdown-ul">
                        <li>
                            <FiDownload className="list-icon"/>
                            <span className="list-span">Download</span>
                        </li>
                        <li>
                            <PrintIcon className="list-icon"/>
                            <span className="list-span">Print</span>
                        </li>
                        <li>
                            <DeleteIcon className="list-icon"/>
                            <span className="list-span">Delete</span>
                        </li>
                    </ul>
                </div>
                <div className="doc-icon-div element-div">
                    <DocIcon className="doc-icon"/>
                </div>
                <div className="title-div element-div">
                    <span className="title-span">Corporate Bylaws</span>
                </div>
                <div className="content-div element-div">
                    <span className="content-span">
                    An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.
                    </span>
                </div>
                <div className="button-div element-div">
                    <button className="button-element">View Document</button>
                </div>
                <div className="shadow-div"></div>
            </div>
        );
    }
}

export default Card;