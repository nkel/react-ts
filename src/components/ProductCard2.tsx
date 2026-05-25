import {Link} from "react-router";


type ProductCardProps = {
    id: number;
    imgH: number,
    imgUrl: string,
    name: string,
    price: number,
}


const ProductCard2 = ( { id, imgH, imgUrl, name, price }: ProductCardProps) => {
    return (
        <>
            <div className="group cursor-pointer relative">
                <div className={`h-${imgH} w-full overflow-hidden rounded-xl mb-3 bg-stone-100`}>
                    <img
                        src={imgUrl}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500"
                    />
                </div>
                <p className="text-sm font-medium text-stone-800 mb-1">{name}</p>
                <p className="text-sm font-semibold price-color">{price}</p>
                <Link to={`/products/${id}`} className="absolute inset-0"></Link>
            </div>
        </>
    )
}

export default ProductCard2;