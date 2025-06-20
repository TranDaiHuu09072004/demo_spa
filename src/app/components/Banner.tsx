type BannerProps = {
  src: string;
  alt: string;
  className: string;
};
const Banner = ({ src, alt, className }: BannerProps) => {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
};

export default Banner;
