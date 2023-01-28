import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Linking from "expo-linking";

import { Raining } from "../../components/raining";
import { RootStackParamList } from "../../types/StackNavigatorParams";
import {
  Button,
  ButtonBack,
  ButtonText,
  Container,
  Content,
  Header,
} from "./styles";

export function Musica() {
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
      <Content style={{ elevation: 2 }}>
        <Button
          onPress={() =>
            handleRain(
              "🔥",
              "https://open.spotify.com/playlist/42RuJkGUDsNhHGo0vPewVl?si=ddfc14dd7ee04e38",
              7000
            )
          }
        >
          <FontAwesome5 name="spotify" size={50} color="#fff" />
          <ButtonText>Spotify</ButtonText>
        </Button>
        <Button
          onPress={() =>
            handleRain("🔥", "https://deezer.page.link/HJC3dGvYMgfV7d8r7", 7000)
          }
        >
          <FontAwesome5 name="deezer" size={50} color="#fff" />
          <ButtonText>Deezer</ButtonText>
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
