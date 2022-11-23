import './About.css'
import profileImg from '../About/profilepic.png'

const About = () => {
    return ( 
        <div className="about-container">
            <div className="left-text">
                <div className="top-text-container">
                    <div className="software-dev">
                        Software-Developer
                    </div>
                    <div className="moto">
                        <p>Talk is cheap. <br></br> Show me the code.</p>
                    </div>
                    <div className="about-me">
                        <p>
                            I design and code beautifully simple things.
                            I am passionate about software development because it allows me to be creative and solve problems. I enjoy working with code and always strive to improve my skills.
                            And most importantly, I love what I do.
                        </p>
                    </div>
                </div>
                <div className="lets-chat">
                    <a href="http://www.google.com" target='_blank'>Let's Chat</a>
                </div>
            </div>

            <div className="image-container">
                <img src={profileImg} alt="ProfilePic" height={400} width={400} />
            </div>
        </div>
    );
}
 
export default About;