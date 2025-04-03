import { ReactSVG } from 'react-svg';
type SVGIconType = {
  src: string;
  width: string;
  height: string;
  shape: 'square' | number;
  fill: string;
};
export default function SVGIcon({ src, width, height, shape, fill }: SVGIconType) {
  return (
    <ReactSVG
      src={src}
      beforeInjection={(svg) => {
        svg.querySelectorAll('[fill]').forEach((el) => {
          el.setAttribute('fill', fill);
        });

        svg.setAttribute('fill', fill);

        svg.setAttribute(
          'style',
          `width:${width}; height:${height} ${shape === 'square' ? '' : `border-radius: ${shape}px`}`
        );
      }}
    />
  );
}
