
const initialState = {
    userList: [],
    userDetail: []
}


export default function fetchReducer(state = initialState, action){
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                userList: [...action.payload]
            }
        case 'DELETE_USER':
            return {
                ...state,
                userList: state.userList.filter((item) => item.id !== action.payload),
            }
        case 'FETCH_USER_DETAIL':
            return {
                ...state,
                userDetail: [...action.payload]
            }
        default: return state
    }
}