import { useState } from "react"
import { IProduct } from "../models"
// import { ModalContext } from "../context/ModalContext"

interface ProductProps {
    product: IProduct

}

// export function Product(props: ProductProps){
export function Product({ product }: ProductProps) {
    // const mod = useContext(ModalContext)
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ["py-2 px-4 border", btnBgClassName]

       return (
        <div
            className="border py-2 px-4 rounded flex 
        flex-col item center mb-2"
        >
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>
                {product.title}
            </p>
            <p className="font-bold">{product.price}</p>
            <button
                onClick={() => setDetails(prev => !prev)}
                className={btnClasses.join(' ')}>
                {details ? 'Hide Detailes' : 'Show Detailes'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
                <button
                    onClick={() => setDetails(false)}
                    className="py-2 px-4 border bg-yellow-400">
                    Hide Detailes
                </button>
            </div>}
{/* <pre>{JSON.stringify(mod)}</pre> */}
        </div>
    )
}