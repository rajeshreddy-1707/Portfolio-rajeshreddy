import * as Icons from 'react-icons/si';

type Props = {
  iconName: keyof typeof Icons;
  className?: string;
};

const DevIcon = ({ iconName, className, ...restProps }: Props) => {
  const IconComponent = Icons[iconName];
  return <IconComponent {...restProps} className={className || ''} />;
};

export default DevIcon;