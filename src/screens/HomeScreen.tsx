"use client";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, HeaderTitle, Input, Paragraph, ScreenWrapper } from '../components'
import { RootStackParamList } from '../navigation/StackNavigator';
import { usePlayer } from '../hooks/usePlayer';
import { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export const WelcomeScreen = ({ navigation }: Props) => {
  const { fetchPlayer } = usePlayer();
  const [name, setName] = useState<string>()

  return (
    <ScreenWrapper>
      <HeaderTitle text="Bienvenue" />

      <Input
        value={name}
        onChangeText={setName}
        placeholder="Joueur 456"
        textContentType="name"
      />

      <Button
        text="Jouer !"
        onPress={async() => {
          fetchPlayer(name);
        }}
      />
    </ScreenWrapper>
  )
}
