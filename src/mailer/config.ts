import { Mailer } from 'nodemailer-react';

import { PASSWORD, USERNAME } from '@Constants/index';
import { EmailToSend } from './index';

export const mailerConfig = {
  transport: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
  },
  defaults: {
    from: {
      name: 'Yago',
      address: 'yagosenhorini30@gmail.com',
    },
  },
};

const emailList = {
  EmailToSend,
};

const mailer = Mailer(mailerConfig, emailList);

mailer.send(
  'EmailToSend',
  {
    firstName: 'Yago',
  },
  {
    to: 'yagosenhorini@gmail.com',
  }
);
