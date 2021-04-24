import React from 'react';
import '../css/App.css';
import '../css/StartPage.css';
import Logo1 from '../imgs/Logo1.png'
import Logo2 from '../imgs/Logo2.png'
// I used a image for the nav, because I know that you can just simply paste your
// nav Component in. So I saw no reason to use some hours for a nav that isn't gonna get used :c
import navBcImLazyLol from '../imgs/navForLazyPeopleLol.png'

const redirectDownload = () => {
    window.location.href = "https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86";
}

function StartPage() {
    return (
        <div className="home">
            <div className="position-the-nav-for-lazy-poeple">
                <img src={navBcImLazyLol} alt="nav for idiots like me lol" />
            </div>
            <div className="flex-home">
                <div className="position-flex">
                    <img className="logo1" src={Logo1} alt="discord logo" />
                    <div className="button-logo">
                        <img className="logo2" src={Logo2} alt="discord logo" />
                        <button onClick={redirectDownload}><svg width="29" height="29" viewBox="0 0 24 24" className="icon-nuGd5b"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg><p>Download für Windows</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StartPage;