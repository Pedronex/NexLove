import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DiscordLink } from "./pages/discordLinks";
import { Home } from "./pages/home";
import { Musica } from "./pages/musica";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Página Inicial" component={Home} />
        <Stack.Screen name="Discord Links" component={DiscordLink} />
        <Stack.Screen name="Musica" component={Musica} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
