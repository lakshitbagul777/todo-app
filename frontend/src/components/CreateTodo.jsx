import { useState } from "react"


export function CreateTodo()
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
        }} onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                alert('Todo added!');
            })
        }}>Add a todo</button>
    </div>
}