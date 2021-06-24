import React from 'react';
import classnames from "classnames";
import {
  Row,
  Col, 
  Card,
  CardHeader,
  CardBody,
  CardImg, 
  CardTitle, 
  CardSubtitle, 
  CardText,
  Button,
  FormGroup,
  Form,
  Input  
} from 'reactstrap';
import SplashScreen from '../components/SplashScreen';
import SideNav from '../components/SideNav';
import Background from '../components/Background';
import Theme from '../constants/Theme';
import Lightbox from 'react-image-lightbox';
import ComponentValidator from "simple-react-validator";
import Images from '../constants/Images'; 
const validator = new ComponentValidator();

const Index = () => {
  const mode = localStorage.getItem("light-mode");

  /* States */
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLightMode, setIsLightMode] = React.useState(([null, `true`].includes(mode))? true : false);
  const [errors, setErrors] = React.useState({});
  const [admin, setAdmin] = React.useState({
      firstName: "Nuj John Henry",
      middleName: "Vera",
      lastName: "Reyes",
      designation: "Software Engineer",
      image: Images.GradPic,
      mobileNumber: "9650624447",
      emailAddress: "nujjohnhenryreyes@gmail.com",
      completeAddress: "145 Panapaan IV, Bacoor, Cavite"
  });
  const [form, setForm] = React.useState({
    username: "",
    password: ""
 });

  /* Effects */
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  /* Handles */
  const handleOnChange = (e, stateName) => {
    form[stateName] = e.target.value;
    errors[stateName] = (!e.target.value) ? "Please enter your" : null;

    setForm({ ...form });
    setErrors({ ...errors });
  }

  const handleMouseHover = (e, hover) => {
    return e.target.style.border = (!hover) 
        ? "0px" 
        : "1px solid #edede5";
  } 

  const switchMode = (e) => {
    setIsLightMode(e.target.checked);
    localStorage.setItem("light-mode", e.target.checked);
  }
  
  /* Components */
  if(!isLoading){
    return (
      <div className="main">  
      <Background />
        <div style={styles.frontScreen}>
           <Row style={styles.mainRow}> 
              <Col md={5} lg={4} xl={3} style={styles.colSideNav}>
                <SideNav admin={admin} isLightMode={isLightMode} />
              </Col>
              <Col md={7} lg={8} xl={9} style={styles.colBody}>
                <Card body style={(!isLightMode) ? styles.darkCard : styles.lightCard}>
                  <CardBody style={{color: `${(!isLightMode) ? Theme.COLORS.WHITE : Theme.COLORS.DARKTEXT}`}}>
                    <Row style={styles.bodyRow}>
                      <Col style={styles.pageTitle}>
                          SIGN-IN
                      </Col>
                      <Col style={styles.noPadding}>
                        <div style={styles.toggleContainer}>
                          <input
                              className="switch-checkbox"
                              id="switch-mode"
                              checked={isLightMode}
                              onChange={e => switchMode(e)}
                              type="checkbox"
                              style={{ display: "none" }}
                            />
                          <label
                              className={classnames({
                                "dark-mode-label": !isLightMode,
                                "light-mode-label": isLightMode,
                              })}
                              htmlFor="switch-mode"
                              style={{ margin: "0px" }}
                            > 
                              <span className={classnames({
                                "dark-mode-button": !isLightMode,
                                "light-mode-button": isLightMode,
                              })} /> 
                          </label>
                        </div>  
                      </Col>
                    </Row>
                    <Row style={styles.maxHeight}>
                      <Col sm={12} style={styles.signinSection}>
                        <Card body style={styles.card}> 
                              <Row style={styles.maxHeight}>
                                <Col style={styles.gradientBackground} className="d-none d-xl-block" xl={4} align="center">
                                  <div style={styles.imgDiv} className="vertical-center" >
                                    <CardImg src={`${require(`../assets/img/n-icon.png`)}`} style={styles.img} />
                                    <p>Welcome Administrator</p>
                                  </div>
                                </Col>
                                <Col style={{ height: "100%", position: "relative" }} lg={12} xl={8} align="center">
                                <div className="bg-primary" className="vertical-center" style={{ width: "100%" }}>
                                  <Form style={{ maxWidth: "450px" }}>
                                          <FormGroup>
                                              <Input 
                                                className={
                                                  (!isLightMode) 
                                                    ? classnames({ "border border-warning": errors.username }) 
                                                    : classnames({ "border border-danger": errors.username }) 
                                                }
                                              type="text" 
                                              placeholder="Email or phone number" 
                                              onChange={(e) => handleOnChange(e, "username")} 
                                              style={styles.textbox}/>
                                              <div style={{ textAlign: "left" }}>
                                                {
                                                    errors.username
                                                    ? <small 
                                                        className={`pl-2 ${
                                                          (!isLightMode) 
                                                            ? classnames({ "text-warning": errors.username }) 
                                                            : classnames({ "text-danger": errors.username }) 
                                                        }`}>* {errors.username} email or phone number</small>
                                                    : null
                                                }
                                              </div>
                                          </FormGroup>
                                          <FormGroup>
                                              <Input 
                                                   className={
                                                    (!isLightMode) 
                                                      ? classnames({ "border border-warning": errors.password }) 
                                                      : classnames({ "border border-danger": errors.password }) 
                                                  }
                                                  type="text" 
                                                  placeholder="Password" 
                                                  onChange={(e) => handleOnChange(e, "password")} 
                                                  style={styles.textbox}/>
                                                  <div style={{ textAlign: "left" }}>
                                                    {
                                                        errors.password
                                                        ? <small 
                                                            className={`pl-2 ${
                                                              (!isLightMode) 
                                                                ? classnames({ "text-warning": errors.password }) 
                                                                : classnames({ "text-danger": errors.password }) 
                                                            }`}>* {errors.password} password</small>
                                                        : null
                                                    }
                                                  </div>
                                          </FormGroup>
                                          <div>
                                              <Button 
                                                type="button"
                                                onMouseEnter={(e) => handleMouseHover(e, 1)}
                                                onMouseLeave={(e) => handleMouseHover(e, 0)}
                                                onClick={(e) => e.preventDefault()}                                            
                                              style={styles.btnLogin}>Sign In</Button>
                                          </div>
                                      </Form>   
                                </div>
                                </Col>
                              </Row>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>     
              </Card>
              </Col>
           </Row>
        </div>
    </div>
    );
  }else{
    return (<SplashScreen />);
  }
}

const styles = {
  frontScreen: { 
    height: "100%", 
    width: "100%", 
    position: "relative", 
    zIndex: "2",
    overflowX: "hidden",
    padding: "2%"
  },
  lightCard: { 
    height: "100%", 
    paddingTop: "0px",
    overflow: "auto" 
  },
  darkCard: { 
    height: "100%", 
    paddingTop: "0px" ,
    overflow: "auto",
    backgroundColor: Theme.COLORS.DARKMODE
  },
  mainRow: { 
    height: "100%", 
    padding: "3px"
  },
  colSideNav: { 
    paddingRight: "10px", 
    marginBottom: "10px"
  },
  colBody: { 
    marginBottom: "10px", 
    height: "100%" 
  },
  bodyRow: { 
    borderBottom: "1px solid " + Theme.COLORS.MUTED 
  },
  pageTitle: { 
    padding: "0px", 
    fontSize: "23px", 
    fontWeight: "bold" 
  },
  noPadding: { 
    padding: "0px"
  },
  toggleContainer: { 
    padding: "0px", 
    float: "right"  
  },
  signinSection: { 
    padding: "15px",
    marginBottom: "15px" 
  },
  textbox: { 
    maxWidth: "450px", 
    height: "50px", 
    borderRadius: "25px" 
  },
  btnLogin: { 
    width: "100%" , 
    maxWidth: "450px", 
    height: "50px", 
    borderRadius: "25px", 
    background: "#5f97d6", 
    border: "0px" 
  },
  maxHeight: { 
    height: "100%" 
  },
  card: { 
    height: "100%", 
    padding: "0px", 
    overflow: "hidden", 
    border: "0px", 
    backgroundColor: "transparent"
  },
  gradientBackground: { 
    background: "linear-gradient(to bottom, #6fa5dd 0%, #ffccff 93%)" 
  },
  imgDiv: { 
    padding: "0px 10px 50px 10px", 
    fontSize: "26px", 
    color: Theme.COLORS.DARKTEXT, 
    width: "100%" 
  },
  img: { 
    height: "150px", 
    width: "150px" 
  }
}

export default Index;
