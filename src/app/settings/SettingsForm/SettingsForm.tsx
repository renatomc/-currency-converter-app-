'use client';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { HexColorPicker } from 'react-colorful';

import { updateColors, setUserData } from '@/store/userSlice';
import { useRouter } from 'next/navigation';

import {
  FormWrapper,
  Label,
  Input,
  ColorWrapper,
  ColorLabel,
  ColorBox,
  SaveButton,
  ColorInfosWrapper,
} from './SettingsForm.styles';

export function SettingsForm() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState(user.country);
  const [primaryColor, setPrimaryColor] = useState(user.primaryColor || '#0070f3');
  const [secondaryColor, setSecondaryColor] = useState(user.secondaryColor || '#7928ca');

  const router = useRouter();

  const handleSave = () => {
    dispatch(setUserData({ firstName, lastName, email, country }));
    dispatch(updateColors({ primaryColor, secondaryColor }));
    router.push('/');
  };

  return (
    <FormWrapper>
      <Label htmlFor="firstName">Nome</Label>
      <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <Label htmlFor="lastName">Sobrenome</Label>
      <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <Label htmlFor="country">País</Label>
      <Input id="country" value={country} onChange={(e) => setCountry(e.target.value)} />

      <Label htmlFor="email">E-mail</Label>
      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <ColorWrapper>
        <ColorInfosWrapper>
          <ColorLabel>Cor Primária</ColorLabel>
          <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
          <ColorBox style={{ backgroundColor: primaryColor }}>{primaryColor}</ColorBox>
        </ColorInfosWrapper>
        <ColorInfosWrapper>
          <ColorLabel>Cor Secundária</ColorLabel>
          <HexColorPicker color={secondaryColor} onChange={setSecondaryColor} />
          <ColorBox style={{ backgroundColor: secondaryColor }}>{secondaryColor}</ColorBox>
        </ColorInfosWrapper>
      </ColorWrapper>
      <SaveButton onClick={handleSave}>Salvar Alterações</SaveButton>
    </FormWrapper>
  );
};
