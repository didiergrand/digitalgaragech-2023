import dgLogo from './../images/logo.png';
import dgLogoLight from './../images/logo-light.png';

function Logo() {
    return (
        <div id="logo">
            <img src={dgLogo} alt="" className="light" />
            <img src={dgLogoLight} alt="" className="dark" />
            <h1>Didier Grand, web designer, front end developer et passionné de photographie de paysage</h1> 
        </div>
    )
}
export default Logo