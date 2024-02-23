import { useState, useEffect } from 'react';
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

const CartItem = ({ item }) => {
    const { removeItem, incrementItem, decrementItem, setItemQuantity } = useShoppingCart();
    const [quantityInput, setQuantityInput] = useState(item.quantity.toString());

    useEffect(() => {
        setQuantityInput(item.quantity.toString());
    }, [item.quantity]);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (!isNaN(newQuantity)) {
            setQuantityInput(newQuantity.toString());
            setItemQuantity(item.id, newQuantity);
        }
    };

    return (
        <div className="flex w-full justify-between mb-4 items-center h-[80px] border-b">
            {/* Image */}
            <div className="w-[80px] h-[80px] relative mr-4">
                {item.images && item.images[0] && (
                    <Image
                        src={urlFor(item.images[0]).url()}
                        fill
                        priority
                        sizes="(max-width: 100px) 80px, 80px"
                        className="object-contain"
                        alt="Logo Produto"
                    />
                )}
            </div>
            {/* nome, preço, quantidade, remover */}
            <div className="flex flex-col justify-center gap-2">
                <div className="flex items-center justify-between">
                    <h5>{item.name}</h5>
                </div>
                {/* +, -, item */}
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <button onClick={() => decrementItem(item.id)}>
                            <FaMinus className="text-[10px]" />
                        </button>
                        <input
                            type="text"
                            value={quantityInput}
                            onChange={handleQuantityChange}
                            className="w-10 text-center text-sm"
                        />
                        <button onClick={() => incrementItem(item.id)}>
                            <FaPlus className="text-[10px]" />
                        </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="ml-auto">
                        <FaX className="text-sm" />
                    </button>
                    {/* <div className="font-semibold text-balance text-right">R$ {item.price * item.quantity}</div> */}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
