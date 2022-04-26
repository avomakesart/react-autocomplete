import cn from 'clsx'
import React, { ReactNode } from 'react'
import { Card } from '../card'
import styles from './layout.module.css'

export interface LayoutProps {
  children: ReactNode | ReactNode[]
  title?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title = 'React auto complete' }) => {
  return (
    <main className={cn(styles['app-wrapper'], 'app-background')}>
      <div className={styles['main-wrapper']}>
        <div className={styles['main-container']}>
          <h1 className={styles['app-title']}>{title}</h1>
          <Card>{children}</Card>
        </div>
      </div>
    </main>
  )
}
