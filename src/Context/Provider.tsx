import { useEffect } from 'react';
import { ShoppingContext } from './Context';

const initialState = {
    items: [],
    loading: true,
    error: false,
}

export const ShoppingProvider = ({ children }) => {

    const [state, dispatch] = useState(second);

    return (
        <ShoppingContext.Provider value={{}}>
                    { children }
        </ShoppingContext.Provider>
    )
}

