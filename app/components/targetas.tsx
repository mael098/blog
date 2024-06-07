import { cliente, e } from '@/lib//edgedb'
import ButtonDelite from '../buttonDelite';

export default async function Targetas() {

    const selectTask = e.select(e.Task,() => ({
        id: true,
        title: true,
        description: true,
    }))

    const tasks = await selectTask.run(cliente)
    console.log(tasks);

    return (
        <>
        {tasks.map((tasks) => (
            <div key={tasks.id} className="w-96 bg-white p-8 rounded-2xl m-4">
                <h2 className="text-2xl font-semibold text-center">{tasks.title}</h2>
                <p className="text-sm">{tasks.description}</p>
                <div className="mt-4">
                    <ButtonDelite task={tasks}/>
                </div>
            </div>
        ))}
        </>

    )
}