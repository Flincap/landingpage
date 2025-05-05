import logoImage from "../assets/logo.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Africa Stablecoin Network Logo"
        className="h-full w-auto mr-2"
      />
      {/* <div className="flex flex-col leading-none">
        <span className="text-blue-900 font-bold text-lg">
          Africa Stablecoin
        </span>
        <span className="text-green-600 font-bold text-sm">Network</span>
      </div> */}
    </div>
  );
};

export default Logo;
