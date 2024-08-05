import React, { useState } from "react";
import { View, Text } from "react-native";
import { Dialog, Portal, Provider } from "react-native-paper";
import { Button } from "react-native-elements";

const Modal = (terlihat: any) => {
  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <View>
        <Portal>
          <Dialog visible={terlihat} onDismiss={hideDialog}>
            <Dialog.Title>ALERT</Dialog.Title>
            <Dialog.Content>
              <Text>sasa</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button />
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};
export default Modal;
