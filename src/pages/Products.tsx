
import {useEffect, useMemo, useRef, useState} from "react";
import { API_URL } from  "../config";
import Loader from "../components/loader/Loader.tsx";
import ProductCard2 from "../components/ProductCard2.tsx";

interface Product {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}


function Products(){
    const [searchValue,setSearchValue] = useState<string>("");
    const [counter,setCounter] = useState<number>(1);
    const [loader,setLoader] = useState<boolean>(true);
    const [allProducts,setAllProducts] = useState<Product[] | []>([]);
    const prodName = useRef<HTMLInputElement | null>(null)


    useEffect(()=>{
        const getAllProducts = async (): Promise<void> => {
            try {
                setAllProducts([]);

                const res: Response =await fetch(`${API_URL}/products`)
                const data: Product[] = await res.json()

                setAllProducts(data);
                setLoader(false);
            }catch (e){
                console.error(e);
            }
        }
        void getAllProducts();

        console.log();

    }, [])

    const filteredData = useMemo(() =>{
        return allProducts.filter( product => product.name.toLowerCase().includes(searchValue))
    } , [allProducts, searchValue]);


    const handleSearchProd = () =>{
        if(prodName.current){
            setSearchValue(prodName.current.value)
        }

    }



    return (
        <>

                <input type="text" ref={prodName} className="border border-amber-600"/>
                <button onClick={handleSearchProd} className="bg-gray-700 text-white">Search</button>

                <button onClick={() => setCounter(prev => ++prev)}>box</button>
                {counter}



            <div className="flex-1 grid grid-cols-3 gap-5 relative">
                {loader &&   <Loader /> }
                {filteredData.map(product => ( <ProductCard2 key={product.id} id={product.id} imgH={96} imgUrl={product.imgUrl} name={product.name} price={product.price} />))}

            </div>

        </>
    )
}
export default Products;