import React, { useState, createContext } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const store = {
        user,
        setUser
    };

    return (
        <UserContext.Provider value={store}>
            {children}
        </UserContext.Provider>
    );
}
