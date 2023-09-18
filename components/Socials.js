import Link from "next/link";

import {RiGithubFill, RiCodepenFill, RiLinkedinFill} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-3xl">
    <Link href={'https://github.com/JonathanMonDen'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiGithubFill />
    </Link>
    <Link href={'https://codepen.io/JonathanMonDen'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiCodepenFill />
    </Link>
    <Link href={'https://www.linkedin.com/in/jmddev/'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinFill />
    </Link>
  </div>;
};

export default Socials;
