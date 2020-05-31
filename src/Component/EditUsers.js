import React,{ useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAnventory,updateAnventory} from './../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const EditUsers = () => {
    let {id} = useParams();
    let history = useHistory();
    const dispatch =useDispatch();
    const anventory = useSelector ((state) => state.anventoryList.anventorys);
    const [name, setname] = useState ("");
    const [email, setemail] =useState ("");
    const [mobile, setmobile] = useState(""); 
    const [city, setcity] = useState(""); 
    const [Category, setCategory] = useState("");
    const [Quantity, setQuantity] = useState(""); 
    useEffect (()=>{
        if(anventory !=null){
            setname(anventory.name);
            setemail(anventory.email);
            setmobile(anventory.mobile);
            setcity(anventory.city);
            setCategory(anventory.Category);
            setQuantity(anventory.Quantity);
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
            Category:Category,
            Quantity:Quantity,
        });
    dispatch(updateAnventory(updateAnventory))
   history.push("/")
};
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m container" style={{marginTop:"130px",borderRadius:"30px"}}>  
           <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"-20px"}}>Update Users</h2>
           <form onSubmit={(e) => onUpadteAdvantory(e)}>
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <p>Name</p>
                            <input className="uk-input" type="text"
                                placeholder="Product ID" 
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6"> 
                    <div className="uk-margin">
                        <div className="uk-inline">
                        <p>Email</p>
                            <input className="uk-input" type="text"
                                placeholder="Product Name" 
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div> 
            <div className="row" style={{marginLeft:"30px"}}> 
                <div className="col-sm-6" > 
                     <div className="uk-margin">
                        <div class="uk-inline">
                        <p>Mobile</p>
                            <input className="uk-input" type="text" 
                                placeholder="Model Number"
                                value={mobile}
                                onChange={(e) => setmobile(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6" > 
                     <div class="uk-margin">
                        <div className="uk-inline">
                        <p>City</p>
                            <input className="uk-input" type="text" 
                                placeholder="city"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                            />
                        </div>
                    </div>
                </div>   
            </div>
            <div className="row" style={{marginLeft:"30px"}}>
               
            </div>         
                <button className="btn btn-primary" type="submit" style={{marginLeft:"240px",marginTop:"20px"}}>Submit</button>
            </form>
        </div>
    )
}

export default EditUsers;

