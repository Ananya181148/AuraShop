
import React from "react";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image } from "react-native";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
  <Redirect href={"/(tabs)/home"} />

    // <SafeAreaView className="bg-gray- h-full">
    //   <ScrollView contentContainerStyle={{ height:"100%" }}>
    //     <View className="w-full flex justify-center items-center h-full px-4">
    //       <Image
    //       source={images.logo}
    //       className="h-[84px]"
    //       resizeMode="contain"
    //       />

    //       <Image
    //       source={images.cards}
    //       className="max-w-[380px] w-full h-[300px}"
    //       resizeMode="contain"
    //       />

    //     <View className="relative mt-5">
    //         <Text className="txet-3xl text-white font-bold text-center">
    //           Lorem ipsum dolor sit {"\n"}amet {" "}
    //           <Text className="text-orange-500">AuraShop.</Text>
    //         </Text>
    //         <Image source={images.path}
    //                   className="w-[100px] h-[10px] absolute -bottom-3 -right-5"
    //                   resizeMode="contain"/>
    //     </View>
    //         <Text className="text-sm text-gray-100 mt-7 text-center">
    //           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem, voluptatum suscipit voluptate mollitia AuraShop.?
    //         </Text>

    //         <CustomButton
    //         title="Continue with Email"
    //         handlePress={() => { 
    //           router.push("/(auth)/login");
    //         }}
    //         containerStyles="w-full mt-7"
    //       />

    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

  )
}

