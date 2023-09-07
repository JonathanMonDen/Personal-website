import Image from "next/image";

import Link from "next/link";

import { useRouter } from "next/router";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="z-30 absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="w-[220px] h-[48px]">
              <h1 className=" text-4xl"><span className="text-accent">{"</"}</span> JMD <span className="text-accent">{">"}</span></h1>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
