import React from 'react';
import { forwardRef } from '../../utils';
import styles from './card.module.css';
import cn from 'clsx';

export const Card = forwardRef<any, 'div'>((props, ref) => {
  return (
    <div
      className={cn(styles.card__container, props.className)}
      ref={ref}
      {...props}
    />
  );
});
