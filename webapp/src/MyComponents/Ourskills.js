import React from "react"

function Ourskills(){
    return(
        <div className="skills-bground">            
            {/* Skills Section */}
            <div className="w3-container w3-xlarge w3-text-light-grey w3-padding-64">
            <div className="w3-row-padding">
                <div className="w3-col m6">
                <h1>Our Services.</h1>
                <div><h3>IT Consulting:</h3></div><p>Our expert consultants work closely with your business to understand your needs and provide strategic guidance on leveraging technology to achieve your goals.</p>
                <div><h3>Software Development:</h3></div><p> We design and develop custom software applications that streamline processes, enhance productivity, and improve customer experiences.</p>
                <div><h3>Cloud Solutions:</h3></div><p> Harness the power of the cloud with our scalable and secure cloud solutions, enabling seamless data storage, collaboration, and access from anywhere.</p>
                <div><h3>Cybersecurity:</h3></div><p> Protect your valuable data and networks from threats with our robust cybersecurity measures, including risk assessments, network security, and data encryption.</p>
                <div><h3>Managed IT Services:</h3></div><p> Focus on your core business while we handle your IT infrastructure, support, and maintenance, ensuring smooth operations and minimizing downtime.</p>
                <div><h3>Network Solutions:</h3></div><p> Ensure reliable and efficient communication within your organization with our network solutions, including network design, implementation, and optimization.</p>
               
                </div>
                <div className="w3-col m6" style={{paddingTop:'90px'}}>
                    
                    <p className="w3-wide"><i className="fa fa-camera w3-margin-right"></i>IT Consulting</p>
                    <div className="w3-grey skillspace">
                        <div className="w3-container w3-dark-grey w3-center" style={{width:'90%'}}>90%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-desktop w3-margin-right"></i>Software Development</p>
                    <div className="w3-grey skillspace">
                        <div className="w3-container w3-dark-grey w3-center" style={{width:'85%'}}>95%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-photo w3-margin-right"></i>Cloud Solutions</p>
                    <div className="w3-grey skillspace">
                        <div className="w3-container w3-dark-grey w3-center" style={{width:'75%'}}>85%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-photo w3-margin-right"></i>Cybersecurity</p>
                    <div className="w3-grey skillspace">
                        <div className="w3-container w3-dark-grey w3-center" style={{width:'75%'}}>75%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-photo w3-margin-right"></i>Managed IT Services</p>
                    <div className="w3-grey skillspace">
                        <div className="w3-container w3-dark-grey w3-center" style={{width:'75%'}}>85%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-photo w3-margin-right"></i>Network Solutions</p>
                    <div className="w3-grey skillspace">
                        <div className="w3-container w3-dark-grey w3-center" style={{width:'90%'}}>90%</div>
                    </div>
                </div>
            </div>
            </div>    
        </div>
    );
}

export default Ourskills