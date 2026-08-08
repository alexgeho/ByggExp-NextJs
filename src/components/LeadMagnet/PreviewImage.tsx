// Raster preview of the template/result (a generated .webp). width/height are
// the intrinsic pixel size so the browser reserves space (no layout shift) and
// the alt/caption carry the keyword.
type PreviewImageProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export default function PreviewImage({ src, alt, caption, width, height }: PreviewImageProps) {
  return (
    <figure className="lm-preview">
      <img
        className="lm-preview-img"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
      <figcaption className="lm-preview-caption">{caption}</figcaption>
    </figure>
  );
}
