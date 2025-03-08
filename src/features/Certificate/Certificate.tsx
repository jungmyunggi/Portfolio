import '@/features/Certificate/Certificate.scss';
import { CERTIFICATE_ITEMS } from '@/share/constant/constant';
export default function Certificate() {
  return (
    <section className="certificate">
      <h2 className="certificate-title">자격증</h2>
      <div className="certificate-content">
        <ul>
          {CERTIFICATE_ITEMS.map((certificate, _) => {
            return (
              <li className="certificate-item">
                <div>
                  <p>{certificate.name}</p>
                  <p>{certificate.organization}</p>
                </div>
                <p>{certificate.date}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
