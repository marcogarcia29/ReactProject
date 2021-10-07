import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
        })
    }

    return ( 
        <div className='create'>
            <h2>Nova anotação</h2>
            <form onSubmit={handleSubmit}>
                <label>Título da anotação:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}    
                />
                <label>Descrição:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Autor:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="marco">marco</option>
                </select>
                { !isPending && <button>Adicionar anotação</button>}
                { isPending && <button disabled>Adicionando anotação...</button>}
            </form>
        </div>
     );
}
 
export default Create;