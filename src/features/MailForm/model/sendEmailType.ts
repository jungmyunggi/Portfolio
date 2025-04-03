export type EmailJSError = {
  text: string;
  status: number;
};

export type SendEmailType = {
  form: HTMLFormElement;
  onSuccess: () => void;
  onError: (error: EmailJSError) => void;
};
