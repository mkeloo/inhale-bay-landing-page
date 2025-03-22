import { AnimatedCards } from "./AnimatedCards";

import vapesImg from "@/public/assets/hero/Home/HeroVapesRaz.webp";
import flowerBudsImag from "@/public/assets/hero/Home/HeroTHC-A.webp";
import bongsImg from "@/public/assets/hero/Home/HeroBongsGeneric.webp";
import vapes2Img from "@/public/assets/hero/Home/HeroQuasarVape.webp"
import flowerBuds2Img from "@/public/assets/hero/Home/HeroFlowerBud.webp"

export function AnimatedTestimonialsDemo() {
    const imageCards = [
        {
            id: 1,
            src: bongsImg.src,
            colors: "from-purple-400 via-pink-300 to-red-200"
        },
        {
            id: 2,
            src: vapesImg.src,
            colors: "from-green-400 via-teal-300 to-blue-200"
        },
        {
            id: 3,
            src: flowerBudsImag.src,
            colors: "from-yellow-400 via-orange-300 to-red-200"
        },
        {
            id: 4,
            src: vapes2Img.src,
            colors: "from-indigo-400 via-purple-300 to-pink-200"
        },
        {
            id: 5,
            src: flowerBuds2Img.src,
            colors: "from-blue-400 via-cyan-300 to-teal-200"
        },
    ];
    return <AnimatedCards imageCards={imageCards} />;
}
