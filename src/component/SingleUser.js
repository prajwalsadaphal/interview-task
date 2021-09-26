import {SET_DELETE_USER, EDIT_USER,VIEW_USER} from "../store/action.types"
import {useDispatch} from "react-redux"
import axios from "../service"

const SingleUser = ({id,first_name, middle_name,last_name, code,designation,username,kyc_status,index})=>{
    const dispatch = useDispatch()
    const deleteEmployee =()=>{
        dispatch({
            type:SET_DELETE_USER,
            payload:id
        })
    } 

    const editEmployee=()=>{
        dispatch({
            type:EDIT_USER,
            payload:id
        })
    } 

    const viewEmployee = ()=>{
        axios.get(`/kyc/status?employee_id=${id}`)
        .then(response=>{
            if(response.data){
                dispatch({
                    type:VIEW_USER,
                    payload:response.data
                })
            }
        })
       
    }

    return(

      
            <tr className="tableRow">
                <td>{index+1}</td>
                <td>{`${first_name} ${middle_name} ${last_name}`}</td>
                <td>{code}</td>
                <td>{designation}</td>
                <td>{username}</td>
                <td ><p className={kyc_status==="Not-Submitted"? "not-submitted":"submitted"}>{kyc_status}</p></td>
                <td className="buttonActionContainer">
                    <button onClick={deleteEmployee}>Delete</button>
                    <button onClick={editEmployee}>Edit</button>
                    <button onClick={viewEmployee}>View</button>

                </td>
            </tr>
        
           
        
    )   
}

export default SingleUser