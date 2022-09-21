import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/camisa1.png'
import camiseta2 from '../assets/camisetas/camisa2.png'
import camiseta3 from '../assets/camisetas/camisa3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {

  const  [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} alt='Imagem de uma camisa' width={520} height={480}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} alt='Imagem de uma camisa' width={520} height={480}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt='Imagem de uma camisa' width={520} height={480}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} alt='Imagem de uma camisa' width={520} height={480}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
