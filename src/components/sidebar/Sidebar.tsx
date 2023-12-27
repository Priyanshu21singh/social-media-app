import React from 'react'
import "./sidebar.css"

import ProLayout, { MenuDataItem, PageContainer } from '@ant-design/pro-layout'

import {  MdHome } from "react-icons/md"
import {  AiFillLike } from "react-icons/ai"
import { FaBookmark } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";





const Sidebar = () => {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
  <PageContainer>
<ProLayout menuDataRender={() => [
        {
          path: '/',
          name: 'Home',
          icon: <MdHome/>,
        },
        {
          path: '/likes',
          name:'My Likes',
          icon: < AiFillLike />,
        },
        {
          key: '/bookmarks',
          name: 'My Bookmarks',
          icon: <FaBookmark/>,
        },
        {
          key: '/posts',
          name: 'My Posts',
          icon: <IoGrid/>,
        },
        {
          key: '/user',
          name: 'My Profile',
          icon: <FaUser/>,
        }
       
        
        ]} 
      
       headerTitleRender={false}
         title="Socialite"  logo="https://static.vecteezy.com/system/resources/previews/009/111/362/non_2x/community-group-three-people-help-icon-in-flat-style-youth-symbol-persons-team-partnership-for-web-site-design-logo-app-leadership-connection-meeting-vector.jpg">
    
 {isAuthenticated ?  (  <button className='authLogout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>) :(<button className='authLogin' onClick={() => loginWithRedirect()}>Log In</button>)}
  
  
 
</ProLayout>
</PageContainer>
  )
}

export default Sidebar