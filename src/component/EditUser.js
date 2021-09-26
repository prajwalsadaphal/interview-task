import {useState} from "react"
import axios from "../service"
import {useSelector,useDispatch} from "react-redux"
import {EDIT_USER} from "../store/action.types"



const EditUser = ({getAllUsers2})=>{
    const dispatch = useDispatch()
    const editUserID = useSelector(state=>state.allUsers.editUser)

    const [state, setState]= useState({
            employee_id:editUserID,
            first_name:"",
            middle_name:"",
            last_name:"",
            dob:"",
            mobile:"",
            email:"",
            code:"",
            category_id:"",
            designation_id:"",
            salary_type_id:"",
            amount:"",
            joining_date:""
    })


    const valueOnChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const submitChanges = ()=>{
        let data={}
        
        for (const key in state){
            if(state[key]!==""){
                data[key] = state[key]
            }
        }

        axios.patch("/employee",data)
        .then(response =>{
            if(response.data.status){
                dispatch({
                    type:EDIT_USER,
                    payload:null 
                })
                getAllUsers2()
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const cancelEdit = ()=>{
        dispatch({
            type:EDIT_USER,
            payload:null 
        })
    }

    return(
        <div className="editUserContainer">
            <h3>Edit Employee Details</h3>
                <div className="editUserSecondContainer">
                    <div>
                        <label>First Name</label>
                        <input type="text" value={state.first_name} className="input" name="first_name" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Middle Name</label>
                        <input type="text" value={state.middle_name} className="input" name="middle_name" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" value={state.last_name} className="input" name="last_name" onChange={valueOnChange}/> 
                    </div>
                </div>

                <div className="editUserSecondContainer">
                    <div>
                        <label>Date of Birth</label>
                        <input type="text" value={state.dob} className="input" name="dob" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Contact No.</label>
                        <input type="text" value={state.mobile} className="input" name="mobile" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={state.email} className="input" name="email" onChange={valueOnChange}/> 
                    </div>
                </div>
                
                <div className="editUserSecondContainer">
                    <div>
                        <label>Employee code</label>
                        <input type="text" value={state.code} className="input" name="code" onChange={valueOnChange}/>     
                    </div>
                    <div>
                        <label>Category</label>
                        <input type="text" value={state.category_id} className="input" name="category_id" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Designation</label>
                        <input type="text" value={state.designation_id} className="input" name="designation_id" onChange={valueOnChange}/> 
                    </div>
                </div>

                <div className="editUserSecondContainer">
                    <div>
                        <label>Salary Type</label>
                        <input type="text" value={state.salary_type_id} className="input" name="salary_type_id" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Salary Amount</label>
                        <input type="text" value={state.amount} className="input" name="amount" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Joining Date</label>
                        <input type="text" value={state.joining_date} className="input" name="joining_date" onChange={valueOnChange}/> 
                    </div>
                </div>

                
                <button className="submitButtonSecond" onClick={submitChanges}>Submit</button>
                <button  className="cancelButtonSecond"  onClick={cancelEdit}>Cancel</button>

        </div>
    )
}

export default EditUser