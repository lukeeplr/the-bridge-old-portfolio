'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { servicesLeft, servicesRight } from "@/data";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { Copy } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {

  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('lukeeplr@gmail.com')

    setCopied(true)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-center object-cover')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
              src={spareImg}
              alt={spareImg}
              className='object-center object-cover w-full h-full'
          />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative min-h-40 md:h-full flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
          </div>
        

        {id === 2 && (
          <GlobeDemo />
        )}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {servicesLeft.map((service) => (
                <span key={service.name} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{service.name}</span>
              ))}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
              {servicesRight.map((service) => (
                <span key={service.name} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">{service.name}</span>
              ))}
            </div>  
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie options={{
                loop: copied, 
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }} />
            </div>

            <MagicButton 
              title={copied ? 'E-mail copiado!' : 'Copiar e-mail'} 
              icon={<Copy />} 
              position="left"
              handleClick={handleCopy}
              className="!bg-[#161a31]"
            />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};