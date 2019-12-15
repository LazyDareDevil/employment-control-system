import React, { Component } from 'react';
import Svg, {
    Rect,
    Path,
    Line
  } from 'react-native-svg';
import WorkplaceOnMap from './WorkplaceOnMap'
import { AppRegistry } from 'react-native'

export default class Map extends Component {

    setOpacity = num => {
        if (num === this.props.seatNumber || this.props.seatNumber === null)
            return '1'
        else return '0.4'
    }

    setSeat = num => {
        if (this.props.areParamsSelected && this.props.workspaceNumber === null) {
            if (this.props.avialableSeats.indexOf(num) !== -1) {
                this.props.setLocalSeat(num)
            }
            else alert('You cannot choose it!')
        }
    }

    setStatusCircle = num => {
        if (!this.props.areParamsSelected) 
            return '#0a3db3'
        else if (this.props.avialableSeats.indexOf(num) === -1)
            return 'red'
        else return '#25E5B7'
    }

    * generator(num) {
        let coordsX =[]
        let coordsY = []
        if (num === 1 || num === 3 || num == 2) {
            coordsY = [170, 135, 135, 65, 65, 55]
            if (num === 1) coordsX = [30, 30, 75, 75, 30, 30]
            else if (num === 2) coordsX = [30, 30, 75, 75, 100, 100]
            else if (num === 3) coordsX = [30, 30, 75, 75, 170, 170]
        } else if (num === 5 || num === 4) {
            coordsX = num === 5 ? [30, 30, 75, 75, 90] : [30, 30, 75, 75, 60]
            coordsY = [170, 135, 135, 100, 100]
        } else if (num === 7 || num === 8 || num === 6) {
            coordsX = num === 7 ? [30, 30, 100, 100] : [30, 30, 170, 170]
            coordsY = num === 6 ? [170, 135, 135, 125] : [170, 135, 135, 145]
        }
        for (let i = 0; i < coordsX.length - 1; ++i) {
            yield React.createElement(
                Line,
                {
                    key: i,
                    x1: coordsX[i].toString(),
                    y1: coordsY[i].toString(),
                    x2: coordsX[i + 1].toString(),
                    y2: coordsY[i + 1].toString(),
                    stroke: 'red',
                    strokeWidth: '2',
                    strokeLinecap: 'round'
                }
            )
        }      
    }

    render() { 
        let locationX = 50
        let locationY = 150 // буду получать

        // let coordsX = [30, 30, 75, 75, 170, 170]  // буду получать
        // let coordsY = [170, 135, 135, 65, 65, 55]
        let path = null
        if (this.props.workspaceNumber !== null && !this.props.isWorkspaceChosen) {
            // path = [...this.generator(coordsX, coordsY)]
            path = [...this.generator(this.props.seatNumber)]
        }

        return(
            <Svg  width='100%' height='100%' viewBox='0 0 200 200' fill="none">

                <WorkplaceOnMap x={10} y={10} width={40} num={1}
                                orientation={'down'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <WorkplaceOnMap x={80} y={10} width={40} num={2}
                                orientation={'down'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <WorkplaceOnMap x={150} y={10} width={40} num={3}
                                orientation={'down'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <WorkplaceOnMap x={10} y={80} width={40} num={4}
                                orientation={'right'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <WorkplaceOnMap x={100} y={80} width={40} num={5}
                                orientation={'left'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <WorkplaceOnMap x={150} y={80} width={40} num={6}
                                orientation={'down'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <WorkplaceOnMap x={80} y={150} width={40} num={7}
                                orientation={'up'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <WorkplaceOnMap x={150} y={150} width={40} num={8}
                                orientation={'up'}
                                setSeat={this.setSeat}
                                setOpacity={this.setOpacity}
                                setStatusCircle={this.setStatusCircle} />

                <Path id="Arrow1" d="M30.3536 180.646C30.1583 180.451 29.8417 180.451 29.6464 180.646L26.4645 183.828C26.2692 184.024 26.2692 184.34 26.4645 184.536C26.6597 184.731 26.9763 184.731 27.1716 184.536L30 181.707L32.8284 184.536C33.0237 184.731 33.3403 184.731 33.5355 184.536C33.7308 184.34 33.7308 184.024 33.5355 183.828L30.3536 180.646ZM30.5 190V181H29.5V190H30.5Z" fill="#27ABE3"/>

                <Rect x={locationX - 5} y={locationY - 5} height='6' width='6' fill='#27ABE3' rx='3' />
                <Rect x={locationX - 6} y={locationY - 6} height='8' width='8' stroke='#27ABE3' rx='4' />
                
                {path}
            </Svg>
        )
    }
}

AppRegistry.registerComponent('Map', () => Map)


