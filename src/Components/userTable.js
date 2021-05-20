import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../app/actions'
import { useHistory } from 'react-router-dom'

export function UserTable() {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user.userList)
    const history = useHistory()

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [])

    const handleDelete = (key) => {
        dispatch(deleteUser(key));
    }

    const handleOpen = (id) => {
        history.push(`/userDetail/${id}`);
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Address',
            key: 'address',
            render: (record) => record.address.street+ ', ' + record.address.suite + ', ' + record.address.city
        },
        {
        title: 'Phone',
        key: 'phone',
        render: (record) => record.phone.split(' ')[0]
        },
        {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        },
        {
        title: 'Company',
        dataIndex: ['company', 'name'],
        key: 'company',
        },
        {
        title: 'Actions',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a onClick={() => handleOpen(record.id)}>Open</a>
                <a onClick={() => handleDelete(record.id)}>Delete</a>
            </Space>
            ),
        },
    ];

  return (
    <div>
    
        <Table 
            dataSource={userData} 
            columns={columns}
            pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '20']}} 
            rowKey="id" 
        />
            
    </div>
  );
}
