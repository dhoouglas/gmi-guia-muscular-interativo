import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { cn } from '@/utils/cn';

interface AuthTabProps {
  title: string;
  isActive: boolean;
  onPress: () => void;
}

const AuthTab: React.FC<AuthTabProps> = ({ title, isActive, onPress }) => {
  return (
    <Pressable onPress={onPress} className="relative pb-2">
      <Text
        className={cn(
          "text-2xl font-bold mr-4",
          isActive ? "text-white" : "text-gray-400"
        )}
        style={{ fontFamily: isActive ? "Inter_700Bold" : "Inter_400Regular" }}
      >
        {title}
      </Text>
      {isActive && (
        <View className="w-full h-1 bg-purple-500 absolute bottom-0 left-0 rounded-full" />
      )}
    </Pressable>
  );
};

export { AuthTab };
