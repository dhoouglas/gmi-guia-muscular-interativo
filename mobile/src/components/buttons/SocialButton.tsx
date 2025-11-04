import React from 'react';
import { Button } from './Button';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { cn } from '@/utils/cn';
interface SocialButtonProps {
  provider: 'google' | 'facebook';
  onPress: () => void;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, onPress, className }) => {
  let iconName: keyof typeof Ionicons.glyphMap | keyof typeof FontAwesome.glyphMap;
  let buttonTitle: string;
  let buttonClassName: string;
  let iconColor: string;

  if (provider === 'google') {
    iconName = 'logo-google';
    buttonTitle = 'Google';
    buttonClassName = 'bg-red-500';
    iconColor = '#FFFFFF';
  } else {
    iconName = 'logo-facebook';
    buttonTitle = 'Facebook';
    buttonClassName = 'bg-blue-600';
    iconColor = '#FFFFFF';
  }

  return (
    <Button
      title={buttonTitle}
      onPress={onPress}
      iconName={iconName as any}
      iconColor={iconColor}
      className={cn("flex-1 mx-2", buttonClassName, className)}
    />
  );
};

export { SocialButton };
