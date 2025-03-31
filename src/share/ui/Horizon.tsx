import '@/share/style/Horizen.scss';
export default function Horizon({ title, interval }: { title: string; interval: number }) {
  return (
    <div className="horizon" style={{ marginTop: interval, marginBottom: interval }}>
      <span className="line"></span>
      <span className="title">{title}</span>
      <span className="line"></span>
    </div>
  );
}
