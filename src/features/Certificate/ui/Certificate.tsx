import { CertificateType } from '@/features/Certificate/model/CertificateType';

export default function Certificate({ name, date, issuer }: CertificateType) {
    return (
        <div className="certification-container">
            <div>
                <span className="name">{name}</span>
                <span className="issuer">{issuer}</span>
            </div>
            <span className="date">{date}</span>
        </div>
    );
}
