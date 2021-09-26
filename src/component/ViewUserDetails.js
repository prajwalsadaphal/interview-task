import {VIEW_USER} from "../store/action.types"
import {useSelector,useDispatch} from "react-redux"
import RowDetails from "./RowDetails"

const ViewUserDetails = ()=>{
    const dispatch = useDispatch()

    const {first_name,
        last_name,
        gender,
        email,
        mobile,
        code,
        dob,
        qualification,
        category,
        designation,
        company_name,
        unit_name,
        shift,
        joining_date,
        kyc_details} = useSelector(state=>state.allUsers.viewUser)

       const cancel=()=>{
        dispatch({
            type:VIEW_USER,
            payload:null
        })
       }
    return (
        <div className="viewUserContainer">
            <div className="titleContainer"> <h2>KYC Status</h2> <button onClick={cancel} className="buttoncancel">X</button> </div>
            <h4>Name:{`${first_name}  ${last_name}`}</h4>
            <table className="tableViewUser">
                <tbody>
                    <RowDetails key1="Gender" value1={gender} key2="Email" value2={email}/>
                    <RowDetails key1="Mobile No" value1={mobile} key2="Code" value2={code}/>
                    <RowDetails key1="DOB" value1={dob} key2="Qualification" value2={qualification}/>
                    <RowDetails key1="Category" value1={category.name} key2="Designation" value2={designation.name}/>
                    <RowDetails key1="Company" value1={company_name.name} key2="Department" value2={unit_name.name}/>
                    <RowDetails key1="Shift" value1={shift.name} key2="Joining Date" value2={joining_date}/>
                </tbody>
            </table>

           {kyc_details.bank_details &&
            <div>
                <h4>Bank Details</h4>
                <p>Bank: {kyc_details.bank_details.bank_name}</p>
                <p>Account holder name: {kyc_details.bank_details.ac_holder_name}</p>
                <p>Account No.: {kyc_details.bank_details.ac_no}</p>
                <p>Branch: {kyc_details.bank_details.branch}</p>
                <p>IFSC Code: {kyc_details.bank_details.ifsc}</p>
            </div>
            }

    {kyc_details.aadhar_details &&
            <div>
                <h4>Adhaar Details</h4>
                <p>Name on Adhaar: {kyc_details.aadhar_details.name}</p>
                <p>Adharr No.: {kyc_details.aadhar_details.aadhar_no}</p>
                <p>DOB.: {kyc_details.aadhar_details.dob}</p>
            </div>
            }
        </div>

    )

}
export default ViewUserDetails