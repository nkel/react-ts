import {Route, Routes} from "react-router";
import Layout from "../layout/Layout.tsx";
import Home from "../pages/Home.tsx";
import Products from "../pages/Products.tsx";

function MyRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />
            {/*<Route path="/:slug" element={<Test />} />*/}
            <Route path="/test" element={<Layout />}>
                <Route index element={<Home />} />

            </Route>

        </Routes>
        )
}
export default MyRouting;