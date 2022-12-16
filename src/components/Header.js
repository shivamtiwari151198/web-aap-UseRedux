import React from "react";

function Header(props) {
    console.warn("Home", props)
    return (
        <div>
            <div className="add-to-cart">
                {/* <span className="cart-count">{props.data.length}</span> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1WrrxoQ_N2NiS_3T_Eos7DJV2OFVzX3A6w&usqp=CAU" />
            </div>

        </div>
    )
}
export default Header