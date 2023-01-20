import logo from '../../public/logo2.png';
import Image from 'next/image';
import {
  MenuList,
  MenuItem
} from "@mui/material";
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './main.module.css';
export const siteTitle = 'Spotify';

export default function NavbarMenu() {
  return (
    <nav className='nav-bar px-6 py-6 col-span-1 text-white h-screen'>
      <a href="/" className='logom pb-6 block'>
        <Image
              priority
              src={logo}
              className="img-logo"
              height={40}
              width={131}
              alt={siteTitle}
            />
      </a>
      <MenuList className='main-list'>
        <MenuItem className='pl-0 pb-3 '> <FontAwesomeIcon className='pr-3 text-2xl' icon={icon({ name: 'house-user', style: 'solid' })} /> <span className='text-sm font-bold'>Trang chủ</span></MenuItem>
        <MenuItem className='pl-0 pb-3 '> <FontAwesomeIcon className='pr-3 text-2xl' icon={icon({ name: 'magnifying-glass', style: 'solid' })} /> <span className='text-sm font-bold'>Tìm kiếm</span></MenuItem>
        <MenuItem className='pl-0 pb-3 '> <FontAwesomeIcon className='pr-3 text-2xl' icon={icon({ name: 'book', style: 'solid' })} /> <span className='text-sm font-bold'>Thư viện</span></MenuItem>
      </MenuList>
      <MenuList className='footer-list'>
        <MenuItem className='pl-0 pb-3 '> <FontAwesomeIcon className='pr-3 text-2xl' icon={icon({ name: 'square-plus', style: 'solid' })} /> <span className='text-sm font-bold'>Tạo playlist</span></MenuItem>
        <MenuItem className='pl-0 pb-3 '> <FontAwesomeIcon className='pr-3 text-2xl' icon={icon({ name: 'heart', style: 'solid' })} /> <span className='text-sm font-bold'>Bài hát đã thích</span></MenuItem>
      </MenuList>
    </nav>
  );
}
