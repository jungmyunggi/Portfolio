import '@/features/Education/Education.scss';
import { EDUCATION_ITEMS } from '@/share/constant/constant';
import EducationItem from '@/features/Education/EducationItem';
export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="education-title">교육</h2>
      <div className="education-content">
        {EDUCATION_ITEMS.map((edu, _) => {
          return <EducationItem {...edu} />;
        })}
      </div>
    </section>
  );
}
