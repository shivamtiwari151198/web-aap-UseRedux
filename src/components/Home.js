import React from "react";

function Home(props) {
    console.warn("props",props)
    return (
        <div>
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
                    <button onClick={()=> props.addToCartHandler({price:10000,name:"i phon 14"})}>Add To Cart</button>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=> props.removeToCartHandler({price:10000,name:"i phon 14"})}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home