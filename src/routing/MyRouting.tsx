import {Route, Routes} from "react-router";

import Test4 from "../pages/Test4.tsx";

function MyRouting() {
    return (
        <Routes>

            <Route path="/" element={<Test4 />} />
            {/*<Route path="/" element={<Layout />} >*/}
            {/*    <Route index element={<Home />} />*/}
            {/*/!*<Route path="/products" element={<Products />} />*!/*/}

            {/*/!*<Route path="/test" element={<Layout />}>*!/*/}
            {/*/!*    <Route index element={<Home />} />*!/*/}

            {/*/!*</Route>*!/*/}
            {/*</Route>*/}

        </Routes>
        )
}
export default MyRouting;