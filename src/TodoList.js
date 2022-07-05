import React from 'react'

export default function TodoList() {

    const handleSubmit = (e)=>{
        e.preventDefault();
        const code = e.target.code.value;
        console.log(code);
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="code" ></input>
            <button>Search</button>
        </form>
    </>
    
  )
}
