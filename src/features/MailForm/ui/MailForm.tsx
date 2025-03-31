import { FormEvent, useRef } from 'react';
import { sendEmail } from '@/features/MailForm/model/sendEmail';
import { ArrowLeft, ArrowRight, Search, EllipsisVertical } from 'lucide-react';
import '@/features/MailForm/style/MailForm.scss';
export default function MailForm() {
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    await sendEmail({
      form: form.current,
      onSuccess: () => alert('메일 전송이 완료되었습니다.'),
      onError: (error) => {
        console.error(`[${error.status}]: ${error.text} `);
        alert('메일 전송에 실패했습니다.');
      },
    });
  };

  return (
    <div className="mailform">
      <div className="mail-container">
        <div className="header">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="action">
            <ArrowLeft size={20} />
          </span>
          <span className="action">
            <ArrowRight size={20} />
          </span>
          <span className="url">
            <span>jungmyunggi.portfilio</span>
            <Search size={15} />
          </span>
          <span className="x">
            <EllipsisVertical />
          </span>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="form">
          <div>
            <span>이메일:</span>
            <input
              name="email"
              type="email"
              placeholder="회신 받으실 이메일 주소를 입력해주세요"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <span>제목:</span>
            <input name="title" autoComplete="off" placeholder="제목을 입력해주세요" />
          </div>
          <div>
            <textarea name="message" placeholder="내용을 입력해주세요" required />
          </div>
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
}
