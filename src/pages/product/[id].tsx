
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
    const { query } = useRouter()

    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            
            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iure tenetur doloremque at quidem ipsa sapiente officiis saepe totam reprehenderit repellendus, possimus enim adipisci quasi in excepturi molestias odio rerum!</p>
            
                <button>
                    Comprar Agora
                </button>
            </ProductDetails>
    
        </ProductContainer>
    )
}