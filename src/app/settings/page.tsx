'use client';

import { Main, Title } from './page.styles';
import { SettingsForm } from './SettingsForm';

export default function SettingsPage() {
  return (
    <Main>
      <Title>
        Configurações do Usuário
      </Title>
      <SettingsForm />
    </Main>
  );
}
