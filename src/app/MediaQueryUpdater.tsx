import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useMediaStore } from '@/app/store';
export default function MediaQueryUpdater() {
    const isMobileQuery = useMediaQuery({ maxWidth: 1024 });
    const setIsDesktop = useMediaStore((state) => state.setIsDesktop);

    useEffect(() => {
        setIsDesktop(!isMobileQuery);
    }, [isMobileQuery, setIsDesktop]);

    return null;
}
