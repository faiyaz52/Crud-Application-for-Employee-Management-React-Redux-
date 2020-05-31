import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PaginationPage from './PaginationPage';
import {selectAllAnventory,clearAllAnventory,deleteAllAnventory} from './../Action/Action';
import TableList from './TableList';
    const  UsersList =() => {
    const dispatch= useDispatch();
    const [selectAll , setSelectAll] = useState(false);
    const [currentPage,setCurrentPage] =useState(1);
    const [postsPerPage] =useState(5); 
    const anventory = useSelector ((state) => state.anventoryList.anventory);
    const selectedAnventorys = useSelector ((state) => state.anventoryList.selectedAnventorys);
    useEffect(()=>{
    if(selectAll){
        dispatch(selectAllAnventory(anventory.map(anventory => anventory.id)))
    }
    else{
        dispatch(clearAllAnventory())
    }
    },[selectAll]);


    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPages = anventory.slice(indexOfFirstPage,indexOfLastPage);
    const Paginate = (pageNumber) =>setCurrentPage(pageNumber);
        return (
            <div style={{marginTop:"120px"}} className="container ">
                {
                    selectedAnventorys.length > 0 ?(
                        <button className="btn btn-danger mb-3" onClick ={()=> dispatch(deleteAllAnventory())}>All delete</button>
                    ):null
                }           
                <table className="table shadow" style={{borderRadius:"10px"}} >
                    <thead className="bg-primary text-white" style={{borderRadius:"10px" }}>
                      <tr>
                        <th>                   
                            <input id ="selectAll"
                                class="uk-checkbox" 
                                type="checkbox"
                            
                                value={selectAll}
                                onClick={() => setSelectAll(!selectAll)}
                            />
                            <label htmlfor="selectAll" className="custom-control-lebal"></label>                  
                            </th>
                           <th>Name </th> 
                            <th>Email ID</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>    
                        {
                            currentPages.map((currentPages) => (                       
                        <TableList anventory={currentPages} key={anventory.id} selectAll={selectAll}/>

                            ))
                        }   
                    </tbody>
                </table>
                <PaginationPage postsPerPage={postsPerPage} 
                totalPosts={anventory.length}
                Paginate={Paginate}/>              
            </div>
        )
    }

export default UsersList;