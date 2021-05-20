import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { UserTable } from './Components/userTable';
import { UserDetails } from './Components/userDetails';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './app/actions'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  // const fetchDetail = () => {
  //   dispatch(fetchUsers());
  // }
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              <Route path='/' exact component={UserTable}></Route>
              <Route path='/userDetail/:id' component={UserDetails}></Route>
              {/* <Route path='/userDetail/:id' render={() => (
                  <UserDetails fetchDetail={fetchDetail} />)}>
                </Route> */}
            </div>
          </BrowserRouter>
        </div>
    )
}

export default App;
