import { useState } from "react"


export function CreateTodo({setTodos})
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={(e)=>{
            setTitle(e.target.value);
        }}/> <br />
        
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={(e)=>{
            setDescription(e.target.value);
        }}/> <br />
        
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={
            ()=>{
            const todo = {
                title: title,
                description: description
            }

            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify(todo),
                headers: {
                    "content-type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                alert('Todo added!');
                setTodos((prevTodos)=>[...prevTodos, todo]);
            })
        }}>Add a todo</button>
    </div>
}