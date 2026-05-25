import SectionHeader from "../components/SectionHeader.tsx";
import ProductCard from "../components/ProductCard.tsx";
import {useEffect, useState} from "react";
import { API_URL } from  "../config";
import ProductCategory from "../components/ProductCategory.tsx";
import Loader from "../components/loader/Loader.tsx";
import {delay} from "../unit/delay.ts";
import {useSearchParams} from "react-router";

interface Product {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
}


function Home(){
    const [products,setProducts] = useState<Product[] | []>([]);
    const [counter,setCounter] = useState<number>(1);
    const [loader,setLoader] = useState<boolean>(true);
    const [allProducts,setAllProducts] = useState<Product[] | []>([]);
    let [searchParams] = useSearchParams();


    useEffect(()=>{
        const getProducts = async (): Promise<void> => {
            try {
                const res: Response =await fetch(`${API_URL}/products?_limit=3`)
                const data: Product[] = await res.json()
                await delay(3000);
                setProducts(data);
                setLoader(false);
            }catch (e){
                console.error(e);
            }
        }
        void getProducts();

    }, [])


    useEffect(()=>{
        const getAllProducts = async (): Promise<void> => {
            try {
                setAllProducts([]);
                let catFilter = (searchParams.get('category')) ? `?cat_id=${searchParams.get('category')}`: '';
                const res: Response =await fetch(`${API_URL}/products${catFilter}`)
                const data: Product[] = await res.json()
                setLoader(true);
                await delay(1000);
                setAllProducts(data);
                setLoader(false);
            }catch (e){
                console.error(e);
            }
        }
        void getAllProducts();

        console.log();

    }, [searchParams])



    const handleChangeProduct = () => {
        setAllProducts( [
            ...allProducts, {
            id: 225,
            name: "satesto",
            price: 500,
            imgUrl: "text",
        }]
        )
    }


    return (
        <>

        <section className="px-10 py-12">
            <SectionHeader title="Our Bestsellers" url="/products" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative min-h-[200px]">
                {loader &&   <Loader /> }
                {products.map(product => ( <ProductCard key={product.id} id={product.id} imgH={96} imgUrl={product.imgUrl} name={product.name} price={product.price} />))}
            </div>
        </section>


    <section className="px-10 py-12 bg-stone-50">
        <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair text-2xl font-semibold text-stone-800">Explore by Category</h2>
            <div className="flex items-center gap-2">
                <span className="text-sm text-stone-500 mr-2">Sort by</span>
                <span className="flex items-center gap-1 text-xs text-stone-600 border border-stone-200 rounded-full px-3 py-1.5 cursor-pointer hover:border-stone-400 transition-colors">
                  asdasdas <span className="text-stone-400">∨</span>
                </span>
            </div>
        </div>



        <div className="flex gap-8">
            <div className="w-44 shrink-0 flex flex-col gap-2 ">

                <button onClick={() => setCounter(prev => ++prev)}>box</button>
                {counter}

                <button onClick={handleChangeProduct}>change Products</button>

                <ProductCategory />

                <button className="w-full flex items-center gap-2 px-4 py-2.5 mt-2 rounded-full bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-colors">
                    All Category →
                </button>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-5 relative">
                {loader &&   <Loader /> }
                {allProducts.map(product => ( <ProductCard key={product.id} id={product.id} imgH={96} imgUrl={product.imgUrl} name={product.name} price={product.price} />))}

            </div>

        </div>
    </section>
        </>
    )
}
export default Home;