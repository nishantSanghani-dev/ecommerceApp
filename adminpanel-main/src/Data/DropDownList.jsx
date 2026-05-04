
import { RiDashboard2Fill } from "react-icons/ri";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineInvertColors } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { FaSliders } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FcFaq } from "react-icons/fc";
import { SlNotebook } from "react-icons/sl";

export let dropDownData = [
    {
        id: 1,
        title: "User",
        icon: <FaUser className="text-black text-2xl" />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "View User",
        link1:'/user/view'
    },
    {
        id: 2,
        title: "Enquirys",
        icon: <IoChatbox className="text-black text-2xl" />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Contact Enquirys",
        innerTitle2: "Newsletters",
        link1:'/contact/enquiry',
        link2:'/contact/newsletter'
    },
    {
        id: 3,
        title: "Colors",
        icon: <MdOutlineInvertColors className='text-2xl text-gray-600'/>,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Color",
        innerTitle2: "View Color",
        link1:'/color/add',
        link2:'/color/view'
    },
    {
        id: 4,
        title: "Materials",
        icon: <FaExpandArrowsAlt className=' text-gray-600' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Materials",
        innerTitle2: "View Materials",
        link1:'/materials/add',
        link2:'/materials/view'
    },
    {
        id: 5,
        title: "Parent Categories",
        icon:  <RiMenu3Fill className=' text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Category",
        innerTitle2: "View Category",
        link1:'/category/add',
        link2:'/category/view'
    },
    {
        id: 6,
        title: "Sub Categories",
        icon: <RiMenu3Fill className=' text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Sub Category",
        innerTitle2: "View Sub Category",
        link1:'/subCategory/add',
        link2:'/subCategory/view'
    },
    {
        id: 7,
        title: "Sub Sub Categories",
        icon: <RiMenu3Fill className=' text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Sub Sub Category",
        innerTitle2: "View Sub Sub Category",
        link1:'/subSubCategory/add',
        link2:'/subSubCategory/view'
    },
    {
        id: 8,
        title: "Products",
        icon: <FaShoppingBag className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Products",
        innerTitle2: "View Products",
        link1:'/products/add',
        link2:'/products/view'
    },
    {
        id: 9,
        title: "Why Choose us",
        icon: <FaClockRotateLeft className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Why Choose",
        innerTitle2: "View Why Choose",
        link1:'/whyChoose/add',
        link2:'/whyChoose/view'
    },
    {
        id: 10,
        title: "Orders",
        icon: <LuNotebookPen className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Orders",
        link1:'/orders/view',
    },
    {
        id: 11,
        title: "Sliders",
        icon: <FaSliders className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Slider",
        innerTitle2: "View Slider",
        link1:'/slider/add',
        link2:'/slider/view',
    },
    {
        id: 12,
        title: "Country",
        icon: <FaPaperPlane className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Coutry",
        innerTitle2: "View Coutry",
        link1:'/country/add',
        link2:'/country/view'
    },
    {
        id: 13,
        title: "Testimonials",
        icon: <RiContactsFill className=' text-[20px] text-gray-600 text-2xl' />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Testimonials",
        innerTitle2: "View Testimonials",
        link1:'/testimonials/add',
        link2:'/testimonials/view'
    },
    {
        id: 14,
        title: "Faqs",
        icon: <FcFaq  />,
        innerIcon: < FaRegDotCircle/>,
        innerTitle: "Add Faq",
        innerTitle2: "View Faq",
        link1:'/faqs/add',
        link2:'/faqs/view'
    },
    {
        id: 15,
        title: "Terms & Conditions",
        icon: <SlNotebook className=' text-[20px] text-gray-600 text-2xl' />
      
    
    },

]