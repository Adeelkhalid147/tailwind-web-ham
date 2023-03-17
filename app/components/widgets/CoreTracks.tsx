import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import Header from "../layout/Header1";
import QuaterBox from "../shared/QuaterBox";

const CoreTrackData = [
  {
    id: 1,
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    id: 2,
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    id: 3,
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations)";
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-md">
          <h4 className="text-primary  font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          {/* variable use kren gy text ko line break use krne k liye
           whitespace-pre-line line break k liye use hta h  */}
          <h2 className="text-3xl font-semibold whitespace-pre-line">
            {header}
          </h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses.
          </p>
          <div className="mt-7">
            <Button text="Learn More" />
          </div>
        </div>
        {/*Box 1*/}

        <div className="my-20 flex flex-col md:flex-row gap-x-4 gap-y-6 ">
          {/* jb koi parent chield bnana ho to relative use krte relative parent ko show krta
            jb k absolute chield ko. absolute se hm left right kr skte */}
          {/* map k function ()=>{}  mai arrow k bd jo brachit use hti h wo {} ya ()
            use krte hai in mai fark ye h k agr hm ne console krwana h ya multiple
            return krwane hai to hm {} bracket use krte hai or return ka word use kr
            k sth () as bracket mai data likhte hai
            agr single return krna h to () ye bracket use hti h */}
          {CoreTrackData.map((item) => (
            <QuaterBox
              key={item.id}
              description={item.description}
              header={item.header}
              number={item.number}
             
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
