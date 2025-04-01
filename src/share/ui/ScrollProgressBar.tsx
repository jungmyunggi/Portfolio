import { useEffect, useRef } from 'react';
import '@/share/style/ScrollProgressBar.scss';
export default function ScrollPrograssBar() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            if (barRef.current) {
                barRef.current.style.width = `${scrollPercent}%`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="scrollBar" ref={barRef} />;
}
