import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

const Navbar = () => {
  return (
    <Link>
      <div>
        <Image
          className='cursor-pointer'
          src={ }
        />
      </div>
    </Link>
  )
}

export default Navbar
