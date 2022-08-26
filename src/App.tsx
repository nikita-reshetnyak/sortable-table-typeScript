import  { FormEventHandler, useMemo, useState } from 'react';

import { randomData } from './commons/randomData';
import { Tree } from './components/tree/tree';
import { Controls, ISelectOption } from './components/controls/controls';
import { formatValue } from './commons/formatValue';





const App = () => {
  const [state, setState] = useState(randomData());
  const [filteredState, setFilteredState] = useState(state);
  
 
  const selectOptions: ISelectOption[] = useMemo(() => {
    return state.map(i => ({ label: i.title, value: i.title }))
  }, [state]);

  const onSearch: FormEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const { value } = currentTarget;
    setFilteredState(
      state.filter((el) => formatValue(el.title).includes(formatValue(value)))
    )
  };
  const onReset: FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    setFilteredState(state);
  }
  const onSelect: FormEventHandler<HTMLSelectElement> = ({ currentTarget }) => {
    const { value } = currentTarget;
    setFilteredState(
      state.filter((i) => !formatValue(i.title).includes(formatValue(value)))
    )
  }
  return (
    <>
      <Tree data={filteredState}   />
      <Controls
        onSearch={onSearch}
        onReset={onReset}
        onSelect={onSelect}
        selectOptions={selectOptions}
      />
    </>
  );
}

export default App;
