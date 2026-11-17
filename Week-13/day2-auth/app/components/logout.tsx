"use client";

import { signOut } from "next-auth/react";

export default function Logout() {

    return (

        <button
            onClick={() => signOut({
                redirectTo: "/login"
            })}
            className="bg-red-600 text-white p-3"
        >
            Logout
        </button>

    );

}