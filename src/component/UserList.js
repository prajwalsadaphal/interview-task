import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import axios from "../service"
import {GET_ALL_USERS,SET_DELETE_USER} from "../store/action.types"
import SingleUser from "./SingleUser"
import EditUser from "./EditUser"
import ViewUserDetails from "./ViewUserDetails"

const UserList = ()=>{
    const dispatch = useDispatch()
    const allUsersList = useSelector(state=>state.allUsers.allUsers)
    const deleteUser = useSelector(state=>state.allUsers.deleteUser)
    const editUser = useSelector(state=>state.allUsers.editUser)
    const viewUser = useSelector(state=>state.allUsers.viewUser)

    const getAllUsers2 = ()=>{
        axios.get("/employee/list?company_id=36&department_id=39&per_page=1000&page=1")
        .then(response =>{
            dispatch({
                type:GET_ALL_USERS,
                payload:response.data.results
            })
        })
    }

    
    useEffect(()=>{
        const getAllUsers = ()=>{
            axios.get("/employee/list?company_id=36&department_id=39&per_page=1000&page=1")
            .then(response =>{
                dispatch({
                    type:GET_ALL_USERS,
                    payload:response.data.results
                })
            })
        }    
        getAllUsers()
    },[dispatch])



    const deleteSelectedUser= ()=>{
        axios.patch("/remove",{
            employee_id:deleteUser
        })
        .then(response=>{
            if(response.data.status){
                dispatch({
                    type:SET_DELETE_USER,
                    payload:null
                })
                getAllUsers2()
            }
        })
    }

    const dontDeleteSelectedUser=()=>{
        dispatch({
            type:SET_DELETE_USER,
            payload:null
        })
    }

    const allUsers = allUsersList.map((user,index)=>(
        <SingleUser key={user.id} {...user} index={index}/>
    )) 

    return(
        <div className="allUserContainer">
            <h3>Employee List</h3>
            <div className="tableContainer">
            <table className="tableAllEmployee">
            <thead>
                <tr className="tableRow">
                    <th>Sr.No.</th>
                    <th>Name of Employee</th>
                    <th>Employee Code</th>
                    <th>Designation</th>
                    <th>Username</th>
                    <th>KYC status</th>
                    <th>Action</th>

                </tr>
                </thead>
                    <tbody>
                    {allUsers}
                </tbody>
                </table>
            </div>
            { deleteUser && (
                    <>
                     <div className="popUpDelete">
                        <h3>Delete Employee</h3>
                        <p>Are you sure you want to delete employee?</p>
                        <div>
                        <button onClick={deleteSelectedUser}>Yes</button>
                        <button onClick={dontDeleteSelectedUser}>No</button>
                        </div>
                    </div>
                    <div className="cover"></div>
                    </>
            )}

            { editUser && (
                <>
                   <EditUser getAllUsers2={getAllUsers2}/>
                   <div className="cover"></div>
                </>
            )}
           
           { viewUser && (
               <>
                < ViewUserDetails/>
                <div className="cover"></div>
              </>
           )}
           
        </div>
    )   
}

export default UserList