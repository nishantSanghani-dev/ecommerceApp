import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'dropify/dist/css/dropify.min.css';
import 'dropify/dist/js/dropify.min.js';
import $ from 'jquery';
import Dashboard from './Pages/Dashboard.jsx'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import MainLayout from './Common/MainLayout.jsx'
import Home from './Pages/Home.jsx'


import Contactenquiry from './Pages/enquiry/pages/Contactenquiry.jsx'
import Newslatter from './Pages/enquiry/pages/Newslatter.jsx'
import Addcolor from './Pages/color/pages/Addcolor.jsx'
import Viewcolor from './Pages/color/pages/Viewcolor.jsx'
import Addmaterials from './Pages/materials/pages/Addmaterials.jsx'
import Viewmaterials from './Pages/materials/pages/Viewmaterials.jsx'
import Viewcategory from './Pages/category/pages/Viewcategory.jsx'
import Views_sub_category from './Pages/subCategory/pages/Views_sub_category.jsx'
import ViewSubSubCategory from './Pages/subSubCategory/pages/ViewSubSubCategory.jsx'
import ViewProduct from './Pages/products/pages/ViewProduct.jsx';

import ViewWhyChoose from './Pages/whyChoose/pages/ViewWhyChoose.jsx';
import Order from './Pages/orders/pages/Order.jsx';

import ViewSlider from './Pages/sliders/pages/ViewSlider.jsx';
import AddCounntry from './Pages/country/pages/AddCounntry.jsx';
import ViewCountry from './Pages/country/pages/ViewCountry.jsx';

import ViewTestimonials from './Pages/testimonials/pages/ViewTestimonials.jsx';
import AddFaq from './Pages/faq/pages/AddFaq.jsx';
import ViewFaq from './Pages/faq/pages/ViewFaq.jsx';
import Profile from './Pages/Profile.jsx';

import Addcategory from './Pages/category/pages/Addcategory.jsx';
import AddSubCategory from './Pages/subCategory/pages/AddSubCategory.jsx';
import AddSubSubCategory from './Pages/subSubCategory/pages/AddSubSubCategory.jsx';
import AddProduct from './Pages/products/pages/AddProduct.jsx';
import AddWhyChhose from './Pages/whyChoose/pages/AddWhyChhose.jsx';
import AddSlider from './Pages/sliders/pages/AddSlider.jsx';
import AddTestimonials from './Pages/testimonials/pages/AddTestimonials.jsx';
import ViewUser from './Pages/users/pages/ViewUser.jsx';
import CompnayProfile from './Pages/companyProfiles/pages/CompnayProfile.jsx';
import { routes } from './app/Routes.jsx';

createRoot(document.getElementById('root')).render(

  <RouterProvider router={routes}/>


  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Home />}>
  //       <Route path='/dashboard' element={<Dashboard />} />
  //       <Route path='/contact-enquiry' element={<Contactenquiry />} />
  //       <Route path='/viewuser' element={<ViewUser />} />
  //       <Route path='/newslatter' element={<Newslatter />} />
  //       <Route path='/addcolor' element={<Addcolor />} />
  //       <Route path='/viewcolor' element={<Viewcolor />} />
  //       <Route path='/addmaterial' element={<Addmaterials />} />
  //       <Route path='/viewmaterial' element={<Viewmaterials />} />
  //       <Route path='/addcategory' element={<Addcategory />} />
  //       <Route path='/viewcategory' element={<Viewcategory />} />
  //       <Route path='/addsubcategory' element={<AddSubCategory />} />
  //       <Route path='/viewsubcategory' element={<Views_sub_category />} />
  //       <Route path='/addsubsubcategory' element={<AddSubSubCategory />} />
  //       <Route path='/viewsubsubcategory' element={<ViewSubSubCategory />} />
  //       <Route path='/addproduct' element={<AddProduct />} />
  //       <Route path='/viewproduct' element={<ViewProduct />} />
  //       <Route path='/add-whychoose' element={<AddWhyChhose />} />
  //       <Route path='/view-whychoose' element={<ViewWhyChoose />} />
  //       <Route path='/orders' element={<Order />} />
  //       <Route path='/Slider/add' element={<AddSlider />} />
  //       <Route path='/Slider/view' element={<ViewSlider />} />
  //       <Route path='/Country/add' element={<AddCounntry />} />
  //       <Route path='/Country/view' element={<ViewCountry />} />
  //       <Route path='/Testimonials/add' element={<AddTestimonials />} />
  //       <Route path='/Testimonials/view' element={<ViewTestimonials />} />
  //       <Route path='/Faq/add' element={<AddFaq />} />
  //       <Route path='/Faq/view' element={<ViewFaq />} />
  //       <Route path='/profile' element={<Profile />} />
  //       <Route path='/company-profile' element={<CompnayProfile />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
)
