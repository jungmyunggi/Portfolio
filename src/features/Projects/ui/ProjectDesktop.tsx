import { WEB_ITEMS } from '@/share/constant/Projects';
import { APP_ITEMS } from '@/share/constant/Projects';
import Horizon from '@/share/ui/Horizon';
import EmblaCarousel from '@/share/ui/EmblaCarousel';
export default function ProjectDesktop() {
    const web_props = { slides: WEB_ITEMS, options: { loop: true } };
    const app_props = { slides: APP_ITEMS, options: { loop: true } };

    return (
        <section className="projects">
            <Horizon intervalTop={20} intervalBottom={5} title="WEB" />
            <EmblaCarousel props={web_props}></EmblaCarousel>
            <Horizon intervalTop={5} intervalBottom={5} title="APP" />
            <EmblaCarousel props={app_props}></EmblaCarousel>
        </section>
    );
}
