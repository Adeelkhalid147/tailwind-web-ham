import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import HeroPoster from "../../assets/images/hero-poster.webp";
import Button from "../shared/Button"

function Hero() {
  return (
    <section className="">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* {Left side} */}
          <div className="flex-1">
            <h4 className="text-primary font-semibold text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl sm:text-6xl font-bold md:text-red-400 lg:text-blue-700">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="mt-6 text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-6 text-xl text-slate-600">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologiessss
            </p>
            <div className="mt-7">
              <Button text={"Enroll Now"}/>
            </div>
          </div>
          {/* Right side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="HeroPoster" height="500" width="500" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
