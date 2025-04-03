import Horizon from '@/share/ui/Horizon';
import Awards from '@/features/Awards/ui/Awards';
import Certificates from '@/features/Certificate/ui/Certificates';
export default function AwardAndCertificationPage() {
    return (
        <>
            <Horizon intervalTop={20} intervalBottom={0} title="Awards" />
            <Awards />
            <Horizon intervalTop={3} intervalBottom={5} title="Certification" />
            <Certificates />
        </>
    );
}
