import { ReactElement, FC } from 'react';
import { SidebarHeaderProps } from '../types';

const SidebarHeader: FC<SidebarHeaderProps> = ({ children }): ReactElement => {
  return (
    <header className="flex items-center ps-2">
        {children}
    </header>
  )
}

export default SidebarHeader