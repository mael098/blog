export default function Login() {
    return(
        <div className="h-screen w-full bg-slate-950">
            <form action="" >
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-4xl text-white">Task Manager</h1>
                    <input type="text" placeholder="Username" className="bg-slate-900 text-white p-2 m-2 rounded-md"/>
                    <input type="password" placeholder="Password" className="bg-slate-900 text-white p-2 m-2 rounded-md"/>
                    <button className="bg-slate-800 text-white p-2 m-2 rounded-md">Login</button>
                </div>
            </form>
        </div>
    )
}