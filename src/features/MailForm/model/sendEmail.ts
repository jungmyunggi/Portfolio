import emailjs from '@emailjs/browser';
import { SendEmailType, EmailJSError } from './sendEmailType';
export const sendEmail = async ({ form, onSuccess, onError }: SendEmailType) => {
  try {
    await emailjs.sendForm('service_kjfr8bp', 'template_qh3tey9', form, 'wAl6dlHatYCOCYW_S');
    onSuccess();
    form.reset();
  } catch (error) {
    const err = error as EmailJSError;
    onError(err);
  }
};
