import { FC } from "react";

interface IProps {
  header: string;
  description: string;
  number: number;
  haveBorder?:boolean;
}
const QuaterBox: FC<IProps> = ({ header, description, number,haveBorder=true }) => {
  return (
    <div className={`rounded-md flex-1 relative px-8 py-12 flex flex-col justify-center ${haveBorder && "border" }`}>
      <h4 className="font-bold text-lg">{header}</h4>
      <p className="mt-2 text-slate-600">{description}</p>
      {/* z index se word background mai chla jae ga z k value positive mai ho gey front
           pe show ho ga or agr negative mai ho gey to background mai chla jae ga */}
      <div className="absolute -top-10 right-10 text-[175px] font-bold -z-10 text-teal-50">
        {number}
      </div>
    </div>
  );
};

export default QuaterBox;
