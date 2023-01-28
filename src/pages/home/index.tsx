import "intl";

import { useState, useEffect } from "react";
import { DateTime, Settings } from "luxon";
import * as Linking from "expo-linking";

import {
  ButtonEvent,
  ButtonLinks,
  ButtonMusic,
  Container,
  Discord,
  GroupButton,
  Header,
  TextButton,
  Title,
} from "./styles";
import { Raining } from "../../components/raining";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/StackNavigatorParams";
import { useNavigation } from "@react-navigation/native";

Settings.defaultLocale = "pt-BR";

export function Home() {
  const [raining, setRaining] = useState(false);
  const [emoji, setEmoji] = useState("");

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function calculateDifference() {
    const currentDate = DateTime.local({ locale: "pt-BR" });
    const difference = currentDate.diff(DateTime.local(2014, 1, 27, 12, 38), [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "second",
    ]);
    setYears(difference.years);
    setMonths(difference.months);
    setDays(difference.days);
    setHours(difference.hours);
    setMinutes(difference.minutes);
    setSeconds(Number.parseInt(difference.seconds.toFixed(0)));
  }

  useEffect(() => {
    setInterval(calculateDifference, 1000);
  }, [true]);

  function handleRain(
    emoji: string,
    link: string,
    time: number,
    navigate?: "Discord Links" | "Página Inicial" | "Musica"
  ) {
    setEmoji(emoji);
    setRaining(true);

    setTimeout(() => {
      setRaining(false);
      if (!navigate) {
        Linking.openURL(link);
      } else {
        navigation.navigate(navigate);
      }
    }, time);
  }

  return (
    <Container>
      <Raining emoji={emoji} showing={raining} />
      {(months === 0 && days === 0 && (
        <Header>Feliz Aniversário de Namoro!!! 🎉🥳🎉</Header>
      )) || <Header>NexLove</Header>}
      <Title>{years} anos</Title>
      <Title>{months} meses</Title>
      <Title>{days} dias</Title>
      <Title>{hours} horas</Title>
      <Title>{minutes} minutos</Title>
      <Title>{seconds} segundos</Title>
      <GroupButton>
        {(months === 0 && days === 0 && (
          <ButtonEvent
            onPress={() =>
              handleRain(
                "❤️",
                "https://api.whatsapp.com/send?phone=62982977804",
                7000
              )
            }
          >
            <TextButton>Comemorar Aniversário de Namoro</TextButton>
          </ButtonEvent>
        )) || (
          <ButtonMusic onPress={() => handleRain("🎵", "", 7000, "Musica")}>
            <TextButton>🎵 Musicas</TextButton>
          </ButtonMusic>
        )}
        {(months === 0 && days === 0 && (
          <Discord
            onPress={() =>
              handleRain(
                "🎮",
                "https://discord.com/channels/486392975694364674/1068634788510060544",
                4000
              )
            }
          >
            <TextButton>Discord</TextButton>
          </Discord>
        )) || (
          <ButtonLinks
            onPress={() => handleRain("🎮", "", 4000, "Discord Links")}
          >
            <TextButton>🎮 Discord</TextButton>
          </ButtonLinks>
        )}
      </GroupButton>
    </Container>
  );
}
