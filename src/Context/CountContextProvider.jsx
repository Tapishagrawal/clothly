import { createContext, useState } from "react";
import { getDataFromLocal } from "../redux/localReducer/action";

export const CountContext = createContext();

export default function CountContextProvider({ children }) {
    const [cartCount, setCartCount] = useState(getDataFromLocal("cartData").length || null)
    const [wishListCount, setWishListCount] = useState(getDataFromLocal("wishListData").length || null)
    return (
        <CountContext.Provider value={{ cartCount, setCartCount, wishListCount, setWishListCount }}>
            <div>
                {children}
            </div>
        </CountContext.Provider>
    )
}

