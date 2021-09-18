import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import * as GoIcons from 'react-icons/go'

export const NavItems = [
    {
        title: 'Movies',
        icon: <RiIcons.RiMovie2Line />,
        class: 'nav-item-li',
        path: '/',
    },
    {
        title: 'Search',
        icon: <GoIcons.GoSearch />,
        class: 'nav-item-li',
        path: '/search',
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