import { FlatList } from "react-native";
import { Category } from "../category";
import { s } from "./styles";

export type categoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: categoriesProps;
  selected: string;
  onSelected: (id: string) => void;
};

export function Categories({ data, selected, onSelected }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelected(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      contentContainerStyle={s.content}
      style={s.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}
