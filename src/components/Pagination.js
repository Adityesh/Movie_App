import React from 'react';


const Pagination = ({totalPages, currentPage, setPage, fetchMovies}) => {

    const previousPage = (page) => {
        if(page !== 1) {
            setPage(page - 1);
            fetchMovies();
        }
    }

    const nextPage = (page) => {
        if(page !== totalPages) {
            setPage(page + 1);
            fetchMovies();
        }
    }


    return(
        <div className="pagination">
            <button disabled={currentPage === 1 ? true : false} onClick={() => previousPage(currentPage)}>&larr;</button>
            <p>{currentPage} / {totalPages}</p>
            <button disabled={currentPage === totalPages ? true : false} onClick={() => nextPage(currentPage)}>&rarr;</button>
        </div>
    )
}   


export default Pagination;