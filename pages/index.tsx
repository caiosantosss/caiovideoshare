import type { NextPage } from 'next';
import axios from 'axios';

const Home: NextPage = () => {
  return (
    <div className='text-3x1 font-bold underline'>
      Caio Video Share
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get('https://api.github.com/repos/caio-video-share/caio-video-share');
}

export default Home
