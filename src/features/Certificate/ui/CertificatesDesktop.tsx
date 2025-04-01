import Certificate from '@/features/Certificate/ui/Certificate';

export default function CertificatesDesktop() {
    return (
        <section className="certificates">
            <Certificate name="정보처리기사" date="2024년 06월 " issuer="한국산업인력공단" />
            <Certificate name="TOEICSpeaking" date="2024년 01월 " issuer="ETS" />
            <Certificate name="IP정보검색사" date="2024년 01월 " issuer="한국지식재산서비스협회" />
        </section>
    );
}
