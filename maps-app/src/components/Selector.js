import React, { useRef, useLayoutEffect } from "react";

const Selector = (props) => {

    const selectorStyle = {
        position: 'absolute',
        top: '5%',
        right: '10%',
        border: '6px solid transparent',
        zIndex: 1,
        backgroundColor: 'lightGrey',
    };

    return (
        <div>
            <select className='mapSelector' style={ selectorStyle } name='maps' id='maps'>
                <option>World Happiness</option>
                <option>Water Per Capita</option>
                <option>Average Population Density</option>
            </select>
            {/* <h1 style={ selectorStyle }>This is the selector</h1> */}
        </div>
    )
}

export default Selector