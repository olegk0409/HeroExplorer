import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function withScreenLayout<T extends Object>(
  WrappedComponent: React.FC<T>
) {
  return (props: T) => {
    return (
      <View
        className="flex-1 bg-slate-600"
        style={{backgroundColor: '#475569'}}
      >
        <SafeAreaView className="flex-1 pl-1 pr-1">
          <StatusBar
            hidden={false}
            barStyle="light-content"
          />

          <WrappedComponent {...props} />
        </SafeAreaView>
      </View>
    );
  };
}
