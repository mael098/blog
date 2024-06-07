import { cliente, e } from '@/lib//edgedb'

export default async function Targetas() {
    const selectTask = e.select(e.Task, () => ({
        id: true,
        title: true,
        description: true,
    }))
    const tasks = await selectTask.run(cliente)
    return (
        <>
            {
                tasks.map((task) => (
                    <div key={task.id} className="bg-gray-100 m-2 p-2 justify-center justify-items-center">
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                    </div>
                ))
            }
        </>

    )
}