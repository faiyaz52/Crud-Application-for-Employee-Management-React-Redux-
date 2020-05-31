import React from 'react'
import {Link} from 'react-router-dom'
import { PaginationProvider } from 'react-bootstrap-table2-paginator';
const PaginationPage = ({postsPerPage,totalPosts,Paginate}) => {
    const pageNumber =[];
    for (let i=1 ; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i);
    }
    return (
    <nav>
        <ul className="uk-pagination uk-flex-center" uk-margin>
          {pageNumber.map(number =>(
             <li key={number} className="page-item">
             <Link onClick={() => Paginate(number)} to="" className="page-link">
                 {number}
             </Link>
            </li>
        ))}
        </ul>
    </nav>
    )
}

export default PaginationPage
