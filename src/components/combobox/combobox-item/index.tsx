import React, { useRef } from 'react';
import { forwardRef } from '../../../utils';
import { useComboboxContext } from '../combobox';
import styles from './combobox-item.module.css';
import cn from 'clsx';
import { CheckMark } from '../../icons';

interface ComboboxItemProps {
  value: string;
  children?: any;
  active?: any;
}

export const ComboboxItem = forwardRef<ComboboxItemProps, 'li'>(
  (props, ref) => {
    const { selectedOption, handleSelectedOption, handleComboboxOpen } =
      useComboboxContext();
    const { children, className, value, active, ...rest } = props;

    const handleClickItem = () => {
      handleSelectedOption(value);
      handleComboboxOpen();
    };

    return (
      <li
        className={cn(
          styles['combobox-item__container'],
          { [styles['combobox-item__container--active']]: active },
          className
        )}
        ref={ref}
        onClick={handleClickItem}
        {...rest}
      >
        <div className={styles['combobox-item__option--container']}>
          <span className={styles['combobox-item__option']}>{children}</span>
        </div>
        <span
          className={styles['combobox-item__icon--container']}
          style={{ display: selectedOption === value ? 'flex' : 'none' }}
        >
          <CheckMark
            className={cn(styles['combobox-item__icon'], {
              [styles['combobox-item__icon--active']]: active,
            })}
          />
        </span>
      </li>
    );
  }
);
