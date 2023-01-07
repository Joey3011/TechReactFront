import { Link } from 'react-router-dom'
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Public = () => {
    const content = (
        <div className='main__page'>
            <header>
                <div>Fat&Cap Repair</div>
                <div><Link to="/login">Login</Link></div>
            </header>
            <main className="public__main">
                <div className='body__page'>
                    <h1>Welcome to Fat&Cap Repair!</h1>
                    <h3>We provides a trained staff ready to meet your tech repair needs.</h3>
                    <p>We are located in a beautiful barangay in Capas</p>
                        <address className="public__addr">
                            Fat&Cap Repair:<br />
                            154 Brgy Talaga, Capas<br />
                            Tarlac City, 2315<br />
                            <a href="tel:+15555555555">(+63) 908-537-5470</a>
                        </address>
                </div> 
            </main>
            <div>
                <footer>
                    <div><FaFacebook  /></div>
                    <div><FaGithub  /></div>
                    <div><FaLinkedin  /></div>
                    <div><FaTwitter /></div>
                </footer>
                <p>Joey Hipolito © 2022</p>
            </div>
        </div>
    )
    return content
}
export default Public