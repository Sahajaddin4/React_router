import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
     const data=useLoaderData()   //Another Optimize way than using UseEffect by using loader implementation
    // const [data,setData]=useState({});
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Sahajaddin4")
    //     .then(response=>response.json()).then(
    //         data=>setData(data)
    //     )
    // },[])


  return (
    <div className='bg-gray-700  flex justify-center p-4 m-4'>
        <img className='rounded-full m-4' src={data['avatar_url']} alt="Git Picture" width='300px' />
        <h1 className='relative top-36 text-3xl  text-white '>Github Followers:{data['followers']}</h1>
        
    </div>
  )
}

export default Github;


export  async function GithubInfo()
{
    const response= await fetch('https://api.github.com/users/Sahajaddin4');
    return response.json();
}