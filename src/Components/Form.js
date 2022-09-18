import {useState} from "react"
import Item from './Item'
import {v4 as uuidv4} from 'uuid'

export default function Form() {
    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Faire les courses", id: uuidv4()},
        {txt: "Apprendre Swift", id: uuidv4()},
    ])
    const [stateInput, setStateInput] = useState()

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filteredState)
    }

    const addTodo = e => {
        e.preventDefault(e)
        const newArr = [...dataArr]

        const newTodo = {}
        newTodo.txt = stateInput
        newTodo.id = uuidv4()

        newArr.push(newTodo)
        setDataArr(newArr)
        setStateInput('')
    }

    const linkedInput = e => {
        setStateInput(e)
    }

    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={addTodo} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Choses à faire</label>
                <input 
                onInput={e => linkedInput(e.target.value)}
                type="text" 
                className="form-control" 
                id="todo" />

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return(
                        <Item 
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )
}