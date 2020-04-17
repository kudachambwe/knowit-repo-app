import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import '../../assets/styles/main.scss'; 

export const Pagination = ({
    itemsPerPage,
    totalItems,
    paginateNext,
    paginatePrev,
    paginate,
    currentPage
}) => {

    const renderPageNumbers = () => {
        const pageNumbers = []; 
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i); 
        }
        return pageNumbers; 
    };

    return (
        <nav className='center large-pd large-bottom-mg'>
            <button className='small-mg medium-pd small-size round-shape' type="button" href='#' onClick={paginatePrev}> <FontAwesomeIcon icon='arrow-left'/> </button>
            <div className='pagination hide-mobile'>
                {renderPageNumbers().map(pageNum => (
                    <a key={pageNum}
                        href="!#"
                        className={(currentPage === pageNum ? 'active' : '')}
                        onClick={() => paginate(pageNum)}>
                        {pageNum}
                    </a>
                ))}
            </div>
            <button className='small-mg medium-pd small-size round-shape' type="button" href='#' onClick={paginateNext}> <FontAwesomeIcon icon='arrow-right'/> </button>
        </nav>
    ); 
}

export default Pagination; 