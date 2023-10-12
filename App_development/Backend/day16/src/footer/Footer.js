import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook ,FaInstagramSquare,FaGitSquare} from 'react-icons/fa';





import './footer.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  color:white;  
  cursor: pointer;
  text-decoration:none;
`;
class Footer extends React.Component {
  render() {
    return (
      <div class="contact-area" id="contact">
        <div class="container-foot">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                    <StyledDiv>
                    <a href="/home" style={{"text-decoration":"none"}} className="custom-link">TimeNexa</a>
                  </StyledDiv>
                        <p className="pfoot">Want to save time? Get on top of your tasks with Nexa.. </p>
                        <div class="hr"></div>
                        <h6>Coimbatore , TamilNadu.</h6>
                        <h6>+91 7358863544<span>|</span>+91 9944009654 </h6>
                        <h6>< Link to='/privacy'  >
                        PRIVACY POLICY </Link>
                        |< Link to='/privacy'  >TERMS AND CONDITIONS </Link>|<Link to='/privacy'> FREQUENTLY ASKED QUESTIONS </Link></h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href="">< FaFacebook/></a></li>
                                <li><a class="hover-target" href="">< FaInstagramSquare/></a></li>
                                <li><a class="hover-target" href="">< FaGitSquare/></a></li>
                              
                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
  
    <footer>
        <p>Copyright &copy; 2023 All Rights Reserved.</p>
    </footer>
    </div>
    );
  }
}
export default Footer;
