import "intl";
import "intl/locale-data/jsonp/pt-BR";

// if (Platform.OS === "android") {
//     // See https://github.com/expo/expo/issues/6536 for this issue.
//     if (typeof (Intl as any).__disableRegExpRestore === "function") {
//         (Intl as any).__disableRegExpRestore();
//     }
// }

export const formatValue = (value: number) =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: "BRL"
  }).format(value)
