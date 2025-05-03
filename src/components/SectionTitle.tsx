interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightText?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  lightText = false,
}) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <h3 className={`text-sm uppercase tracking-wider font-medium mb-2 ${
          lightText ? 'text-green-300' : 'text-green-600'
        }`}>
          {subtitle}
        </h3>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${
        lightText ? 'text-white' : 'text-blue-900'
      }`}>
        {title}
      </h2>
      <div className={`h-1 w-20 mt-4 ${centered ? 'mx-auto' : ''} bg-yellow-500 rounded-full`}></div>
    </div>
  );
};

export default SectionTitle;