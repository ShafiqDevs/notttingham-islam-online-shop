import React from 'react'
import NavBar from '../components/NavBar'
import {useRouter} from 'next/router'

export default function Checkout() {

    const router = useRouter();
    const cartElements = JSON.parse(router.query.cartElements);



    console.log("line 15:",cartElements);

  return (
    <>
    <div>checkout</div>
    </>
  )
}

export async function getServerSideProps(){
    return{
        props:{}
    }
}
