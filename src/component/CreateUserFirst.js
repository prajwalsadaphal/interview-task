import {useState} from "react"
import axios from "../service"
import {useDispatch} from "react-redux"
import {SET_EMPLOYEE_ID} from "../store/action.types"

const CreateFirstUser = ({history})=>{
    const dispatch = useDispatch()

    const [mobileNumber,setMobileNumber] = useState("")
    const [companyName,setcompanyName] = useState("36")
    const [departmentName,setDepartmentName] = useState("39")
    const [dateOfJoining,setDateOfJoining] = useState("")

    const onSubmit = () =>{
        axios.post("/employee/add/mobile/part1",{
            mobile:mobileNumber,
            type: 6,
            company_id:companyName,
            unit_id:departmentName,
            joining_date:dateOfJoining,
        })
        .then(response=>{
            if(response.data.employee_created){
                dispatch({
                    type:SET_EMPLOYEE_ID,
                    payload: response.data.employee_id
                })
                history.push("/secondpage")
            }
            
        })
    }
  

    return(
        <div className="createEmployeeContainer">
            <h3>Add Employee</h3>
            <div className="subContainerAddUser">
                <div>
                    <label className="label">Add Mobile Number </label>
                    <input type="text" value={mobileNumber} className="input" name="mobileNumber"  onChange={e => setMobileNumber(e.target.value)} required/> 
                </div>
                <div>
                    <label className="label">Company Name</label>
                <   input type="text" value={companyName} className="input" name="companyName" onChange={e => setcompanyName(e.target.value)}/>
                </div>
                <div>
                    <label className="label">Department Name </label>
                    <input type="text" value={departmentName} className="input" name="departmentName" onChange={e => setDepartmentName(e.target.value)}/>
                    </div>
                <div>
                    <label className="label">Date of Joining </label>
                    <input type="text" vallue={dateOfJoining} className="input" name="dateOfJoining" onChange={e => setDateOfJoining(e.target.value)}/>
                </div>
                
    
            </div> 
            <button className="submitButton" onClick={onSubmit}>submit</button>
        </div>
    )
}

export default CreateFirstUser