import { e, cliente } from '@/lib/edgedb'
import { redirect } from 'next/navigation'

export default function Newform() {

async function createTask(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const completed = formData.get('completed') === 'on'
    console.log({ title, description, completed });

    const insertTask = e.insert(e.Task, {
        title,
        description,
        completed
    })
    await insertTask.run(cliente)
    redirect('/')
}

return (
    <div className="w-screen h-screen bg-slate-600 text-black">
        <form action={createTask}>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="w-96 bg-white p-8 rounded-2xl">
                    <h2 className="text-2xl font-semibold text-center">Create a new task</h2>
                    <div className="mt-4">
                        <label htmlFor="title" className="text-sm">Title</label>
                        <input type="text" name="title" className="w-full mt-1 p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="description" className="text-sm">Description</label>
                        <textarea name="description" className="w-full mt-1 p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full bg-slate-700 text-white p-2 rounded-lg">Create</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
)}