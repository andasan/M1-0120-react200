import React, {useRef} from 'react';

type NewToDoProps = {
    onAddTodo: (toDoText: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        // console.log(enteredText);
        props.onAddTodo(enteredText);
        textInputRef.current!.value = "";
    }

    return(
        <form onSubmit={todoSubmitHandler}>
            <label htmlFor="todo-text">Todo: </label>
            <input type="text" id="todo-text" ref={textInputRef} />
            <button type="submit">ADD TODO</button>
        </form>
    )
}


export default NewToDo;