import "intl";

import { useState, useEffect } from "react";
import { DateTime, Settings } from "luxon";
import { EmojiRain } from "react-native-emoji-rain";
import * as Linking from "expo-linking";

import {
  Button,
  Container,
  Discord,
  Header,
  TextButton,
  Title,
} from "./styles";

Settings.defaultLocale = "pt-BR";

export function Home() {
  const [startDate, setStartDate] = useState(
    DateTime.local(2014, 1, 27, 12, 38)
  );
  const [rainingLove, setRainingLove] = useState(false);
  const [rainingDiscord, setRainingDiscord] = useState(false);

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function calculateDifference() {
    const currentDate = DateTime.local({ locale: "pt-BR" });
    const difference = currentDate.diff(startDate, [
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
  }, [startDate]);

  function handleRainEmoji() {
    setRainingLove(true);
    setTimeout(() => {
      setRainingLove(false);
      Linking.openURL("https://api.whatsapp.com/send?phone=62982977804");
    }, 7000);
  }

  function handleOpenDiscord() {
    setRainingDiscord(true);
    setTimeout(() => {
      setRainingLove(false);
      Linking.openURL(
        "https://discord.com/channels/486392975694364674/1068634788510060544"
      );
    }, 4000);
  }

  return (
    <Container>
      {rainingLove && <EmojiRain emoji="❤" count={50} />}
      {rainingDiscord && <EmojiRain emoji="🎮" count={25} />}
      {months === 0 && days === 0 && (
        <Header>Feliz Aniversário de Namoro!!! 🎉🥳🎉</Header>
      )}
      <Title>{years} anos</Title>
      <Title>{months} meses</Title>
      <Title>{days} dias</Title>
      <Title>{hours} horas</Title>
      <Title>{minutes} minutos</Title>
      <Title>{seconds} segundos</Title>
      {months === 0 && days === 0 && (
        <Button onPress={handleRainEmoji}>
          <TextButton>Comemorar Aniversário de Namoro</TextButton>
        </Button>
      )}
      <Discord onPress={handleOpenDiscord}>
        <TextButton>Discord</TextButton>
      </Discord>
    </Container>
  );
}
