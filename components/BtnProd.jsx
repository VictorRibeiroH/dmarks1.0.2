import Link from "next/link"
import React from "react"

const BtnProd = () => {
  return (
    <Link href="/produtos" className="max-w-[230px] mx-auto lg:mx-0 flex ">
      <div className="btn btn-accent mt-4 rounded-full max-w-[230px]">
        <button>Confira nossos produtos!</button>
      </div>
    </Link>
  )
}

export default BtnProd
