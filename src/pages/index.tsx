import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/camisa1.png'
import camiseta2 from '../assets/camisetas/camisa2.png'
import camiseta3 from '../assets/camisetas/camisa3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt='Imagem de uma camisa' width={520} height={480}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} alt='Imagem de uma camisa' width={520} height={480}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta3} alt='Imagem de uma camisa' width={520} height={480}/>

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
