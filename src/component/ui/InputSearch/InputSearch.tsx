import {FC, useState} from "react";
import './InputSearch.css';

interface InputProps {
    setValueProducts: (value: string) => void,
}

const InputSearch: FC<InputProps>= ({setValueProducts}) => {

    const [value, setValue] = useState('');

    return (
        <div className="input-search-wrapper">
            <input
                type="text"
                className="input-search"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                } }
            />
            <button
                className="button-search"
                onClick={(e) => setValueProducts(value)}
            >ПОИСК
            </button>
        </div>
    )
}

export default InputSearch;