import { e, cliente } from "@/lib/edgedb"
import { redirect } from "next/navigation";

export  default async function Login(){

        const listUser = e.select(e.User,() => ({
            name: true,
            password: true,
            email: true,
            Task: true
        }))
        const result = await listUser.run(cliente)
        console.log(result);
        return (
            <div className="h-screen w-full bg-slate-950">
                <form >
                    <div className="flex flex-col items-center justify-center h-screen">
                        <h1 className="text-4xl text-white">Task Manager</h1>
                        <input type="text" name="Username" placeholder="Username" className="bg-slate-900 text-white p-2 m-2 rounded-md" />
                        <input type="password" name="Password" placeholder="Password" className="bg-slate-900 text-white p-2 m-2 rounded-md" />
                        <button className="bg-slate-800 text-white p-2 m-2 rounded-md">Login</button>
                    </div>
                </form>
            </div>
        )
    }