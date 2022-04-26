import React from 'react';
import { forwardRef } from '../../../utils/forward-ref';
import styles from './combobox-list.module.css';
import cn from 'clsx';
import { useComboboxContext } from '../combobox';

interface ComboboxListProps {
  /**
   * boolean prop to show the list container
   */
  isOpen?: boolean;
}

export const ComboboxList = forwardRef<ComboboxListProps, 'ul'>(
  (props, ref) => {
    const { isComboboxOpen } = useComboboxContext()
    const { isOpen, ...rest } = props;

    return (
      <ul
        className={cn(
          styles['combobox__options--container'],
          {
            [styles['combobox__show--options']]: isComboboxOpen,
            [styles['combobox__hide--options']]: !isComboboxOpen,
          },
          props.className
        )}
        ref={ref}
        role='listbox'
        aria-labelledby='listbox-label'
        {...rest}
      />
    );
  }
);
