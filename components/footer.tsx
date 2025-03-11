import { Send } from "lucide-react"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"

function Footer() {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contato">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">Vamos levar <span className="text-purple">presença digital</span> para o <span className="text-purple">próximo nível</span>?</h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Entre em contato hoje e vamos discutir como podemos te ajudar a atingir seus objetivos.</p>
            <a href="http://wa.me/5515996009508">
                <MagicButton title="Entrar em contato" icon={<Send />} position="right"/>
            </a>
        </div>

        <div className="flex flex-col md:flex-row mt-16 items-center justify-between gap-4">
            <p className="md:text-base text-sm md:font-normal font-light">© 2024 - The Bridge</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map(({id, img}) => (
                    <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <img src={img} alt={img} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer