import {useContext, createContext} from 'react';

const AuthContextBlog =createContext();

export function AuthProviderBlog ({children, value}) {
    return <AuthContextBlog.Provider value={value}>{children}</AuthContextBlog.Provider>
}

export function useAuthValueBlog () {
    return useContext(AuthContextBlog);
}