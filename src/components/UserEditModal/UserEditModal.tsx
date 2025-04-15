'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { setUserData } from '@/store/userSlice';

import { AnimatePresence } from 'framer-motion';
import { Button } from '../Button';

import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Input,
  CloseButton,
} from './UserEditModal.styles';

interface UserEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserEditModal({ isOpen, onClose }: UserEditModalProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    dispatch(setUserData({ ...user, ...formData }));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <ModalHeader>
              <ModalTitle>Editar Perfil</ModalTitle>
              <CloseButton onClick={onClose}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nome" />
              <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Sobrenome" />
              <Input name="country" value={formData.country} onChange={handleChange} placeholder="País" />
              <Input name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
            </ModalBody>
            <ModalFooter>
              <Button variant='primary' onClick={handleSave}>Salvar</Button>
              <Button variant="secondary" onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
