import userAPI from './userAPI'

export const fetchUsers = () => {
    return async dispatch => {
        const response = await userAPI.get()
        dispatch({type: 'FETCH_USERS', payload: response.data})
    }
    
}

export const deleteUser = (payload) => {
    return {
        type : 'DELETE_USER',
        payload: payload
    }
}

export const fetchUserDetail = (id) => {
    return async dispatch => {
        const response = await userAPI.get('https://jsonplaceholder.typicode.com/users/', {
            params : {
                id: id,
            },
        })
        dispatch({type: 'FETCH_USER_DETAIL', payload: response.data})
    }
    
}