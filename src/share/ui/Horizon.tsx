import '@/share/style/Horizen.scss';
import { useMediaStore } from '@/app/store';
export default function Horizon({
    title,
    intervalTop = 5,
    intervalBottom = 5,
}: {
    title: string;
    intervalTop?: number;
    intervalBottom?: number;
}) {
    const isDesktop = useMediaStore((state) => state.isDesktop);
    return (
        <div
            className={`horizon ${!isDesktop && 'mobile'}`}
            style={{
                marginTop: `${intervalTop}vh`,
                marginBottom: `${intervalBottom}vh`,
                width: '100%',
            }}
        >
            <span className="line"></span>
            <span className="title">{title}</span>
            <span className="line"></span>
        </div>
    );
}
