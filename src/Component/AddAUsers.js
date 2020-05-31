import React,{ useState } from 'react';
import {useDispatch} from 'react-redux';
import './Anvantory.css'
import {addAnventory} from './../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
const AddAUsers = () => {
    let history = useHistory();
    const dispatch =useDispatch();
    const [name, setname] = useState ("");
    const [email, setemail] =useState ("");
    const [mobile, setmobile] = useState(""); 
    const [city, setcity] = useState("");
    const createAdvantory = e =>{
        e.preventDefault();
        const new_anventory={
            id:shortid.generate(),
            name:name,
            email:email,
            mobile:mobile,
            city:city,
        }
        dispatch(addAnventory(new_anventory));
        history.push("/")
        
    }
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m container" style={{marginTop:"130px",borderRadius:"30px",width:"500px"}}>  
           <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"-20px"}}>Add Users</h2>
           <form onSubmit={(e) => createAdvantory(e)} style={{marginLeft:"50px"}}>
					<div className="uk-margin">
                                    <div className="uk-inline">
                                       < span class="uk-form-icon" uk-icon="icon: user"></span>
                                            <input className="uk-input" type="text"
                                            required
                                            style={{width:"300px"}}
                                                placeholder="Enter the Name" 
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                        </div>
                                    </div>
									<div className="uk-inline">
                                        < span class="uk-form-icon" uk-icon="icon: mail"></span>
                                        <input className="uk-input" type="text"
                                            style={{width:"300px"}}
                                            required
                                            placeholder="Enter the Emai id" 
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}
                                        />
                                    </div>
									<div className="uk-margin">
                                        <div class="uk-inline">
                                        < span class="uk-form-icon" uk-icon="icon: phone"></span>
                                            <input className="uk-input" type="text" 
                                                style={{width:"300px"}}
                                                required
                                                placeholder="Enter the Mobile"
                                                value={mobile}
                                                onChange={(e) => setmobile(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="uk-margin">
                                        <div class="uk-inline">
                                        <span class="uk-form-icon" uk-icon="icon: location"></span>
                                            <input className="uk-input" type="text" 
                                                style={{width:"300px"}}
                                                required
                                                placeholder="Enter the City"
                                                value={city}
                                                onChange={(e) => setcity(e.target.value)}
                                            />
                                        </div>
                                    </div>
                <button className="btn btn-primary" type="submit" style={{marginLeft:"100px",marginTop:"20px"}}>Submit</button>
            </form>
        </div>
    )
}
export default AddAUsers;

