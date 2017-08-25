import React from "react";
import {
  Button,
  Icon,
  Text,
  View
} from "native-base";
import Modal from 'react-native-modal'

export default class QuoteListModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      quote: props.quote,
      showModal: props.showModal
    };
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={true}
        onRequestClose={() => {
          alert("Modal has been closed.")
        }}
        >
       <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <Button onPress={() => {
            this.state.showModal(false);
          }}>
            <Text>Hide Modal</Text>
          </Button>

        </View>
       </View>
      </Modal>
    );
  }

}
