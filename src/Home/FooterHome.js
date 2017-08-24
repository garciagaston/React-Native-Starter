import React from "react";
import {
  Button,
  Icon,
  Text,
  Footer,
  FooterTab
} from "native-base";
import Config from "../config.js";

export default class FooterHome extends React.Component {

  render() {
    const footerButtons = Config.categories.map((category) => {
      return (
          <Button key={category.title} vertical>
            <Icon name={category.icon}/>
            <Text>{category.title}</Text>
          </Button>
      )
    })

    return (
      <Footer>
        <FooterTab>
          <Button active vertical>
            <Icon name="md-images"/>
            <Text>Todas</Text>
          </Button>
          { footerButtons }
        </FooterTab>
      </Footer>
    );
  }

}
