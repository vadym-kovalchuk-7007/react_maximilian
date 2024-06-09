import { useState } from "react";

export function useInput(defaultValue) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false)

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        console.log(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() { setDidEdit(true); console.log('edited'); }

    return { value: enteredValue, handleInputBlur, handleInputChange, didEdit }

}