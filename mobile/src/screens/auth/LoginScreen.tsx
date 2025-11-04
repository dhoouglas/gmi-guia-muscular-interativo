import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from '@/schemas/auth';
import { Input } from '@/components/forms/Input';
import { Button } from '@/components/buttons/Button';
import { SocialButton } from '@/components/buttons/SocialButton';
import Logo from '@/assets/logo2.svg';
import { AuthTab } from '@/components/auth/AuthTab';

const LoginScreen: React.FC = () => {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = async (data: LoginSchema) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    Alert.alert("Login Data", JSON.stringify(data));
    console.log(data);
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    Alert.alert("Social Login", `Login with ${provider}`);
    console.log(`Login with ${provider}`);
  };

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1">
        <View className="pt-8 px-6 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <AuthTab title="Login" isActive={true} onPress={() => Alert.alert("Navegar para Login")} />
            <AuthTab title="Sign up" isActive={false} onPress={() => Alert.alert("Tela de Sign up ainda não implementada")} />
          </View>
        </View>

        <View className="mt-1 mb-6 px-6 items-center">
          <Logo width="200" height="200" fill="#A78BFA" className="mb-2" />
          <Text className="text-white text-4xl font-bold" style={{ fontFamily: "Inter_700Bold" }}>Bem vindo ao,</Text>
          <Text className="text-purple-600 text-3xl" style={{ fontFamily: "Inter_400Regular" }}>Guia Muscular Interativo</Text>
        </View>

        <View className="bg-black bg-opacity-70 p-6 rounded-lg">
          <FormProvider {...methods}>
            <Input
              label="Email"
              name="email"
              placeholder="seuemail@exemplo.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              label="Password"
              name="password"
              placeholder="********"
              secureTextEntry
            />
            <Pressable className="self-end mb-6">
              <Text className="text-purple-500 text-base" style={{ fontFamily: "Inter_600SemiBold" }}>Esqueceu sua senha?</Text>
            </Pressable>

            <Button
              title="Login"
              onPress={handleSubmit(onSubmit)}
              isLoading={isSubmitting}
              className="bg-purple-600  py-4 rounded-full mb-4"
              textClassName="text-lg "
              iconName="arrow-forward"
              iconColor="#FFFFFF"
              iconSize={20}
            />
          </FormProvider>

          <View className="flex-row justify-center mt-4">
            <SocialButton provider="google" onPress={() => handleSocialLogin('google')} className="bg-gray-700" />
            <SocialButton provider="facebook" onPress={() => handleSocialLogin('facebook')} className="bg-gray-700" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export { LoginScreen };
