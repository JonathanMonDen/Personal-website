import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={"/work"} className="relative w-[175px] h-[175px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group">
        <Image
          src={"/rounded-text.png"}
          width={140}
          height={140}
          alt="my projects"
          className="animate-spin-slow w-full h-full max-w-[140px] max-h-[140px]"
        />
        <HiArrowRight className="absolute text-6xl group.hover:translate-x-2 hover:bg-secondary rounded-full p-3" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
