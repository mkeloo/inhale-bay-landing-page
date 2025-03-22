import { AnimatedCards } from "./AnimatedCards";

import vapesImg from "@/public/assets/hero/Home/HeroVapesRaz.webp";
import flowerBudsImag from "@/public/assets/hero/Home/HeroTHC-A.webp";
import bongsImg from "@/public/assets/hero/Home/HeroBongsGeneric.webp";
import vapes2Img from "@/public/assets/hero/Home/HeroQuasarVape.webp"
import flowerBuds2Img from "@/public/assets/hero/Home/HeroFlowerBud.webp"
import SwiperEffectCards from "./SwiperEffectCards";

export function AnimatedCardsDemo() {
    const imageCards = [
        {
            id: 1,
            src: bongsImg.src,
            colors: "from-purple-600 via-pink-600 to-red-600"
        },
        {
            id: 2,
            src: vapesImg.src,
            colors: "from-green-400 via-teal-600 to-blue-400"
        },
        {
            id: 3,
            src: flowerBudsImag.src,
            colors: "from-yellow-400 via-orange-400 to-red-400"
        },
        {
            id: 4,
            src: vapes2Img.src,
            colors: "from-indigo-600 via-purple-600 to-pink-600"
        },
        {
            id: 5,
            src: flowerBuds2Img.src,
            colors: "from-blue-400 via-cyan-400 to-teal-600"
        },
        {
            id: 6,
            src: bongsImg.src,
            colors: "from-purple-600 via-pink-600 to-red-600"
        },
        {
            id: 7,
            src: vapesImg.src,
            colors: "from-green-400 via-teal-600 to-blue-400"
        },
        {
            id: 8,
            src: flowerBudsImag.src,
            colors: "from-yellow-400 via-orange-400 to-red-400"
        },
        {
            id: 9,
            src: vapes2Img.src,
            colors: "from-indigo-600 via-purple-600 to-pink-600"
        },
        {
            id: 10,
            src: flowerBuds2Img.src,
            colors: "from-blue-400 via-cyan-400 to-teal-600"
        },
    ];
    // return <AnimatedCards imageCards={imageCards} />;
    return <SwiperEffectCards imageCards={imageCards} />;
}
