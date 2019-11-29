import React, { Component } from 'react';
import Svg, {
    Text,
    Rect,
  } from 'react-native-svg';
import TouchableOpacityG from './TouchableOpacityG'


export default class WorkplaceOnMap extends Component {

    setCoords = (x, y, width, orientation) => {
        let x_text = 0
        let y_text = 0
        let x_circle = 0
        let y_circle = 0
        if (orientation == 'down') {
            x_text = x + 0.425 * width
            y_text = y + 0.375 * width
            x_circle = x + 0.375 * width
            y_circle = y + 0.625 * width
        } else if (orientation == 'right') {
            x_text = x + 0.25 * width
            y_text = y + 0.575 * width
            x_circle = x + 0.625 * width
            y_circle = y + 0.375 * width
        } else if (orientation == 'up') {
            x_text = x + 0.425 * width
            y_text = y + 0.8 * width
            x_circle = x + 0.375 * width
            y_circle = y + 0.125 * width
        } else if (orientation == 'left') {
            x_text = x + 0.625 * width
            y_text = y + 0.575 * width
            x_circle = x + 0.125 * width
            y_circle = y + 0.375 * width
        }

        return [x_text, y_text, x_circle, y_circle]
    }

    render() {
        const { x } = this.props
        const { y } = this.props
        const { width } = this.props
        const { orientation } = this.props
        const { num } = this.props
        const coords = this.setCoords(x, y, width, orientation)
        
        return(
            <TouchableOpacityG onPress={() => this.props.setSeat(num)}>                             
                <Rect 
                    x={x} y={y} 
                    width={width} 
                    height={width} 
                    stroke="#0a3db3" 
                    rx='3' 
                    opacity={this.props.setOpacity(num)}/>
                <Text 
                    x={coords[0]} 
                    y={coords[1]} 
                    fontSize='10' 
                    fontWeight='bold'
                    // fontFamily='roboto-light' 
                    fill='#27ABE3'
                    >
                    {num}
                </Text>
                <Rect 
                    x={coords[2]} 
                    y={coords[3]} 
                    width={width / 4} 
                    height={width / 4} 
                    fill={this.props.setStatusCircle(num)} 
                    rx={width / 8} />
            </TouchableOpacityG>
        )
    }
}

