import Sider from "antd/es/layout/Sider";
import { BrowserRouter, Link, Router, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Sidebar from "../component/Sider/Sidebar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";




// const Routers = createBrowserRouter(
//     createRoutesFromElements(

//         <Route path="/" element={<Home />} />,
//         <Route path="about" element={<About />} />,
//         <Route path="contact" element={<Contact />} />

//     )    



// );

const Routers = createBrowserRouter(
    // createRoutesFromElements(

    //     <Route path="/" element={<Home />} />,
    //     <Route path="about" element={<About />} />,
    //     <Route path="contact" element={<Contact />} />

    // )
    [
        {
            path: "/", element: (<Sidebar>< Home /></Sidebar>)
        }, {
            path: "about", element: (<Sidebar>< About /></Sidebar>)
        }, {
            path: "contact", element: (<Sidebar>< Contact /></Sidebar>)
        }





    ]
);

export default Routers;