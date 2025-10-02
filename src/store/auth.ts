import { create } from "zustand";

interface AuthState{
    authinicated: boolean;
    login: ()=> void;
    logout: ()=> void;
}

export const useAuth = create<AuthState>((set)=>({
    authinicated: false,
    login:()=>set({authinicated:true}),
    logout:()=>set({authinicated:false})
}))