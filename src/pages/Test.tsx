import React from "react";
import { API_URL } from "../config.ts";

function RegisterUser() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // აჩერებს გვერდის რეფრეშს

        // 1. აუცილებლად შეინახე ფორმა ცალკე ცვლადში fetch-მდე!
        const form = e.currentTarget;

        const data = new FormData(form);
        const userName = data.get("user");
        const password = data.get("pass");

        const formData = { userName, password };

        try {
            const response = await fetch(`${API_URL}/users`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const resData = await response.json();
            console.log("სერვერის პასუხი:", resData);

            if (response.ok) {
                // 2. გამოიყენე შენახული ცვლადი და აღარ დარეფრეშდება
                form.reset();
            }

        } catch (error) {
            console.error("შეცდომა:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-64 p-4">
            <input
                type="text"
                name="user"
                placeholder="მომხმარებელი"
                className="border p-2 rounded"
                required
            />
            <input
                type="password"
                name="pass"
                placeholder="პაროლი"
                className="border p-2 rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                გაგზავნა
            </button>
        </form>
    );
}

export default RegisterUser;
