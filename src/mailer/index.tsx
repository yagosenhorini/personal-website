import React from 'react';
import { EmailProps } from './types';

export const EmailToSend = ({ firstName }: EmailProps) => ({
  subject: `Olá, ${firstName}`,
  body: (
    <div>
      <p>Seja bem vindo, {firstName}</p>
    </div>
  ),
});
