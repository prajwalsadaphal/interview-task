import {GET_ALL_USERS,SET_DELETE_USER,EDIT_USER,VIEW_USER} from "../action.types"

const initialState = {
    allUsers:[],
    deleteUser:null,
    editUser:null,
    viewUser:null,
}


const allUsers = (state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_USERS:
            return {...state, allUsers:action.payload}

        case SET_DELETE_USER:
            return {...state, deleteUser:action.payload}
        case EDIT_USER:
            return {...state, editUser:action.payload}

        case VIEW_USER:
            return {...state, viewUser:action.payload}
        default:
            return state
    }
}

export default allUsers