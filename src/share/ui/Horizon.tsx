import '@/share/style/Horizen.scss';
import { useMediaStore } from '@/app/store';
export default function Horizon({ title, interval }: { title: string; interval: number }) {
  const isDesktop = useMediaStore((state) => state.isDesktop);
  return (
    <div
      className={`horizon ${!isDesktop && 'mobile'}`}
      style={{ marginTop: interval, marginBottom: interval, width: '100%' }}
    >
      <span className="line"></span>
      <span className="title">{title}</span>
      <span className="line"></span>
    </div>
  );
}
