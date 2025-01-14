import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const HeaderButtom = () => {
    const item =  [
        
      "All",
      "Today's Deals",
      "Customer Service",
      "Registry",
      "Gift Cards",
      "Sell"
    ]
  return (
    <div className='bg-[#232F3E]'>
        <div className='flex items-center gap-5 ml-5'>
        <GiHamburgerMenu size={20} className='cursor-pointer'/>
        {
           item.map((link, index) => {
            return (
                <Link key={index} href={`/${link}`} className='mx-2 cursor-pointer p-2 hover:border border-transparent hover:border-white'>{link}</Link>
            )
           })
        }
        </div>
    </div>
  )
}

export default HeaderButtom