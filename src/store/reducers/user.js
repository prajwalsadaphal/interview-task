import {SET_EMPLOYEE_ID} from "../action.types"

const initialState ={
    createEmployeePartSecond:{
        employeeId:null,
    }

}

const user = (state=initialState,action)=>{
    switch(action.type){
        case SET_EMPLOYEE_ID:
            return {...state, createEmployeePartSecond:{...state.createEmployeePartSecond,employeeId:action.payload}}

        default:
            return state
    }
}

export default  user