import React from "react";
import QuaterBox from "../shared/QuaterBox";
import Wrapper from "../shared/Wrapper";

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <h2 className="text-3xl font-semibold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-slate-600">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <div className="mt-5 flex gap-x-4 gap-y-8 ">
          {/* Content Left */}
          <div className="shadow-xl basis-8/12 rounded-lg border-slate-200 py-8 px-8">
            <h4 className="text-primary  text-lg">Specialized Track</h4>
            <h3 className="text-2xl font-semibold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-lg text-slate-600 mt-2">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences
            </p>
            <button className="text-primary  text-xl mt-4 underline">
              Learn More
            </button>
            <div className=" flex gap-4 mt-8">
              <QuaterBox
                description="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                header="Quarter IV"
                number={4}
                haveBorder={false}
              />
              <QuaterBox
                description="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                header="Quarter V"
                number={5}
                haveBorder={false}
              />
            </div>
          </div>
          {/* Content Right */}
          <div className=" px-4 py-6 bg-slate-200 basis-4/12">
            <div className="flex  gap-x-4 items-center cursor-pointer">
              <div>
                <div className="w-20 h-16 rounded bg-red-100"></div>
              </div>
              <div>
                {/* primary color bnane k liye tailwind.config k file mai ja k
               colors:{primary:"#00616C"} ase apni mrzi ka code enter kren gy */}
                <h4 className="text-primary font-medium">Specialized Track</h4>
                <h3 className="text-xl font-semibold">
                  Web 3.0 (Blockchain) and Metaverse Specialization
                </h3>
              </div>
            </div>
            {/* element 2 */}
            <div className="flex  gap-x-4 items-center cursor-pointer">
              <div>
                <div className="w-20 h-16 rounded bg-red-100"></div>
              </div>
              <div>
                <h4 className="text-primary font-medium">Specialized Track</h4>
                <h3 className="text-xl font-semibold">
                Artificial Intelligence (AI) and Deep Learning Specialization
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
