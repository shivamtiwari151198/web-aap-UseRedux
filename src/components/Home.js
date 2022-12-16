import React from "react";

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1WrrxoQ_N2NiS_3T_Eos7DJV2OFVzX3A6w&usqp=CAU" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper item">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/gallery_images_uploads/5/8/588d43a38403fdceb3dfc30b8d537974ef88699e.JPG" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phon 14 Pro Max
                    </span>
                    <span>
                        Price:$10000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home