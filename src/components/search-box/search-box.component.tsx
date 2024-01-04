import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    type?: 'search'
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ className, placeholder, type, onChangeHandler }: SearchBoxProps) => (
        <input
            className={`search-box ${className}`}
            type={ type }
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );

export default SearchBox;