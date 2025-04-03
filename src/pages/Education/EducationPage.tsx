import Education from '@/features/Education/ui/Education';
import Horizon from '@/share/ui/Horizon';
export default function EducationPage() {
    return (
        <>
            <Horizon intervalTop={20} intervalBottom={0} title="Education" />
            <Education />
        </>
    );
}
