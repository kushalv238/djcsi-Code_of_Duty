import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = (props) => {
    return (
        <Link to={`${props.link}`} className={`list-item${props.className}`} onClick={()=>props.setPage(props.pageID)} >
            <FontAwesomeIcon icon={props.icon} />
            <li className="list-item-title">
                {props.title}
            </li>
        </Link>
    )
}

export default ListItem