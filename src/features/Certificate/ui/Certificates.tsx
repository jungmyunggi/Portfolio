import '@/features/Certificate/style/Certificates.scss';
import { useMediaStore } from '@/app/store';
import CertificatesDesktop from '@/features/Certificate/ui/CertificatesDesktop';
import CertificatesMobile from '@/features/Certificate/ui/CertificatesMobile';
export default function Certificates() {
    const isDesktop = useMediaStore((state) => state.isDesktop);
    return isDesktop ? <CertificatesDesktop /> : <CertificatesMobile />;
}
