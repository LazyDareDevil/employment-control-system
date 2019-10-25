import React, { Component } from 'react';
import Svg, {
    Circle,
    G,
    Text,
    Rect,
    Path
  } from 'react-native-svg';

export default class Map extends Component {

    state = {
        chosenSeat: this.props.workspaceNumber
    }

    setOpacity = num => {
        if (num === this.state.chosenSeat || this.state.chosenSeat === null)
            return '1'
        else return '0.4'       
    }

    setSeat = num => {
        if (this.props.areParamsSelected) {
            if (this.props.avialableSeats.indexOf(num) !== -1) {
                this.setState({
                    chosenSeat: num
                })

                this.props.setLocalSeat(num)
            }
            else alert('You cannot choose it!')
        }
    }

    setStatusCircle = num => {
        if (!this.props.areParamsSelected) 
            return '#234798'
        else if (this.props.avialableSeats.indexOf(num) === -1)
            return 'red'
        else return '#25E5B7'
    }

    render() { 
        return(
                <Svg  width='100%' height='100%' viewBox='0 0 200 200' fill="none">

                    <G id='1' opacity={this.setOpacity(1)} onLongPress={() => this.setSeat(1)}>  
                        <Rect id="seat1" x='10' y='10' width='40' height='40' stroke="#234798" />
                        <Text x='27' y='25' fontSize='10' fontWeight='bold' fill='#27ABE3'>1</Text>
                        <Circle x='30' y='40' r='5' fill={this.setStatusCircle(1)} />
                    </G> 

                    <G id='2' opacity={this.setOpacity(2)} onLongPress={() => this.setSeat(2)}>
                        <Rect id="seat2" x="80" y="10" width="40" height="40" stroke="#234798"/>
                        <Text x='97' y='25' fontSize='10' fontWeight='bold' fill='#27ABE3'>2</Text>
                        <Circle x='100' y='40' r='5' fill={this.setStatusCircle(2)}/>
                    </G>

                    <G id='3' opacity={this.setOpacity(3)} onLongPress={() => this.setSeat(3)}>
                        <Rect id="seat3" x="150" y="10" width="40" height="40" stroke="#234798"/>
                        <Text x='167' y='25' fontSize='10' fontWeight='bold' fill='#27ABE3'>3</Text>
                        <Circle x='170' y='40' r='5' fill={this.setStatusCircle(3)} />
                    </G>

                    <G id='4' opacity={this.setOpacity(4)} onLongPress={() => this.setSeat(4)}>
                        <Rect id="seat4" x="10" y="80" width="40" height="40" stroke="#234798"/>
                        <Text x='20' y='103' fontSize='10' fontWeight='bold' fill='#27ABE3'>4</Text>
                        <Circle x='40' y='100' r='5' fill={this.setStatusCircle(4)} />
                    </G>

                    <G id='5' opacity={this.setOpacity(5)} onLongPress={() => this.setSeat(5)}>
                        <Rect id="seat5" x="100" y="80" width="40" height="40" stroke="#234798"/>
                        <Text x='125' y='103' fontSize='10' fontWeight='bold' fill='#27ABE3'>5</Text>
                        <Circle x='110' y='100' r='5' fill={this.setStatusCircle(5)} />
                    </G>

                    <G id='6' opacity={this.setOpacity(6)} onLongPress={() => this.setSeat(6)}>
                        <Rect id="seat6" x="150" y="80" width="40" height="40" stroke="#234798"/>
                        <Text x='167' y='95' fontSize='10' fontWeight='bold' fill='#27ABE3'>6</Text>
                        <Circle x='170' y='110' r='5' fill={this.setStatusCircle(6)} />
                    </G>

                    <G id='7' opacity={this.setOpacity(7)} onLongPress={() => this.setSeat(7)}>
                        <Rect id="seat7" x="80" y="150" width="40" height="40" stroke="#234798"/>
                        <Text x='97' y='182' fontSize='10' fontWeight='bold' fill='#27ABE3'>7</Text>
                        <Circle x='100' y='160' r='5' fill={this.setStatusCircle(7)} />
                    </G>

                    <G id='8' opacity={this.setOpacity(8)} onLongPress={() => this.setSeat(8)}>
                        <Rect id="seat8" x="150" y="150" width="40" height="40" stroke="#234798"/>
                        <Text x='167' y='182' fontSize='10' fontWeight='bold' fill='#27ABE3'>8</Text>
                        <Circle x='170' y='160' r='5' fill={this.setStatusCircle(8)} />
                    </G>

                    <Path id="Arrow1" d="M30.3536 180.646C30.1583 180.451 29.8417 180.451 29.6464 180.646L26.4645 183.828C26.2692 184.024 26.2692 184.34 26.4645 184.536C26.6597 184.731 26.9763 184.731 27.1716 184.536L30 181.707L32.8284 184.536C33.0237 184.731 33.3403 184.731 33.5355 184.536C33.7308 184.34 33.7308 184.024 33.5355 183.828L30.3536 180.646ZM30.5 190V181H29.5V190H30.5Z" fill="#27ABE3"/>
                </Svg>
        )
    }
}
