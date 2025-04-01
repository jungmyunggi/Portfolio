import EducationItem from '@/features/Education/ui/EducationItem';
export default function EducationDesktop() {
    return (
        <section className="education">
            <EducationItem name="네이버 부스트캠프" date="2024.06 ~ 2024.12" />
            <EducationItem
                name="영남대학교 차세대 컴퓨터 시스템 연구실 학부연구생"
                date="2023.07 ~ 2024.08"
            />
            <EducationItem name="영남대학교" date="2019.03 ~ 2025.02" />
            <EducationItem name="대구상원고등학교" date="2019.03 ~ 2019.01" />
        </section>
    );
}
