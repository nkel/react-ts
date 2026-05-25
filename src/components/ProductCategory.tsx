import {useEffect, useState} from "react";
import {API_URL} from "../config.ts";
import {NavLink, useSearchParams} from "react-router";

interface Category {
    id: number;
    name: string;
    icon: string;
}


function ProductCategory(){
    const [categories, setCategories] = useState<Category[] | []>([])
    let [searchParams] = useSearchParams();

    useEffect(() => {
        async function getCategory(): Promise<void> {
            try {
                const res: Response =await fetch(`${API_URL}/categories`)
                const data: Category[] = await res.json()
                setCategories(data);
            }catch (e){
                console.error(e);
            }
        }
        void getCategory();
    },[])


    return (
        <>
            { categories.map(category => (
                <NavLink to={`?category=${category.id}`} key={category.id} className={() =>
                    `w-full flex items-center gap-3 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 ${
                        searchParams.get("category") === String(category.id)
                            ? "bg-stone-800 text-white border-stone-800"
                            : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
                    }`
                }
                >
                    <span><img src={category.icon} alt="" width={30} height={30} /></span>
                    <span>{category.name}</span>
                </NavLink>
            ))}

        </>


       )


}
export default ProductCategory;