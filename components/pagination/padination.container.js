import React, {useState, useEffect} from 'react';

import PadinationView from "./padination.view"

const PadinationContainer = ({onChange, ...props}) => {
  const [localValue, setLocalValue] = useState(props.value + 1);

  useEffect(() => {
    if (props.value !== localValue) {
      setLocalValue(props.value)
    }
  }, [props.value]);

  const handlerPrew = () => {
    if (props.value != 0) {
      onChange(props.value - 1)
    }
  }

  const handlerNext = () => {
    if (props.value < props.total) {
      onChange(props.value + 1)
    }
  }

  const handlerBlur = () => {
    if (localValue < 0) {
      onChange(0)
    } else if (localValue > props.total) {
      onChange(props.total)
    } else {
      onChange(localValue)
    }
    
  }

  return (
    <PadinationView {...props} localValue={localValue} onChangeLocalValue={setLocalValue} onPrev={handlerPrew} onNext={handlerNext} onBlur={handlerBlur} />
  );
}

export default PadinationContainer;
