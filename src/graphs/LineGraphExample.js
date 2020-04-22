import React from 'react'
import '../../node_modules/react-vis/dist/style.css'
import {
    HorizontalGridLines,
    LineMarkSeries,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis
} from "react-vis";

class LineGraphExample extends React.Component {

    render() {
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
        ];

        return (
            <div className={"line-graph"}>
                <XYPlot width={900} height={600}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    <LineMarkSeries
                        className="linemark-series-example"
                        style={{
                            strokeWidth: '3px'
                        }}
                        lineStyle={{stroke: 'red'}}
                        markStyle={{stroke: 'blue'}}
                        data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
                    />
                    <LineMarkSeries
                        className="linemark-series-example-2"
                        curve={'curveMonotoneX'}
                        data={data}
                    />
                </XYPlot>
            </div>
        )
    }
}

export default LineGraphExample