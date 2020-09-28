import React, { useEffect, useMemo, useReducer } from 'react';
import { StyleSheet, Button } from 'react-native';
import io from "socket.io-client";
import axios from "axios";

import { Text, View } from '../components/Themed';

const initialState = { messages: [""] };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "hoge":
      return { messages: [...state.messages, action.payload] };
    default:
      throw new Error();
  }
};

export default function CommunityScreen() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const socket = useMemo(
    () =>
      io.connect("http://192.168.10.104:3000", {
        transports: ["websocket"],
        reconnectionAttempts: 5,
      }),
    []
  );

  useEffect(() => {
    if (socket) {
      socket.on("message", (msg: string) => {
        dispatch({ type: "hoge", payload: msg });
      });
    }

    if (!socket) {
      axios
        .get("http://localhost:3000/api/v1/comment/hoge")
        .then((result: any) => {
          dispatch({ type: "hoge", payload: result.data.message });
        })
        .catch(() => {
          console.log("失敗");
        });
    }
  }, []);

  return (
    <View style={styles.container}>
      {state.messages.map((message, index) => {
        return (
          <Text key={index} style={styles.title}>
            {message}
          </Text>
        );
      })}
      <Button
        title="emit"
        onPress={(e) => {
          e.preventDefault();
          socket.emit("message", "from React");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
