import { ReactElement } from 'react';

export type Email = () => {
  subject: string;
  body: ReactElement;
};

export type EmailProps = {
  firstName: string;
};
