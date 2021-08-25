import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

export const NavItems = [
    {
        title: 'Movies',
        icon: <RiIcons.RiMovie2Line />,
        class: 'nav-item-li',
        path: '/',
    },
    {
        title: 'Favourites',
        icon: <FaIcons.FaRegHeart />,
        class: 'nav-item-li',
        path: '/favourites',
    },
    {
        title: 'About Us',
        icon: <RiIcons.RiInformationLine />,
        class: 'nav-item-li',
        path: '/about',
    },
]