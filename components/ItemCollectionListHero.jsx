import React from "react"

const ItemColectionListHero = ({ nameCollection }) => {
  return (
    <li className="flex gap-2">
      <div className="icon">
        <img src="/icon-check.svg" alt="" />
      </div>
      {nameCollection}
    </li>
  )
}

export default ItemColectionListHero
