import { workAreas } from "@/data"
import { Button } from "./ui/MovingBorders"

function Work() {
  return (
    <div className="py-20" >
        <h1 className="heading">
            Nossas <span className="text-purple">áreas de atuação</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workAreas.map(({id, title, desc, thumbnail, className}) => (
                <Button 
                    key={id}
                    borderRadius="1.75rem"
                    className="flex-1 text-white border-neutral-200"
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    >
                    <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <img src={thumbnail} alt={title} className="lg:w-32 md:w-20 w-16"   />
                        <div className="lg:ms-5">
                            <h1 className="text-start text-xl md:text-2xl font-bold">{title}</h1>
                            <p className="text-start text-white-100 mt-3 font-semibold">{desc}</p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Work