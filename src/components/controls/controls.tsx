import { FormEventHandler, FC, useState } from "react"
import { CloseIcon, SearchIcon } from "../../assets/icons";
import './controls.scss'
export interface ISelectOption {
    label: string
    value: string
}
interface IProps {
    selectOptions: ISelectOption[]
    onSearch: FormEventHandler<HTMLInputElement>
    onReset: FormEventHandler<HTMLFormElement>
    onSelect: FormEventHandler<HTMLSelectElement>
}
export const Controls: FC<IProps> = ({ onSearch, onReset, onSelect, selectOptions }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isSelectVisible, setIsSelectVisible] = useState(false);
    return (
        <div>
            <form className="controls" onReset={onReset}>
                <div className={`control ${isSelectVisible ? "control_active" : ""}`}>
                    <button
                        type="reset"
                        className="controls__button"
                        onClick={() => {
                            setIsSelectVisible((p) => !p)
                            setIsSearchVisible(false)

                        }}
                    >
                        <CloseIcon />
                    </button>
                    <select
                        onChange={onSelect}
                        className={`controls__input ${isSelectVisible ? "controls__input_visible" : ""}`}
                        placeholder="Select"
                    >
                        {selectOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}

                    </select>

                </div>
                <div className={`control ${isSearchVisible ? "contorl_active" : ""}`}>
                    <input
                        className={`controls__input ${isSearchVisible ? "controls__input_visible" : ""}`}
                        type="text"
                        placeholder="Type to filter..."
                        onChange={onSearch}

                    />
                    <button
                        type="reset"
                        className="controls__button"
                        onClick={() => {
                            setIsSearchVisible((p) => !p)
                            setIsSelectVisible(false)

                        }}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </form>
        </div>
    )
};