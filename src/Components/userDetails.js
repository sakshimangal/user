import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchUserDetail } from '../app/actions'
import './userDetails.scss'

export function UserDetails() {

    // const [userDetail, setUserDetail] = useState([])
    // const userData = useSelector(state => state.user.userList)
    const userDetail = useSelector(state => state.user.userDetail)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserDetail(id));
    }, [])


    return (
        userDetail && userDetail.length ? 
        (<div className='detail-wrapper'>
            <div className='detail'>
                <p className='heading'>Name :</p>
                <p>{userDetail[0].name}</p>
            </div>
            <div className='detail'>
                <p className='heading'>Username :</p>
                <p>{userDetail[0].username}</p>
            </div>
            <div className='detail'>
                <p className='heading'>Email :</p>
                <p>{userDetail[0].email}</p>
            </div>
            <div className='detail'>
                <p className='heading'>Phone :</p>
                <p>{userDetail[0].phone.split(' ')[0]}</p>
            </div>
            <div className='detail'>
                <p className='heading'>Address :</p>
                <p>{userDetail[0].address.street}, {userDetail[0].address.suite}, {userDetail[0].address.city}, {userDetail[0].address.zipcode}</p>
            </div>
            <div className='detail'>
                <p className='heading'>Website :</p>
                <p>{userDetail[0].website}</p>
            </div>
            <div className='detail'>
                <p className='heading'>Company :</p>
                <p>{userDetail[0].company.name}</p>
            </div>
            <div className='detail'>
                <p className='heading'>Catch Phrase :</p>
                <p>{userDetail[0].company.catchPhrase}</p>
            </div>
        </div>)
        : ''
    )
}
