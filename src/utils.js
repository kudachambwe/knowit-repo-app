import React from 'react'; 
import moment from 'moment';
import 'moment/locale/nb'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const parseFormatDate = (timestamp) => {
    return moment(timestamp).format('MMM Do YY'); 
};


export const parseRelativeTime = (timestamp) => {
    return moment(timestamp, "YYYYMMDD").fromNow(); 
};

export const parseLargeNumber = (number) => {
    const num = (typeof number == 'string') ? parseInt(number) : number; 
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num); 
}


/* Helpers for TableView */ 

export const _formatNameCell = (imageUrl, name, subName) => {
    return (
        <div>
            <img className='small-img round-shape' src={imageUrl} alt={name + "logo"}/>
            <p className='mobile-font-size capitalize bold tiny-mg'>{name}</p>
            <p className='grey-color tiny-mg'>{subName}</p>
        </div>
    ); 
}

export const _formatCreatedCell = ( date ) => {
    return (
        <div>
            <p className='capitalize tiny-mg'>{parseFormatDate(date)}</p>
            <p className='grey-color tiny-mg'>{parseRelativeTime(date)}</p>
        </div>
    ); 
}

export const _formatTextIconCell = (text, icon) => {
    return (
        <p> 
            <span className='tiny-pd'><FontAwesomeIcon icon={icon}/></span>
            {text}
        </p>
    ); 
}

export const _formatURLCell = (url) => {
    return (
        <a href={url} className='link' target='_blank' rel='noopener noreferrer'>
            <span className='tiny-pd'><FontAwesomeIcon icon="link"/></span>
            Link to repo
        </a>
    )
}