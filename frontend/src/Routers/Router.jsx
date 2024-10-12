import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Pages/Header/Navbar";
import NoPage from "../Pages/Center/NoPage";
import Center from "../Pages/Center/Center";
import Layout from "../Pages/component/Layout";

const Router = () => {
    return (
        <div className="">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Center />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;