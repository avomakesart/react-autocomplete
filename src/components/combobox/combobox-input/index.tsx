import React from 'react';
import { forwardRef } from '../../../utils/forward-ref';
import styles from './combobox-input.module.css';
import cn from 'clsx';

interface ComboboxInputProps {}

export const ComboboxInput = forwardRef<ComboboxInputProps, 'input'>(
  (props, ref) => {
    return (
      <input
        className={cn(styles.combobox__input, props.className)}
        ref={ref}
        {...props}
      />
    );
  }
);
