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

export const Content = styled.View`
  width: 90%;
  height: 40%;
  background-color: #121212;
  border-radius: 20px;
  padding: 20px;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.15);

  flex-direction: row;
  border-radius: 10px;

  justify-content: space-evenly;
  align-items: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  width: 65%;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Image = styled.Image`
  width: 30%;
  height: 100%;
`;

export const Header = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 50%;
  background-color: #ff5858;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
