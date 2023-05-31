import React from "react";
import './style.css';
function Portfoliocard(props) {
    return (
        <>
            <div className=" col-12 col-sm-4 mt-4">
                <div className="card" id="imgp">
                    <div className="card-body p-0" style={{overflow:'hidden'}}>
                        <img id="imgscale" style={{height:'250px', width:'100%'}} src={props.img} alt="" />
                        <p className="h5 text-white bg-dark ml-1" style={{position:'absolute',marginTop:'-245px'}}>{props.name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfoliocard;