import React from 'react'
import Main from '../components/Main/Main'
import Sidebar from '../components/SideBar/Sidebar'


const Dashboard = (props) => {
    return (
        <div>
            <Sidebar/>
            <Main tariffList={props.tariffList}/>
        </div>
    )
}

export default Dashboard