"use client"
import { useState } from "react"
import { superbase } from "../superbase/products"

export const useSuperbase = () => {
    const [products, setProducts] = useState<any>([])
    const [filterData, setFilterData] = useState<any>([])

    const getDataFromSuperbase = async () => {
        let {data, error} = await superbase.from('product').select("*");
    if(data) {
        setProducts(data)
        console.log(data)
    }
    if(error) {
        console.log(error)
    } 
    }

    const getFiltedData = async (query:string) => {
        let {data, error} = await superbase.from('product').select("*").or(`title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}% `);
    if(data) {
        setProducts(data)
        console.log(data)
    }
    if(error) {
        console.log(error)
    } 
    }
    return {
        products,
        filterData,
         getDataFromSuperbase,
        getFiltedData
        }
    
}