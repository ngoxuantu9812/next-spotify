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
export const siteTitle = 'Spotify';

export default function NavbarMenu() {
  return (
    <nav className='nav-bar px-6 py-6 col-span-1'>
      <a href="/" className='logo'>
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
        <MenuItem className='pl-0'> <FontAwesomeIcon className='pr-3 text-xl' icon={icon({ name: 'house-user', style: 'solid' })} /> Trang chủ</MenuItem>
        <MenuItem className='pl-0'> <FontAwesomeIcon className='pr-3 text-xl' icon={icon({ name: 'magnifying-glass', style: 'solid' })} /> Tìm kiếm</MenuItem>
        <MenuItem className='pl-0'> <FontAwesomeIcon className='pr-3 text-xl' icon={icon({ name: 'book', style: 'solid' })} /> Thư viện</MenuItem>
      </MenuList>
      <MenuList className='footer-list'>
        <MenuItem className='pl-0'> <FontAwesomeIcon className='pr-3 text-xl' icon={icon({ name: 'square-plus', style: 'solid' })} /> Tạo playlist</MenuItem>
        <MenuItem className='pl-0'> <FontAwesomeIcon className='pr-3 text-xl' icon={icon({ name: 'heart', style: 'solid' })} /> Bài hát đã thích</MenuItem>
      </MenuList>
    </nav>
  );
}
