import back from "../../../../assets/previous.svg";
import Logo from "../../../../assets/LG_unnis_green.svg";
import search from "../../../../assets/search.svg";
import SkinCare from "../../../../assets/Skincare.png";
import Suncare from "../../../../assets/Suncare.png";
import Body from "../../../../assets/Body.png";
import Cleansing from "../../../../assets/Cleansing.png";
import Face from "../../../../assets/Face.png";
import Hair from "../../../../assets/Hair.png";
import Lip from "../../../../assets/Lip&Eye.png";
import Mask from "../../../../assets/Mask.png";
import UnnisIcon from "../../../../assets/UnnisPickIcon.svg";
import Tokopedia from "../../../../assets/tokopedia.svg";
import Shopee from "../../../../assets/shopee.svg";
import Istyle from "../../../../assets/istyle.svg";
import OliveYoung from "../../../../assets/OliveYoung.svg";
import Sociolla from "../../../../assets/Sociolla.svg";
import Star from "../../../../assets/Star.svg";
import Arrow from "../../../../assets/Polygon3.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListProduct, getProductCategory } from "../../../../Store/Actions/Actions";
import {
  BarLoader,
  CircleLoader,
  DotLoader,
  PacmanLoader,
  PuffLoader,
  RingLoader,
} from "react-spinners";
import { Link } from "react-router-dom";

function NewPage() {
  const productCategory = useSelector(
    (state) => state.ReducerProductCategory.productCategory
  );
// const listProduct = useSelector(
//   (state) => state.ReducerListProduct?.listProduct
// )

const loading = useSelector((state) => state.ReducerProductCategory.loading);


const dispatch = useDispatch();
useEffect(() => {
  dispatch(getProductCategory());
  // dispatch(getListProduct())
}, []);

// console.log(listProduct, "<<< ini list product");
  const category = [
    {
      name: "SkinCare",
      icon: SkinCare,
    },
    {
      name: "Cleansing",
      icon: Cleansing,
    },
    {
      name: "Mask",
      icon: Mask,
    },
    {
      name: "Suncare",
      icon: Suncare,
    },
    {
      name: "Face",
      icon: Face,
    },
    {
      name: "Lip&Eye",
      icon: Lip,
    },
    {
      name: "Body",
      icon: Body,
    },
    {
      name: "Hair",
      icon: Hair,
    },
  ];

  const modal = productCategory?.data ? Object.keys(productCategory?.data) : [];
  function CategoryProduct() {
    return (
      <>
        {category.map((el) => {
          return (
            <div
              className="bg-[#DEE2E6] rounded-lg py-1 px-2 text-center justify-center items-center gap-4 w-[100%]"
              style={{ textAlign: "-webkit-center" }}
            >
              <img src={el.icon} className="w-8 h-8" />
              <div className="text-center ">
                <p>{el.name}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function DisplayProduct() {
    const text = "Hydrating ginger water foam lorem ipsum";
    const truncatedText = text.length > 30 ? `${text.slice(0, 30)}...` : text;
    return (
      <>
        <div className="flex justify-between items-center">
          <div className="text-center items-center justify-center w-[20%]">
            <h1>1</h1>
          </div>
          <div className="w-[20%]">
            <img src={SkinCare} className="w-15 h-15" />
          </div>
          <div className="justify-between w-[80%]">
            <div className="flex items-center text-[#ADB5BD]">
              <h1 className="text-xs">GINGER6 </h1>
              <div className="items-center pl-2">
                <a href="#">
                  <img src={Arrow} className="w-2 h-2" />
                </a>
              </div>
            </div>
            <div className="py-2">
              <p className="text-sm">{truncatedText}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <img src={Tokopedia} className="w-5 h-5 rounded-full" />
                <img src={Shopee} className="w-5 h-5 rounded-full" />
                <img src={UnnisIcon} className="w-5 h-5 rounded-full" />
                <img src={Sociolla} className="w-5 h-5 rounded-full" />
                <img src={Istyle} className="w-5 h-5 rounded-full" />
                <img src={OliveYoung} className="w-5 h-5 rounded-full" />
              </div>
              <div className="flex items-center pl-5">
                <img src={Star} className="w-5 h-5 rounded-full" />
                <div className="pl-0.5">
                  <h1 className="text-xs">4.88 33</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border mt-2"></div>
      </>
    );
  }
  return (
    <>
      <div className="absolute top-0 w-full bg-white px-5">
        <div className="text-[#343A40] bg-white pb-3 z-20 ">
          <div className="flex justify-between sticky ">
            <div className="self-center">
              <Link to={"/"}>
                <img src={back} className="w-full" />
              </Link>
            </div>
            <div className="self-center">
              <img src={Logo} className="w-full" />
            </div>
            <div className="self-center">
              <img src={search} className="w-full" />
            </div>
          </div>
          <div className="flex justify-center">
            {loading ? (
              <RingLoader color="#0000ff" size={30} />
            ) : (
              <div className="flex px-2 shadow overflow-x-auto py-3 gap-3 max-w-screen">
                <CategoryProduct />
              </div>
            )}
          </div>
          <div className="flex justify-between pt-5 px-2">
            <div className="border rounded p-1">
              <h1>All</h1>
            </div>
            <div className="border rounded p-1">
              <h1>Sort by</h1>
            </div>
          </div>
        </div>
        <DisplayProduct />
      </div>
    </>
  );
}

export default NewPage;