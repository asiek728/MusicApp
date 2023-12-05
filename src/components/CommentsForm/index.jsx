import React, {useState} from 'react'

const CommentsForm = () => {

    const [inputText, setInputText] = useState('')
    const [submitValue, setSubmitValue] = useState('')

    const handleInput = (e) => {
        setInputText(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitValue(inputText)
    }
    return (
        <form>
            <input
                type="text"
                value={inputText}
                onChange={handleInput}
            />
            <button
                type="submit"
                onSubmit={handleSubmit}
            >Add</button>
        </form>
    )
}

export default CommentsForm
