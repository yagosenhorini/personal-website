import React from 'react';
import { Mailer } from 'nodemailer-react';
import { cleanup } from '@testing-library/react';

import { mailerConfig } from '../../src/mailer/config';

jest.mock('nodemailer-react', () => ({
  Mailer: () => ({
    send: jest.fn(),
  }),
}));

const name = 'Yago';

afterEach(cleanup);

const emailTemplate = ({ firstName }) => ({
  subject: `Olá, ${firstName}`,
  body: (
    <div>
      <p>Seja bem vindo, {firstName}</p>
    </div>
  ),
});

describe('Mailer module', () => {
  test('should send an email with html body content', async () => {
    const mailer = Mailer(mailerConfig, { emailTemplate });
    await mailer.send(
      'emailTemplate',
      {
        firstName: name,
      },
      {
        to: 'yagosenhorini30@gmail.com',
      }
    );
  });
});
