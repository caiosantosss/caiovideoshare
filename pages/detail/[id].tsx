import React, { useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import { Video } from '../../types';

interface Iprops {
  postDetails: Video,
}

const Detail = ({ postDetails }: Iprops ) => {
  const [post, setPost] = useState(postDetails);

  const videoRef = useRef(null);

  if(!post) return null;

  return (
    <div>

    </div>
  )
}

export const getServerSideProps = async ({
  params: { id } }: { params: {id: string }}) => {
    const { data } = await axios.get(`${BASE_URL}/api/post/${id}`);

    return {
      props: { postDetail: data }
    }
}

export default Detail
