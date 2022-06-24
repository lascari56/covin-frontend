import React, {useState, useEffect} from 'react';

import PadinationView from "./padination.view"

import {useDebouncedCallback} from 'use-debounce';

const PadinationContainer = ({onChange, ...props}) => {
  const [localValue, setLocalValue] = useState(props.value);

  // const debounced = useDebouncedCallback(
  //   (value) => {
  //     onChange(value);

  //     if (!localValue) {
  //       setLocalValue(value)
  //     }
  //   },
  //   1000
  // );

  useEffect(() => {
    if (props.value !== localValue) {
      setLocalValue(props.value)
    }
  }, [props.value]);

  const handlerPrew = () => {
    if (props.value != 1) {
      onChange(+props.value - 1)
    }
  }

  const handlerNext = () => {
    if (props.value < props.total) {
      onChange(+props.value + 1)
    }
  }

  const handlerBlur = () => {
    onChange(localValue)
    // if (localValue <= 1) {
    //   onChange(1)
    // } else if (localValue > props.total) {
    //   onChange(props.total)
    // } else {
    //   onChange(+localValue)
    // }
    
  }

  const onKeyUp = (event) => {
    if (event.charCode === 13) {
      onChange(localValue)
    }
  }

  // const handlerChange = (value) => {
  //   let _value = +value;

  //   if (!_value && _value !== 0) {
  //     _value = localValue;
  //   } else if (_value <= 1) {
  //     _value = 1
  //   } else if (_value > props.total) {
  //     _value  = props.total
  //   }

  //   debounced(_value)
  //   setLocalValue(value?.length ? _value : value)
  // }

  const handlerChange = (value) => {
    let _value = +value;

    if (!_value && _value !== 0) {
      _value = localValue;
    } else if (_value <= 1) {
      _value = 1
    } else if (_value > props.pageCount) {
      _value  = props.pageCount
    }

    // debounced(_value)
    setLocalValue(value?.length ? _value : value)
  }

  return (
    // localValue={localValue} onChangeLocalValue={setLocalValue}
    <PadinationView {...props} localValue={localValue} onPrev={handlerPrew} onNext={handlerNext} onChange={handlerChange} onBlur={handlerBlur} onKeyUp={onKeyUp} />
  );
}

export default PadinationContainer;
