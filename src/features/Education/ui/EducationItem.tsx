import { EducationProps } from '@/share/type/EducationType';
export default function EducationItem(itemProps: EducationProps) {
    return (
        <div className="education-item">
            <div className="education-dot-container">
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="eduation-text-container">
                <p className="title">{itemProps.name}</p>
                <p className="date">{itemProps.date}</p>
            </div>
        </div>
    );
}
