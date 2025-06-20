type LogoProps = {
  src: string;
  clasName: string;
  alt:string;
};
const Logo = ({src, clasName, alt}:LogoProps) => {
  return (
    <>
      <div className={clasName}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

export default Logo;
