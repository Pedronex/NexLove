import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs({
  colors: ["#8b66ca", "#512DA8"],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-family: Roboto;
  color: #fff;
`;

export const GroupButton = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 70%;
  background-color: #ff5858;
  padding: 10px;
  border-radius: 10px;
`;

export const Discord = styled.TouchableOpacity`
  width: 20%;
  background-color: #5865f2;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const Header = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
