import {
    solid,
    regular,
    brands,
    icon
  } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
      <header className="menu_top flex justify-between">
            <div className="left_button  ">
                <button className='rounded-full h-9 w-9 bg-slate-600 mr-5'>
                    <FontAwesomeIcon className='text-xl' icon={icon({ name: 'chevron-left', style: 'solid' })} />
                </button>
                <button className='rounded-full h-9 w-9 bg-slate-600'>
                    <FontAwesomeIcon className='text-xl' icon={icon({ name: 'chevron-right', style: 'solid' })} />
                </button>
            </div>
            <div className='right_button '>
                <button className='rounded-full px-0 py-1 mr-5'>
                    Đăng ký
                </button>
                <button className='rounded-full px-8 py-1 bg-black'>
                    Đăng nhập
                </button>
            </div>
      </header>
      
    );
  }
  