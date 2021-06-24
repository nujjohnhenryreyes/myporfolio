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
import ComponentValidator from "simple-react-validator";
import Images from '../constants/Images'; 
const validator = new ComponentValidator();

const Index = () => {
  const mode = localStorage.getItem("light-mode");

  /* States */
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLightMode, setIsLightMode] = React.useState(([null, `true`].includes(mode))? true : false);
  const [errors, setErrors] = React.useState({});
  const [form, setForm] = React.useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    message: ""
  });
  const admin = {
    firstName: "Nuj John Henry",
    middleName: "Vera",
    lastName: "Reyes",
    designation: "Software Engineer",
    image: Images.GradPic,
    mobileNumber: "9650624447",
    emailAddress: "nujjohnhenryreyes@gmail.com",
    completeAddress: "145 Panapaan IV, Bacoor, Cavite"
  };


  /* Effects */
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  /* Handles */
  const handleOnChange = (e, stateName) => {
    form[stateName] = e.target.value;

    if (!e.target.value) {
      errors[stateName] = "Please enter your ";
    } else {
      if (stateName === "emailAddress") {
        errors[stateName] = (!validator.check(form[stateName], "required|email")) 
          ?  "Please enter a valid "
          :  null;
      } else {
        errors[stateName] = null;
      }
    }

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

  /*Components*/
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
                          CONTACT 
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
                    <Row>
                      <Col sm={12} style={styles.contactSection}>
                          <div className="row">                  
                              <div className="col-sm-5 col-md-12 col-lg-4 col-xl-3" style={styles.emailIconContainer}>
                                <img src={Images.Email} alt="" style={styles.emailIcon} />
                              </div>
                              <div className="col-sm-7 col-md-12 col-lg-8 col-xl-9" style={{ padding: "40px 10px 0px 10px" }}>
                                <div className="col">
                                    <label style={styles.title}>SEND ME AN EMAIL</label>
                                    <Form>
                                        <FormGroup>
                                            <Input 
                                             className={
                                              (!isLightMode) 
                                                ? classnames({ "border border-warning": errors.fullName }) 
                                                : classnames({ "border border-danger": errors.fullName }) 
                                              }
                                            type="text" 
                                            placeholder="Name" 
                                            onChange={(e) => handleOnChange(e, "fullName")} 
                                            style={styles.textbox}/>
                                            {
                                                errors.fullName
                                                ? <small 
                                                    className={`pl-2 ${
                                                      (!isLightMode) 
                                                        ? classnames({ "text-warning": errors.fullName }) 
                                                        : classnames({ "text-danger": errors.fullName }) 
                                                    }`}>* {errors.fullName} name</small>
                                                : null
                                            }
                                        </FormGroup>
                                        <FormGroup>
                                            <Input 
                                                className={
                                                  (!isLightMode) 
                                                    ? classnames({ "border border-warning": errors.emailAddress }) 
                                                    : classnames({ "border border-danger": errors.emailAddress }) 
                                                }
                                                type="text" 
                                                placeholder="What's your email?" 
                                                onChange={(e) => handleOnChange(e, "emailAddress")} 
                                                style={styles.textbox}/>
                                                {
                                                    errors.emailAddress
                                                    ? <small 
                                                        className={`pl-2 ${
                                                          (!isLightMode) 
                                                            ? classnames({ "text-warning": errors.emailAddress }) 
                                                            : classnames({ "text-danger": errors.emailAddress }) 
                                                        }`}>* {errors.emailAddress} email address</small>
                                                    : null
                                                }
                                        </FormGroup> 
                                        <FormGroup>
                                            <Input 
                                                className={
                                                  (!isLightMode) 
                                                    ? classnames({ "border border-warning": errors.subject }) 
                                                    : classnames({ "border border-danger": errors.subject }) 
                                                }
                                                type="text" 
                                                placeholder="Last Name" 
                                                onChange={(e) => handleOnChange(e, "subject")} 
                                                style={styles.textbox}/>
                                                {
                                                    errors.subject
                                                    ? <small 
                                                        className={`pl-2 ${
                                                          (!isLightMode) 
                                                            ? classnames({ "text-warning": errors.subject }) 
                                                            : classnames({ "text-danger": errors.subject }) 
                                                        }`}>* {errors.subject} subject</small>
                                                    : null
                                                }
                                        </FormGroup>
                                        <FormGroup>
                                            <Input 
                                                className={
                                                  (!isLightMode) 
                                                    ? classnames({ "border border-warning": errors.message }) 
                                                    : classnames({ "border border-danger": errors.message }) 
                                                }
                                                type="textarea"     
                                                placeholder="Your message ..." 
                                                onChange={(e) => handleOnChange(e, "message")} 
                                                style={styles.textarea} />
                                                {
                                                    errors.message
                                                    ? <small 
                                                        className={`pl-2 ${
                                                          (!isLightMode) 
                                                            ? classnames({ "text-warning": errors.message }) 
                                                            : classnames({ "text-danger": errors.message }) 
                                                        }`}>* {errors.message} message</small>
                                                    : null
                                                }
                                        </FormGroup>
                                        <div>
                                            <Button 
                                              type="button"
                                              onMouseEnter={(e) => handleMouseHover(e, 1)}
                                              onMouseLeave={(e) => handleMouseHover(e, 0)}
                                              onClick={(e) => e.preventDefault()}                                            
                                            style={styles.sendMessage}>Send Message</Button>
                                        </div>
                                    </Form>   
                                </div>
                              </div>
                          </div>
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
  contactSection: { 
    padding: "15px",
    marginBottom: "15px" 
  },
  emailIconContainer: { 
      padding: "0px 10px" 
  },
  emailIcon: { 
    width: "100%"
  },
  title: { 
    fontWeight: "bold", 
    marginBottom: "30px", 
    fontSize: "22px" 
    },
  textbox: { 
    maxWidth: "450px", 
    height: "50px", 
    borderRadius: "25px" 
  },
  textarea: { 
    maxWidth: "450px", 
    height: "50px", 
    borderRadius: "15px", 
    height: "140px", 
    overflow: "hidden", 
    paddingTop: "5px" 
  },
  sendMessage: { 
    width: "100%" , 
    maxWidth: "450px", 
    height: "50px", 
    borderRadius: "25px", 
    background: "#5f97d6", 
    border: "0px" 
  }
}

export default Index;
