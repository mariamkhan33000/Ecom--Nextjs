"use client"
import Image from "next/image";
import HeaderButtom from './HeaderButtom'
import amazoneLogo from "../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Header = () => {
  const [query, setQuery] = useState<string>("")
  const router = useRouter()
  const seacrhHandler = () => {
    router.push(`/search/${query}`)
  }
  return (
    <>
    <div className="bg-[#131921] text-white py-1">
      <div className="flex items-center justify-between mx-auto w-[95%]">
        <div className="w-[10%]">
          <Image src={amazoneLogo} alt="logo" width={150} height={150} />
        </div>
        <div className="w-[60%] flex items-center">
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full px-2 p-2 rounded-l-md text-black outline-none" type="text" placeholder="Search Amazone" />
          <div onClick={seacrhHandler} className="bg-[#FEB069] p-2 rounded-r-md cursor-pointer"> 
          <CgSearch size={24}/>
          </div>
        </div>
        <div className="flex items-center justify-around w-[20%]">
          <div className="cursor-pointer hover:scale-105 duration-200 hover:border border-transparent hover:border-white p-2">
            <h1 className="text-sm">Hello, Mohsin</h1>
            <h1 className="font-medium text-sm">Account Lists</h1>
          </div>
          <div className="cursor-pointer hover:scale-105 duration-200 hover:border border-transparent hover:border-white p-2">
            <p className="text-sm">Returns</p>
            <h1 className="font-medium text-sm">& Oreders</h1>
          </div>
          <div className="cursor-pointer hover:scale-105 duration-200 hover:border border-transparent hover:border-white p-2">
            <p className="relative top-3 left-5">0</p>
            <div className="flex items-center">
              <div>
                <BiCart size={"40px"} />
              </div>
              <h1 className="mt-4">Carts</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HeaderButtom/>
    </>
  );
};

export default Header;
