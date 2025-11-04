import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { cn } from '@/utils/cn';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Pressable> {
  title: string;
  className?: string;
  textClassName?: string;
  isLoading?: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor?: string;
}

const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      title,
      className,
      textClassName,
      isLoading = false,
      iconName,
      iconSize = 24,
      iconColor = "#FFFFFF",
      ...props
    },
    ref
  ) => {
    return (
      <Pressable
        ref={ref}
        className={cn(
          "flex-row items-center justify-center px-4 py-3 rounded-lg",
          className,
          isLoading && "opacity-70"
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator color={iconColor} />
        ) : (
          <>
            {iconName && (
              <Ionicons name={iconName} size={iconSize} color={iconColor} className="mr-2" />
            )}
            <Text className={cn("text-white text-base font-semibold", textClassName)}>
              {title}
            </Text>
          </>
        )}
      </Pressable>
    );
  }
);

Button.displayName = "Button";

export { Button };
