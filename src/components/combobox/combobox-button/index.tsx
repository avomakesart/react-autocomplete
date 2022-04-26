import React from 'react';
import styles from './combobox-button.module.css';
import { forwardRef } from '../../../utils';
import cn from 'clsx';
import { ArrowUpDown } from '../../icons';

interface ComboboxButtonProps {}

export const ComboboxButton = forwardRef<ComboboxButtonProps, 'button'>(
  (props, ref) => {
    return (
      <button
        className={cn(
          styles['combobox__button-icon--container'],
          props.className
        )}
        ref={ref}
        {...props}
      >
        <ArrowUpDown className={styles['combobox__button-icon']} />
      </button>
    );
  }
);
