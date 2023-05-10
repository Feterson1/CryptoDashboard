import {HomeOutlined,ChevronLeftOutlined,ChevronRightOutlined,AutoGraphOutlined, MenuBookOutlined,SettingsOutlined ,LogoutOutlined, Book, BookOutlined } from '@mui/icons-material';

export const navMenu = [{
    name: 'Главная',
    icon: <HomeOutlined/>,
    path: '/',
    id: 1,
},{
    name: 'Избранное',
    icon: <AutoGraphOutlined/>,
    path: '/watchlist',
    id: 2,
},{
    name: 'Новости',
    icon: <BookOutlined/>,
    path: '/news',
    id: 3,
},{
    name: 'Настройки',
    icon: <SettingsOutlined/>,
    path: '/settings',
    id: 4,
},






]