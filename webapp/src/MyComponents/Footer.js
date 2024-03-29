import React from "react"

function Footer(){
    return(
    <div>          
        <div className="w3-container w3-text-white w3-xlarge">
            <p>Ready to take your business to the next level? Get in touch with us today to discuss your technology needs. We are here to answer your questions and provide the best solutions for your business. Engage actively with us to benefit from our innovative solutions driven by cutting-edge technologies.</p>
        </div> 
        {/* Footer */}
        <div className="w3-row w3-section">      
            <div className="w3-third w3-container w3-black w3-large" style={{height:'250px' }}>
            <h2>Contact Info</h2>
            <p><i className="fa fa-map-marker" style={{width: '30px' }}></i> Office: No.7 Victor Olaiya Street Aguda Surulere Lagos, Nigeria</p>
            <p><i className="fa fa-phone" style={{width: '30px' }}></i> Phone: +2348034435840</p>
            <p><i className="fa fa-envelope" style={{width:'30px' }}> </i> Email: info@resoledge.com</p>
            <img src="/Logolast2.png" alt="" style={{width: '42%'}}></img>
            </div>
            <div className="w3-third w3-center w3-large w3-dark-grey w3-text-white" style={{height:'250px' }}>
            <h2>Contact Us</h2>
            <p>If you have an idea.</p>
            <p>What are you waiting for?</p>
            </div> 
            <div className="w3-third w3-center w3-large w3-grey w3-text-white" style={{height:'250px'}}>
                <h2>Like Us</h2>
                <i className="w3-xlarge fa fa-facebook-official"></i><br />
                <i className="w3-xlarge fa fa-pinterest-p"></i><br />
                <i className="w3-xlarge fa fa-twitter"></i><br />
                <i className="w3-xlarge fa fa-flickr"></i><br />
                <i className="w3-xlarge fa fa-linkedin"></i>
            </div>
        </div>      
        <div className="w3-container w3-text-grey">
            <p>Powered by Resoledge</p>
        </div>
    </div>
);
}

export default Footer;