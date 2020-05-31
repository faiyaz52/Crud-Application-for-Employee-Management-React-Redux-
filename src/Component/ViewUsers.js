import React,{ useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAnventory,updateAnventory} from './../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const ViewUsers = () => {
    let {id} = useParams();
    let history = useHistory();
    const dispatch =useDispatch();
    const anventory = useSelector ((state) => state.anventoryList.anventorys);
    const [name, setname] = useState ("");
    const [email, setemail] =useState ("");
    const [mobile, setmobile] = useState(""); 
    const [city, setcity] = useState("");
    useEffect (()=>{
        if(anventory !=null){
            setname(anventory.name);
            setemail(anventory.email);
            setmobile(anventory.mobile);
            setcity(anventory.city);
        }
        dispatch(getAnventory(id))
    },[anventory]);
    const onUpadteAdvantory =(e)=>{
        e.preventDefault()
        const upadte_advantory = Object.assign(anventory, { 
            name:name,
            email:email,
            mobile:mobile,
            city:city,
        });
    dispatch(updateAnventory(updateAnventory))
   history.push("/")
};
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m container" style={{marginTop:"130px",borderRadius:"30px",width:"450px"}}>  
           <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"-20px",fontSize:"25px"}}>View Users</h2>
           <form onSubmit={(e) => onUpadteAdvantory(e)}>
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-inline">
                        <h5>{name}</h5>
                    </div>
                </div>            
                <div className="col-sm-6">         
                    <div className="uk-inline">
                    <h5>{email}</h5>                       
                    </div>            
                </div>
            </div>        
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-margin">
                    <h5>{mobile}</h5>
                    </div>
                </div>
                <div className="col-sm-6" > 
                     <div class="uk-margin">
                     <h5>{city}</h5>
                    </div>
                </div>  
            </div>       
                <button className="btn btn-primary" type="submit" style={{marginLeft:"130px",marginTop:"20px"}}>Go to Back</button>
            </form>
        </div>
    )
}

export default ViewUsers

