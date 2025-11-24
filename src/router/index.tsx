import { lazy } from "react";

export const Index = [
    {
        title:"Home",
        path:"/",
        icon:"",
        element: lazy(()=>import("../page/public/home/home"))
    },
    {
        title:"About",
        path:"/about",
        icon:"",
        element:lazy(()=>import("../page/public/about/about"))
    },
    {
        title:"Login",
        path:"/login",
        icon:"",
        element:lazy(()=>import("../page/public/about/about"))
    },
    
]