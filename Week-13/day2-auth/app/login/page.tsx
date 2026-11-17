"use client";

import { signIn } from "next-auth/react";

export default function Login() {

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const result = await signIn("credentials", {

            email: form.get("email"),
            password: form.get("password"),
            redirect: false

        });

        if (result?.error) {
            alert("Invalid email or password");
        } else {
            window.location.href = "/dashboard";
        }

    }

    return (

        <div className="p-10 max-w-md mx-auto">

            <h1 className="text-2xl mb-5">Login</h1>

            <form onSubmit={handleLogin} className="space-y-4">

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="border p-3 w-full"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="border p-3 w-full"
                />

                <button className="bg-blue-600 text-white p-3 w-full">
                    Login
                </button>

            </form>

        </div>

    );

}