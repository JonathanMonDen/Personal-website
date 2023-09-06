import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 gap-y-10 w-[350px] xl:w-[560px]">
      <Image
        src={"/bulb.png"}
        width={350}
        height={350}
        alt="bulb"
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
