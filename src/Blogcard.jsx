import React from "react";
function Blogcard(props) {
    return (
        <>
            <div className="col-12 col-lg-6 mt-4">
                <div className="card" id="aaa" style={{overflow:'hidden'}}>
                    <div className="card-body p-0">
                        <h4 className="bg-dark text-white p-1" style={{position:'absolute'}}>UI</h4>
                        <img id="scimg" style={{height:'100%' , width:'100%'}} src={props.img} alt="" />
                    </div>
                </div>
                <span className="text-white">{props.date}</span>
                <p className="text-white h4 text-bold">{props.desc}</p>
            </div>
        </>
    )
}
export default Blogcard;