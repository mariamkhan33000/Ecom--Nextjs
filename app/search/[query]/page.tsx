"use client"

import { useSuperbase } from '@/lib/hooks/useSuperbase'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const {query} = useParams()
    const {filterData, getFiltedData} = useSuperbase();

    useEffect(()=> {
        getFiltedData(query.toString())
    },[]);
    console.log(filterData)
  return (
    <div>{query}</div>
  )
}

export default page