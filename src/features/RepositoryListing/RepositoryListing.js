import React, { useEffect, useState } from 'react'; 

import { Pagination } from '../views/Pagination';
import { getGithubData } from '../../api/api';
import { HEADER_LABELS, MAX_ITEMS_PER_PAGE } from '../../constants';
import { HeaderView } from '../views/HeaderView';

import TableView from '../views/TableView';
import LoadingView from '../views/LoadingView';
import ErrorView from '../views/ErrorView';



export const RepositoryListing = () => {

    // Variables
    const COMPONENT_HEADER = "Popular Javascript Repositories"; 
    const COMPONENT_SUBTITLE = "100 most popular repositories.";

    const itemsPerPage = MAX_ITEMS_PER_PAGE; 

    // Data Hooks
    const [repoData, setRepoData] = useState([]);
    const [totalItems, setTotalItems] = useState(0)
    
    // Response Hooks
    const [hasError, setHasError] = useState(false); 
    const [isLoading, setIsLoading] = useState(true);

    // Pagination Hooks
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0); 


    useEffect(() => {
        getGithubData()
            .then((response) => {
                const data = response.items; 
                const dataSize = data.length; 

                setRepoData(data); 
                setTotalItems(dataSize); 
                setMaxPage(Math.ceil(dataSize / itemsPerPage)); 
                setIsLoading(false); 
            })
            .catch((error) => {
                console.log('error', error); 
                setHasError(true); 
            })

    }, [itemsPerPage]); 

    // Paginate Helpers 
    const _indexOfLast = currentPage * itemsPerPage; 
    const _indexOfFirst = _indexOfLast - itemsPerPage; 
    const currentData = repoData.slice(_indexOfFirst, _indexOfLast); 

    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

    const paginateNext = () => {
        const pageNum = Math.min(currentPage + 1, maxPage); 
        return paginate(pageNum);
    }

    const paginatePrevious = () => {
        const pageNum = Math.max(currentPage - 1, 1); 
        return paginate(pageNum);
    }

    if (isLoading) { return <LoadingView/> }; 

    if (hasError) { return <ErrorView/>  }; 

    return (
        <section className="repo-list">
            <HeaderView 
                title={COMPONENT_HEADER} 
                subtitle={COMPONENT_SUBTITLE} 
            />
            <TableView 
                data={currentData}
                headerLabels={HEADER_LABELS}
            />
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                paginateNext={paginateNext}
                paginatePrev={paginatePrevious}
                paginate={paginate}
                currentPage={currentPage}
            />
        </section>
    ); 

}

export default RepositoryListing; 