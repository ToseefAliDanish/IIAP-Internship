import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Logout from "@/app/components/logout";

<Logout />
export default async function Dashboard() {

    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    return (

        <div className="p-10">

            <h1 className="text-3xl">
                Welcome to Dashboard
            </h1>

            <p>{session.user.name}</p>

            <p>{session.user.email}</p>

        </div>

    );

}