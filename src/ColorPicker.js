import { Component, createRef } from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { formHTML } from '../sources/Form';
import { DEFAULT_USER_AGENT } from '../helpers';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.webFileRef = createRef(null);
    }

    getContent() {
        let loadContent = null;
        const default_color = typeof this.props.default_color != "undefined" ? this.props.default_color : "#ff0000";
        const containerStyle = typeof this.props.containerStyle != "undefined" ? this.props.containerStyle : "";
        const key_color = typeof this.props.key_color != "undefined" ? this.props.key_color : "";
        const key_theme = typeof this.props.key_theme != "undefined" ? this.props.key_theme : "";
        loadContent = { html: formHTML(default_color, containerStyle, key_color, key_theme) };
        return loadContent;
    }

    render() {
        const content = this.getContent();
        return (
            <WebView
                ref={this.webFileRef}
                scalesPageToFit={true}
                overScrollMode={"never"}
                nestedScrollEnabled={true}
                automaticallyAdjustContentInsets={true}
                javaScriptEnabled={true}
                originWhitelist={['*']}
                mixedContentMode="compatibility"
                {...this.props}
                source={content}
                userAgent={
                    typeof this.props.forceAndroidAutoplay != "undefined"
                        ? Platform.select({ android: DEFAULT_USER_AGENT, ios: '' })
                        : ''
                }
                onShouldStartLoadWithRequest={event => { return true; }}
                onMessage={(event) => {
                    if (
                        typeof event.nativeEvent.data === "string" &&
                        typeof JSON.parse(event.nativeEvent.data) === "object"
                    ) {
                        const datas = JSON.parse(event.nativeEvent.data);
                        if (typeof this.props.getColor != "undefined") {
                            this.props.getColor(datas.datas);
                            return;
                        }
                    }
                    if (typeof this.props.onMessage != "undefined") {
                        this.props.onMessage(event.nativeEvent.data);
                    }
                }}
            />
        );
    }
};