import { AuthContext } from "../contexts/auth";
import { Component, useContext } from "react";

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;