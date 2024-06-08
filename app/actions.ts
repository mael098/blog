'use server'
import {e,cliente} from '@/lib/edgedb'
import { redirect } from 'next/navigation'
export async function deliteTask(id: string){
    const deleteTask =  e.delete(e.Task, task => ({
        filter_single: { id: id }
    }))

    await deleteTask.run(cliente)
    redirect('/')
}
