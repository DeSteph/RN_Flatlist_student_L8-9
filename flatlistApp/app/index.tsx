import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";

export default function Index() {
  type dataType = {
    id: string;
    title: string;
  };

  const DATA: dataType[] = [
    { id: "1", title: "First Item" },
    { id: "2", title: "Second Item" },
    { id: "3", title: "Third Item" },
  ];

  const [selectedId, setSelectedId] = useState<string>("1");

  const selectedList = (item: dataType) => {
    console.log(item.title);
    setSelectedId(item.id);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            extraData={selectedId}
            keyExtractor={(item: dataType) => item.id}
            ItemSeparatorComponent={() => (
              <ListItemSeparator color={colors.text.dark} />
            )}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectedList(item)}>
                <View
                  style={[
                    styles.titleContainer,
                    {
                      backgroundColor:
                        item.id === selectedId
                          ? colors.primary
                          : colors.secondary,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.titleText,
                      {
                        color:
                          item.id === selectedId
                            ? colors.text.light
                            : colors.text.dark,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
