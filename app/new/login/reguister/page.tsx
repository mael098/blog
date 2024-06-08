import { e, cliente } from '@/lib/edgedb'
import { redirect } from 'next/navigation'

export default function Reguister() {

    async function reguisterUser(formData: FormData) {
        'use server'
        const name = formData.get('name') as string
        const password = formData.get('password') as string
        const email = formData.get('email') as string
        console.log({ name, password, email});

        const inserUser = e.insert(e.User, {
            name,
            password,
            email,
        })
        await inserUser.run(cliente)
        redirect('/')
    }
    return (
        <div className="h-screen w-full bg-slate-950">
            <form action={reguisterUser}>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-4xl text-white">Task Manager</h1>
                    <h2 className="text-2xl text-white">Reguister</h2>
                    <input type="email" name="email" placeholder="Email" className="bg-slate-900 text-white p-2 m-2 rounded-md" />
                    <input type="text" name="name" placeholder="Username" className="bg-slate-900 text-white p-2 m-2 rounded-md" />
                    <input type="password" name="password" placeholder="Password" className="bg-slate-900 text-white p-2 m-2 rounded-md" />
                    <input type="password" name="password" placeholder="Password" className="bg-slate-900 text-white p-2 m-2 rounded-md" />
                    <button className="bg-slate-800 text-white p-2 m-2 rounded-md ">reguistro</button>
                </div>
            </form>
        </div>
    )
}