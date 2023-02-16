import badge from './../images/badge.png';
import badgeLight from './../images/badge-light.png';

function Welcome() {
    return (
        <blockquote id="hello">
            <div id="helloicon">                
                <img src={badge} alt="" className="light" />
                <img src={badgeLight} alt="" className="dark" />
            </div>
            <div id="hellotext">
                <h1 className="mb-6">Front end developer web designer et passionné de photographie de paysage</h1>
                <p>Bienvenue, Je suis Didier Grand, frontend developer chez Scott Sports, et aussi web designer et photographe .En parcourant ces pages vous allez découvrir mon univers et mes réalisations personnelles. Bonne visite !</p>
             </div>              
        </blockquote>
    )
}
export default Welcome