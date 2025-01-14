import { StyleSheet } from "react-native";
import { fontFamily, colors } from "@/styles/theme";

export const s = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },

  title: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },

  subtitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
    marginTop: 12,
  },
});
