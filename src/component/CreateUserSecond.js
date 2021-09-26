import axios from "../service"
import {useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import {SET_EMPLOYEE_ID} from "../store/action.types"

const CreateUserSecond = ({history}) =>{
    const dispatch = useDispatch()
    const userId = useSelector(state=> state.user.createEmployeePartSecond.employeeId)
    const [state, setState]= useState({
        employee_id:userId,
        first_name:"",
        middle_name:"",
        last_name:"",
        gender:"",
        dob:"",
        address:"",
        email:"",
        code:"SD123",
        category_id:"",
        designation_id:"",
        salary_type_id:"",
        amount:"",
        shift:""
})


    const valueOnChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const submit=()=>{
        axios.patch("/employee/add/mobile/part2",state)
        .then(response=>{
            console.log(response)
            if(response.data.status){
                history.push("/allusers")
            }
        })
    }
    
    const cancel = ()=>{
        dispatch({
            type:SET_EMPLOYEE_ID,
            payload: null
        })
        history.push("/")
    }
    
    return (
        <div className="createEmployeeContainerSecond">
            <h3>Add Employee</h3>
                <div className="subContainerSecond">
                    <div>
                        <label>First Name</label>
                        <input type="text" value={state.first_name} className="inputSecond" name="first_name" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Middle Name(Optional)</label>
                        <input type="text" value={state.middle_name} className="inputSecond" name="middle_name" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={state.last_name} className="inputSecond" name="last_name" onChange={valueOnChange}/> 
                    </div>
                </div>

                <div className="subContainerSecond">
                <div >
                    <label>Gender</label>

                        
                            <input
                                type="radio"
                                value="2"
                                name="gender"
                                checked={state.gender === "2"}
                                onChange={valueOnChange}
                                />
                                Male
                       
                        
                            <input
                                type="radio"
                                value="1"
                                name="gender"
                                checked={state.gender === "1"}
                                onChange={valueOnChange}
                                />
                                Female
                        
                    </div>
                    <div>
                        <label>Date Of Birth</label>
                    <input type="text" value={state.dob} className="inputSecond" name="dob" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Address As Per Adhar Card</label>
                    <input type="text" value={state.address} className="inputSecond" name="address" onChange={valueOnChange}/> 
                    </div>

                </div>
                
                <div className="subContainerSecond">
                    <div>
                        <label>Email(Optional)</label>
                        <input type="text" value={state.email} className="inputSecond" name="email" onChange={valueOnChange}/>      
                    </div>
                    <div>
                        <label>Category</label>
                        <input type="text" value={state.category_id} className="inputSecond" name="category_id" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Designation</label>
                       <input type="text" value={state.designation_id} className="inputSecond" name="designation_id" onChange={valueOnChange}/> 
                    </div>
                </div>

                <div className="subContainerSecond">
                    <div>
                        <label>Salary Type</label>
                        <input type="text" value={state.salary_type_id} className="inputSecond" name="salary_type_id" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Salary Amount</label>
                        <input type="text" value={state.amount} className="inputSecond" name="amount" onChange={valueOnChange}/> 
                    </div>
                    <div>
                        <label>Shift</label>
                        <input type="text" value={state.shift} className="inputSecond" name="shift" onChange={valueOnChange}/> 
                    </div>
                </div>

                <div className="containerButtons">
                <button className="submitButtonSecond" onClick={submit}>Submit</button>
                <button className="cancelButtonSecond" onClick={cancel}>Cancel </button>
                </div>

        </div>
    )
}

export default CreateUserSecond