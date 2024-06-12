import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


  export class Sidebar extends React.Component {
  render() {
  return (
    <div >
          <div className="pt-5 "></div>
   <div style={{ display: 'flex', height: '120vh', overflow: 'scroll initial' }} className='col-lg-3'>
      <CDBSidebar textColor="#fff" backgroundColor="black">
        <CDBSidebarHeader style={{backgroundColor:'orange' }} prefix={<i className="fa fa-bars fa-large"></i>}>
          <a className="text-decoration-none" style={{ color: 'inherit'}}>
            Victim
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/dashboard/victim" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>
          <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">My account</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard/crimes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note">View all report</CDBSidebarMenuItem>
            </NavLink>
             
            <NavLink exact to="/#" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-sign-out-alt">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }} >
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </div>
  );
}
}
