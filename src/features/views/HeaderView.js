import React from 'react'; 
import '../../assets/styles/main.scss'; 

export const HeaderView = ({ title, subtitle}) => {
    return (
        <div className='large-pd'>
            <h1 className='header-text primary-color small-bottom-mg '>{title}</h1>
            {subtitle ? <h4 className='grey-color small-top-mg'>{subtitle}</h4> : ''}
        </div>
    ); 
}

export default HeaderView; 