import { AwardType } from '@/features/Awards/model/AwardType';
export default function Award({ src, text }: AwardType) {
    return (
        <div className="award-container">
            <img src={`/assets/${src}.png`} alt={src} />
            <span>{text}</span>
        </div>
    );
}
