import { createContext, useState } from "react";
import { getDataFromLocal } from "../redux/localReducer/action";

export const CountContext = createContext();

export default function CountContextProvider({ children }) {
    const [cartCount, setCartCount] = useState(0); // Initialize with 0
    const [wishListCount, setWishListCount] = useState(0); // Initialize with 0

    useEffect(() => {
        const cartData = getDataFromLocal("cartData");
        if (cartData) {
            setCartCount(cartData.length);
        }

        const wishListData = getDataFromLocal("wishListData");
        if (wishListData) {
            setWishListCount(wishListData.length);
        }
    }, []);
    return (
        <CountContext.Provider value={{ cartCount, setCartCount, wishListCount, setWishListCount }}>
            <div>
                {children}
            </div>
        </CountContext.Provider>
    )
}

