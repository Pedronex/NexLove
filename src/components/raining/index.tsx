import { EmojiRain } from "react-native-emoji-rain";

interface Props {
  showing: boolean;
  emoji: string;
}

export function Raining({ showing, emoji }: Props) {
  if (showing) {
    return <EmojiRain emoji={emoji} count={50} />;
  } else {
    return <></>;
  }
}
