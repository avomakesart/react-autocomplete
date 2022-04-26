import React from 'react';
import styles from './combobox-label.module.css';
import { forwardRef } from '../../../utils';
import cn from 'clsx';

interface ComboboxLabelProps {}

export const ComboboxLabel = forwardRef<ComboboxLabelProps, 'label'>(
  (props, ref) => {
    return (
      <label
        id='combobox-label'
        className={cn(styles.combobox_label, props.className)}
        ref={ref}
        {...props}
      />
    );
  }
);
