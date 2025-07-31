import React from "react"
import { WORK_CARD_COLORS, FONT_CLASSES } from '../constants'

interface WorkCardProps {
  title: string
  description: string
  stack: string
  bgColor?: string
}

export const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  stack,
  bgColor = WORK_CARD_COLORS[0], // default to first color
}) => {
  return (
    <div className={`w-full my-4 rounded-md overflow-hidden ${bgColor}`}>
      <div className="flex w-full h-[27rem] pt-10 pb-10 pl-7 pr-7 gap-3">
        {/* Left - Info Section */}
        <div className="w-[25%] p-4 flex flex-col justify-end pl-1 items-end text-right bg-white">
          <div>
            <h2 className={`text-4xl font-bold ${FONT_CLASSES.GROT_BOLD} text-yellow-400`}>{title}</h2>
            <p className={`text-xl ${FONT_CLASSES.GROT_BOLD} mt-1`}>{description}</p>
            <p className={`text-sm ${FONT_CLASSES.GROT_BOLD} uppercase mt-2`}>{stack}</p>
          </div>
        </div>

        {/* Right - Image/Animation Section */}
        <div className="w-[75%] bg-white"></div>
      </div>
    </div>
  );
};
