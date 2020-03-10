import React from 'react';
import Usluge from '../Pocetna/usluge';

const Pocetna = () => (
    <div>

            
            

       
            <section id="banner">
                <div className="content">
                    <header>
                        <h2>The future has landed</h2>
                        <p>And there are no hoverboards or flying cars.<br />
                        Just apps. Lots of mother flipping apps.</p>
                    </header>
                    <span className="image"><img src="images/pic01.jpg" alt="" /></span>
                </div>
                <a href="#one" className="goto-next scrolly">Next</a>
            </section>

      
            <section id="one" className="spotlight style1 bottom">
                <span className="image fit main"><img src="images/pic02.jpg" alt="" /></span>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-12-medium">
                                <header>
                                    <h2>Odio faucibus ipsum integer consequat</h2>
                                    <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
                                </header>
                            </div>
                            <div className="col-4 col-12-medium">
                                <p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
                                Blandit orci porttitor semper. Arcu phasellus tortor enim mi
                                nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
                                augue varius tempus lobortis porttitor accumsan consequat
                                adipiscing lorem dolor.</p>
                            </div>
                            <div className="col-4 col-12-medium">
                                <p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
                                adipiscing adipiscing metus massa. Blandit orci porttitor semper.
                                Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
                                mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
                                ipsum dolor nullam.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#two" className="goto-next scrolly">Next</a>
            </section>

       
            <section id="two" className="spotlight style2 right">
                <span className="image fit main"><img src="images/pic03.jpg" alt="" /></span>
                <div className="content">
                    <header>
                        <h2>Interdum amet non magna accumsan</h2>
                        <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
                    </header>
                    <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">Learn More</a></li>
                    </ul>
                </div>
                <a href="#three" className="goto-next scrolly">Next</a>
            </section>


            <section id="three" className="spotlight style3 left">
                <span className="image fit main bottom"><img src="images/pic04.jpg" alt="" /></span>
                <div className="content">
                    <header>
                        <h2>Interdum felis blandit praesent sed augue</h2>
                        <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
                    </header>
                    <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">Learn More</a></li>
                    </ul>
                </div>
                <a href="#four" className="goto-next scrolly">Next</a>
            </section>


            <Usluge />


            <section id="five" className="wrapper style2 special fade">
                <div className="container">
                    <header>
                        <h2>Magna faucibus lorem diam</h2>
                        <p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>
                    </header>
                    <form method="post" action="#" className="cta">
                        <div className="row gtr-uniform gtr-50">
                            <div className="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address" /></div>
                            <div className="col-4 col-12-xsmall"><input type="submit" value="Get Started" className="fit primary" /></div>
                        </div>
                    </form>
                </div>
            </section>

 
            <footer id="footer">
                <ul className="icons">
                    <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </footer>

        </div>
);
export default Pocetna;