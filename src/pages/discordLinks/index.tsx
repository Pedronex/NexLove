import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert } from "react-native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../../types/StackNavigatorParams";
import {
  Button,
  ButtonBack,
  ButtonText,
  Container,
  Content,
  Header,
} from "./styles";
import { Raining } from "../../components/raining";

export function DiscordLink() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [raining, setRaining] = useState(false);
  const [emoji, setEmoji] = useState("");

  function handleRain(emoji: string, link: string, time: number) {
    setEmoji(emoji);
    setRaining(true);

    setTimeout(() => {
      setRaining(false);
      Linking.openURL(link);
    }, time);
  }

  return (
    <Container>
      <Raining emoji={emoji} showing={raining} />
      <Header>NexLove</Header>
      <Content>
        <Button
          onPress={() => {
            Alert.alert(
              "Qual canal entrar?",
              "Gostaria de usar o chat de voz ou texto?",
              [
                {
                  text: "Canal de Voz",
                  onPress: () =>
                    handleRain(
                      "🔈",
                      "https://discord.com/channels/486392975694364674/1068634839886086246",
                      4000
                    ),
                  style: "cancel",
                },
                {
                  text: "Canal de Texto",
                  onPress: () =>
                    handleRain(
                      "⌨️",
                      "https://discord.com/channels/486392975694364674/1068634788510060544",
                      4000
                    ),
                },
              ]
            );
          }}
        >
          <ButtonText>Saudade</ButtonText>
        </Button>
        <Button
          onPress={() => {
            Alert.alert(
              "Qual canal entrar?",
              "Gostaria de usar o chat de voz ou texto?",
              [
                {
                  text: "Canal de Voz",
                  onPress: () =>
                    handleRain(
                      "🔈",
                      "https://discord.com/channels/486392975694364674/1068634443587260478",
                      4000
                    ),
                  style: "cancel",
                },
                {
                  text: "Canal de Texto",
                  onPress: () =>
                    handleRain(
                      "⌨️",
                      "https://discord.com/channels/486392975694364674/1068634415183437956",
                      4000
                    ),
                },
              ]
            );
          }}
        >
          <ButtonText>Musicas</ButtonText>
        </Button>
        <Button
          onPress={() => {
            Alert.alert(
              "Qual canal entrar?",
              "Gostaria de usar o chat de voz ou texto?",
              [
                {
                  text: "Canal de Voz",
                  onPress: () =>
                    handleRain(
                      "🔈",
                      "https://discord.com/channels/486392975694364674/1068634540920291458",
                      4000
                    ),
                  style: "cancel",
                },
                {
                  text: "Canal de Texto",
                  onPress: () =>
                    handleRain(
                      "⌨️",
                      "https://discord.com/channels/486392975694364674/1068634497211441234",
                      4000
                    ),
                },
              ]
            );
          }}
        >
          <ButtonText>Jogos</ButtonText>
        </Button>
        <Button
          onPress={() => {
            Alert.alert(
              "Qual canal entrar?",
              "Gostaria de usar o chat de voz ou texto?",
              [
                {
                  text: "Canal de Voz",
                  onPress: () =>
                    handleRain(
                      "🔈",
                      "https://discord.com/channels/486392975694364674/1068634693685223616",
                      4000
                    ),
                  style: "cancel",
                },
                {
                  text: "Canal de Texto",
                  onPress: () =>
                    handleRain(
                      "⌨️",
                      "https://discord.com/channels/486392975694364674/1068634652581036092",
                      4000
                    ),
                },
              ]
            );
          }}
        >
          <ButtonText>Trabalhando</ButtonText>
        </Button>
      </Content>
      <ButtonBack
        onPress={() =>
          navigation.canGoBack()
            ? navigation.goBack()
            : navigation.navigate("Página Inicial")
        }
      >
        <ButtonText>Voltar</ButtonText>
      </ButtonBack>
    </Container>
  );
}
