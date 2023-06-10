import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import routes from "../../common/routes";
import { useNavigation } from '@react-navigation/native';

const UsersList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (text) => {
    setSearch(text);
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        name: "Mahmoud Mohamed",
        username: "Mahmoud_1499",
        email: "Mahmoud@gmail.com",
        address: {
            region: "ElIbrahmia",
            city: "Alexandria",
        },
        phone: "0109169325"
    },
    {
        id: 2,
        name: "Khaled Mohamed",
        username: "khaled11",
        email: "khaled@gmail.com",
        address: {
            region: "Wardian",
            city: "Alexandria",
        },
        phone: "0121541515"
    },
    {
        id: 3,
        name: "Mohamed Ahmed",
        username: "Mohamed",
        email: "Mohamed@gmail.com",
        address: {
            region: "Bahri",
            city: "Alexandria",
        },
        phone: "0521616512065"
    },
    {
        id: 4,
        name: "Sara Ahmed",
        username: "sara",
        email: "sara@gmail.com",
        address: {
            region: "Sidi Gaber",
            city: "Alexandria",
        },
        phone: "0156165165"
    },
    {
        id: 5,
        name: "Ali Ahmed",
        username: "Ali",
        email: "Ali@gmail.com",
        address: {
            region: "Miami",
            city: "Alexandria",
        },
        phone: "01581506840"
    },
  ]);

  const { navigate } = useNavigation()

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search ..."
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <FlatList
        style={styles.list}
        data={users.filter((user) => user.name.includes(search))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.user}>
            <Text style={[styles.userText]}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(routes.details, item);
              }}
              style={styles.btn}
            >
              <Text style={styles.appButtonText}>User Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    width: "95%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  list: {
    width: "95%",
    marginTop: 20,
    marginHorizontal: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    
    borderBottomColor: "black",
    borderRadius: 5,
    gap: 10,
    padding: 10,
    marginBottom: 10,
  },
  userText: {
    flex: 1,
    marginRight: 10,
  },
  inputError: {
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
  },
  counter: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "green",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  appButtonText: {
    color: "white",
  },
});

export default UsersList;
