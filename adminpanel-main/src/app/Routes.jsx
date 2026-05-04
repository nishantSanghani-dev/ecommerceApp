import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import ViewUser from "../Pages/users/pages/ViewUser";
import Contactenquiry from "../Pages/enquiry/pages/Contactenquiry";
import Newslatter from "../Pages/enquiry/pages/Newslatter";
import Addcolor from "../Pages/color/pages/Addcolor";
import Viewcolor from "../Pages/color/pages/Viewcolor";
import Addmaterials from "../Pages/materials/pages/Addmaterials";
import Viewmaterials from "../Pages/materials/pages/Viewmaterials";
import Addcategory from "../Pages/category/pages/Addcategory";
import Viewcategory from "../Pages/category/pages/Viewcategory";
import AddSubCategory from "../Pages/subCategory/pages/AddSubCategory";
import Views_sub_category from "../Pages/subCategory/pages/Views_sub_category";
import AddSubSubCategory from "../Pages/subSubCategory/pages/AddSubSubCategory";
import ViewSubSubCategory from "../Pages/subSubCategory/pages/ViewSubSubCategory";
import AddProduct from "../Pages/products/pages/AddProduct";
import ViewProduct from "../Pages/products/pages/ViewProduct";
import AddWhyChhose from "../Pages/whyChoose/pages/AddWhyChhose";
import ViewWhyChoose from "../Pages/whyChoose/pages/ViewWhyChoose";
import Order from "../Pages/orders/pages/Order";
import AddSlider from "../Pages/sliders/pages/AddSlider";
import ViewSlider from "../Pages/sliders/pages/ViewSlider";
import AddCounntry from "../Pages/country/pages/AddCounntry";
import ViewCountry from "../Pages/country/pages/ViewCountry";
import AddTestimonials from "../Pages/testimonials/pages/AddTestimonials";
import ViewTestimonials from "../Pages/testimonials/pages/ViewTestimonials";
import AddFaq from "../Pages/faq/pages/AddFaq";
import ViewFaq from "../Pages/faq/pages/ViewFaq";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "user",
                children: [
                    {
                        path: "view",
                        element: <ViewUser />
                    }
                ]
            },
            {
                path: "contact",
                children: [
                    {
                        path: "enquiry",
                        element: <Contactenquiry />
                    },
                    {
                        path: "newsletter",
                        element: <Newslatter />
                    }
                ]
            },
            {
                path: "color",
                children: [
                    {
                        path: "add",
                        element: <Addcolor />
                    },
                    {
                        path: "view",
                        element: <Viewcolor />
                    }
                ]
            },
            {
                path: "materials",
                children: [
                    {
                        path: "add",
                        element: <Addmaterials />
                    },
                    {
                        path: "view",
                        element: <Viewmaterials />
                    }
                ]
            },

            {
                path: "category",
                children: [
                    {
                        path: "add",
                        element: <Addcategory />
                    },
                    {
                        path: "view",
                        element: <Viewcategory />
                    }
                ]
            },

            {
                path: "subCategory",
                children: [
                    {
                        path: "add",
                        element: <AddSubCategory />
                    },
                    {
                        path: "view",
                        element: <Views_sub_category />
                    }
                ]
            },
            {
                path: "subSubCategory",
                children: [
                    {
                        path: "add",
                        element: <AddSubSubCategory />
                    },
                    {
                        path: "view",
                        element: <ViewSubSubCategory />
                    }
                ]
            },
            {
                path: "products",
                children: [
                    {
                        path: "add",
                        element: <AddProduct />
                    },
                    {
                        path: "view",
                        element: <ViewProduct />
                    }
                ]
            },
            {
                path: "whyChoose",
                children: [
                    {
                        path: "add",
                        element: <AddWhyChhose />
                    },
                    {
                        path: "view",
                        element: <ViewWhyChoose />
                    }
                ]
            },
            {
                path: "orders",
                children: [
                    {
                        path: "view",
                        element: <Order />
                    }
                ]
            },
            {
                path: "slider",
                children: [
                    {
                        path: "add",
                        element: <AddSlider />
                    },
                    {
                        path: "view",
                        element: <ViewSlider />
                    }
                ]
            },
            {
                path: "country",
                children: [
                    {
                        path: "add",
                        element: <AddCounntry />
                    },
                    {
                        path: "view",
                        element: <ViewCountry />
                    }
                ]
            },
            {
                path: "testimonials",
                children: [
                    {
                        path: "add",
                        element: <AddTestimonials />
                    },
                    {
                        path: "view",
                        element: <ViewTestimonials />
                    }
                ]
            },
            {
                path: "faqs",
                children: [
                    {
                        path: "add",
                        element: <AddFaq />
                    },
                    {
                        path: "add/:id",
                        element: <AddFaq />   // ➜ edit mode
                    },
                    {
                        path: "view",
                        element: <ViewFaq />
                    }
                ]
            }
        ]
    }
])