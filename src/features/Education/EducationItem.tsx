import { EducationProps } from '@/share/type/EducationType';
export default function EducationItem(itemProps: EducationProps) {
  return (
    <div className="education-item">
      <p>{itemProps.name}</p>
      <p>{itemProps.date}</p>
      <p>{itemProps.summary}</p>
    </div>
  );
}
