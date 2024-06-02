import { projects } from "@/data"
import { PinContainer } from "./ui/3dPin"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

function RecentProjects() {
  return (
    <div className="py-20" id="projetos">
        <h1 className="heading">
            Uma pequena seleção dos nossos <span className="text-purple">projetos recentes</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    
                    <PinContainer
                        title={link}
                        href={link}
                    >
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} alt={title} width={460} height={300} className="z-10 absolute top-8 rounded-xl rotate-2" />
                        </div>
                        <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">{title}</h1>

                        <p className="font-light text-sm line-clamp-2 lg:text-xl lg:font-normal">{des}</p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className="border borderwhite/[0.2] rounded-full bg-black lg:size-10 size-8 flex justify-center items-center" 
                                    style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                        <img src={icon} alt={icon} className="p-2" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center">
                            <Link href={link} target="_blank" className="flex lg:text-xl md:text-xs text-sm text-purple">
                                <p>Visualizar</p>
                                <ExternalLink className="ms-3" color="#CBACF9"/>
                            </Link>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects