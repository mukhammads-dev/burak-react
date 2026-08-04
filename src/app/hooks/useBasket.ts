import { useState } from "react";
import { CartItem } from "../../lib/types/search";

// Define
const useBasket = () => {
    // STEP 1: localStorage dan CartDatani olayapmiz
    const cartJson: string | null = localStorage.getItem("cartData");
    const currentCart = cartJson ? JSON.parse(cartJson) : [];
    // CartDatani useState ga tenglayapmiz: eng ohirgi bolgan datani olib kelish imkoniyatini yaratib beradi
    const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

    // methods
    // mahsulot qo'shish: oldin qoshilgan bolsa +quantity bolmasa yangi
    const onAdd = (input: CartItem) => {
        // STEP 1: savat ichida shu mahsulot bormi?
        const exist: any = cartItems.find(
            (item: CartItem) => item._id === input._id
        );

        if (exist) { // BOR → quantity + 1
            const cartUpdate = cartItems.map((item: CartItem) =>
                item._id === input._id
                    ? { ...exist, quantity: exist.quantity + 1 }
                    : item
            );

            setCartItems(cartUpdate);
            localStorage.setItem("cartData", JSON.stringify(cartUpdate));

        } else { // YO'Q → yangisini qo'shadi
            const cartUpdate = [...cartItems, { ...input }];

            setCartItems(cartUpdate);
            localStorage.setItem("cartData", JSON.stringify(cartUpdate));
        }
    };

    // miqdorni kamaytirish: - 1 bittaga ochirib beradi
    const onRemove = (input: CartItem) => {
        const exist: any = cartItems.find(
            (item: CartItem) => item._id === input._id
        );

        if (exist.quantity === 1) {
            // Miqdor 1 bo'lsa → savatdan o'chiradi
            const cartUpdate = cartItems.filter(
                (item: CartItem) => item._id !== input._id
            );
            setCartItems(cartUpdate);
            localStorage.setItem("cartData", JSON.stringify(cartUpdate));
        } else {
            // Miqdor 1 dan ko'p → quantity - 1
            const cartUpdate = cartItems.map((item: CartItem) =>
                item._id === input._id
                    ? { ...exist, quantity: exist.quantity - 1 }
                    : item
            );
            setCartItems(cartUpdate);
            localStorage.setItem("cartData", JSON.stringify(cartUpdate));
        }
    };

    // bitta mahsulotni o'chirish: x tugma bosilganda ochirb beradi
    const onDelete = (input: CartItem) => {
        // miqdoridan qat'iy nazar — savatdan o'chiradi
        const cartUpdate = cartItems.filter(
            (item: CartItem) => item._id !== input._id
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    };

    // hammasini o'chirish:
    const onDeleteAll = () => {
        setCartItems([]);
        localStorage.removeItem("cartData");
    };
    // tashqariga chiqarib beradi
    return {
        cartItems,
        onAdd,
        onRemove,
        onDelete,
        onDeleteAll,
    };
};


export default useBasket;