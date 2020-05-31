import React from 'react'
import {Link} from 'react-router-dom';
import {deleteAnventory} from './../Action/Action';
import {useDispatch} from 'react-redux';
import Avatar from 'react-avatar'
const TableList = ({anventory,selectAll}) => {
    
    const dispatch = useDispatch();
    const {name,email,mobile,city,id}=anventory;
return (
        <tr>
            <td><input class="uk-checkbox" checked = {selectAll} type="checkbox"/></td>
            <td><Avatar name={name} size="38" round="25px" className="mr-3" style={{marginLeft:"-20px"}}/>{name}</td>
            <td>{email}</td>
            <td >{mobile}</td>               
            <td>{city}</td>
  
             
            <td className="action">
                <Link to ={`/users/edit/${id}`}>
                    <i class="material-icons md-18 text-primary mr-2">edit</i>
                </Link>
                <Link to ={`/users/view/${id}`}>
                <span class="material-icons mr-2" style={{color:"#808080"}}>
                      remove_red_eye
                    </span>
                </Link>
                <span><i class="material-icons md-18 text-danger mr-2" onClick={()=>dispatch(deleteAnventory(id))} style={{cursor:"pointer"}}>delete</i></span>              
            </td>
        </tr>                             
    )
}

export default TableList
