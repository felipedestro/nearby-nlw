import { View, Alert } from "react-native";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, categoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type marketsProps = PlaceProps & {};

export default function Home() {
  const [categories, setCategories] = useState<categoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<marketsProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.");
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) return;

      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os lugares.");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#ccc" }}>
      <Categories
        data={categories}
        onSelected={setCategory}
        selected={category}
      />

      <Places data={markets} />
    </View>
  );
}
