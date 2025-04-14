'use client';

import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { clearUserData } from '@/store/userSlice';
import { MenuContainer, MenuButton, DropdownItem, DropDown } from './UserMenu.styles';
import { ChevronDown, LogOut, Settings } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    dispatch(clearUserData());
    localStorage.removeItem('persist:@b3-challenge');
    location.reload();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <MenuContainer ref={menuRef}>
      <MenuButton onClick={() => setOpen((prev) => !prev)}>
        {`${user.firstName} ${user.lastName}`}
        <ChevronDown size={16} />
      </MenuButton>

      <AnimatePresence>
        {open && (
          <DropDown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            >
              <DropdownItem>
              <Settings size={16} />
              Configurações
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
              <LogOut size={16} />
              Sair
              </DropdownItem>
            </DropDown>
        )}
      </AnimatePresence>
    </MenuContainer>
  );
};
