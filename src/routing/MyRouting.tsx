import {Route, Routes} from "react-router";

import AuthForm from "../components/AuthForm.tsx";

function MyRouting() {
    return (
        <Routes>

            <Route path="/" element={<AuthForm />} />
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