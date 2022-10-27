import React from 'react';
import { MdOutlineCheckCircle } from 'react-icons/md';

export function TodoTask({ index, todo, deleteTask }) {
	return <div className='flex justify-between w-3/4 mt-4 bg-[#4f4f4f] sm:w-2/3 lg:w-1/3'>
		<span className='text-left px-3 py-2'>{todo.task}</span>
		<button className='px-3 py-2 bg-[#e73422] duration-150 hover:bg-[#b01e15]' onClick={() => deleteTask(index)}><MdOutlineCheckCircle /></button>
	</div>
}