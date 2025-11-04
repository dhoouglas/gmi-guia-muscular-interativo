import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { cn } from '@/utils/cn';

interface InputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}

const Input = React.forwardRef<any, InputProps>(
  ({ label, name, placeholder, className, inputClassName, ...props }, ref) => {
    const { control } = useFormContext();

    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <View className={cn("mb-4", className)}>
            <Text className="text-gray-400 text-base mb-2">{label}</Text>
            <TextInput
              ref={ref}
              className={cn(
                "border-b border-gray-600 text-white text-base pb-2",
                inputClassName,
                error && "border-red-500"
              )}
              placeholder={placeholder || label}
              placeholderTextColor="#A0A0A0"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...props}
            />
            {error && <Text className="text-red-500 text-sm mt-1">{error.message}</Text>}
          </View>
        )}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
