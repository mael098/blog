"use client";
import {deliteTask} from'./actions'

export default function ButtonDelite({task}:any) {
    return (
        <div>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={()=> deliteTask(task.id)}
            >
                Delite
            </button>
        </div>
    );
}
