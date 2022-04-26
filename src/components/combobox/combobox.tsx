import { useRef, useState } from 'react';
import { useClickAway } from '../../hooks';
import { createContext, forwardRef } from '../../utils';
import styles from './combobox.module.css';

export interface ComboboxContext {
  selectedOption: string;
  handleSelectedOption: (option: string) => void;
  handleComboboxOpen: () => void;
  isComboboxOpen: boolean;
}

export interface ComboboxProps {
  onSelectOption: (option: string) => void;
  selectedValue: string;
  onClose: () => void;
  isListOpen: boolean;
}

export const [ComboboxContextProvider, useComboboxContext] =
  createContext<ComboboxContext>({
    strict: true,
    name: 'ComboboxContextProvider',
    errorMessage:
      'useComboboxContext: `context` is undefined. Seems you forgot to wrap modal components in `<Dropdown />`',
  });

export const Combobox = forwardRef<ComboboxProps, 'div'>((props, ref) => {
  const {
    selectedValue,
    isListOpen,
    onSelectOption,
    onClose,
    children,
    ...rest
  } = props;

  const [selectedOption, setSelectedOption] = useState(selectedValue || '');

  const selectContainerRef = useRef(null);
  const internalRef = ref ? ref : selectContainerRef;

  const clickOutsideHandler = () => onClose();

  useClickAway(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: string) => {
    onSelectOption(option);
    setSelectedOption(option);
  };

  return (
    <ComboboxContextProvider
      value={{
        selectedOption,
        handleSelectedOption: updateSelectedOption,
        isComboboxOpen: isListOpen,
        handleComboboxOpen: onClose,
      }}
    >
      <div className={styles.combobox__container} ref={internalRef} {...rest}>
        {children}
      </div>
    </ComboboxContextProvider>
  );
});
