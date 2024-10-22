import { ReactElement, FC } from 'react'
import { SidebarMenuProps } from '../types'

const SidebarMenu: FC<SidebarMenuProps> = ({ children }): ReactElement => {
  return (
    <ul className='w-full'>
        {children}
    </ul>
  )
}

export default SidebarMenu;