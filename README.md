# Color Picker
@chainplatform/colorpicker is a React Native library implement for react-native and react-native-web support select color.

<p align="center">
  <a href="https://github.com/ChainPlatform/react-native-color-picker/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/colorpicker">
    <img src="https://img.shields.io/npm/v/@chainplatform/colorpicker?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/colorpicker">
    <img src="https://img.shields.io/npm/dt/@chainplatform/colorpicker.svg"></img>
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/colorpicker">
    <img src="https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20web-blue"></img>
  </a>
  <a href="https://github.com/ChainPlatform/react-native-color-picker/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=doansan">
    <img src="https://img.shields.io/twitter/follow/doansan.svg?label=Follow%20@doansan" alt="Follow @doansan" />
  </a>
</p>

### Install
```
npm install @chainplatform/colorpicker --save
```
or
```
yarn add @chainplatform/colorpicker
```


### Usage

```js
import React from 'react';
import ColorPicker from '@chainplatform/colorpicker';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          
        };
    }

    setColor(datas) {
      console.log("datas ", datas);
    }

  render() {
    return (
      <View style={{flex:1}}>
        <ColorPicker
          default_color={"#FEFEFE"}
          key_color={"primary"}
          key_theme={"light"}
          getColor={(datas) => { this.setColor(datas); }}
          containerStyle={
            `height: ${styles.s37}px;
            border-width: ${styles.s0}px;
            width: ${styles.s37}px;
            border-radius: ${styles.s0}px;
            background-color: ${this.props.theme.colors.card};`
          } />
      </View>
    );
  }
}
```