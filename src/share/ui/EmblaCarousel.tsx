import { useMediaStore } from '@/app/store';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import '@/share/style/embla.scss';
import { ProjectItemType } from '@/features/Projects/model/pojectItemType';
import ProjectItem from '@/features/Projects/ui/ProjectItem';
type PropType = {
    slides: ProjectItemType[];
    options?: EmblaOptionsType;
};

const EmblaCarousel = ({ props }: { props: PropType }) => {
    const isDesktop = useMediaStore((state) => state.isDesktop);

    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
        usePrevNextButtons(emblaApi);

    return (
        <div className={`embla ${isDesktop ? '' : 'embla-mobile'}`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <ProjectItem projectItem={slide} />
                        </div>
                    ))}
                </div>
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="embla__prev__button"
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="embla__next__button"
                />

                {isDesktop && (
                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={'embla__dot'.concat(
                                    index === selectedIndex ? ' embla__dot--selected' : ''
                                )}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmblaCarousel;
