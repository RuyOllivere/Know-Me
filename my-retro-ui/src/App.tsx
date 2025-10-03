import { AGENTS, ClippyProvider } from "@react95/clippy";
import Login from "./components/Login";
import WindowBar from "./components/WindowBar";
import { useAuth } from "./store/auth";
import DesktopIcon from "./components/DesktopIcon";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Game from "./components/Game";
import Photos from './components/Photos';
import BackgroundMusic from './components/BackgroundMusic';
import Calculator from './components/Calculator';
import pic from '../public/assets/image.png';
import Chat from './components/Chat';

import { Amovie2, CalcSc, Plugin, Joy102, Wordpad, Mail, Star } from "@react95/icons";
// Inetcpl1313, 
import { Video } from "@react95/core";

import logo from './buda.png';

function App() {
  const authinicated = useAuth((state) => state.authinicated);

  const CustomIcon = () => (
    <img src={pic} alt="Custom Icon" style={{ width: 32, height: 32 }} />
  );

  return (
    <div
      style={{
        width: "100%",
        background: "#181818ff",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <img
        src={logo}
        width={400}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -70%)",
          filter: "invert(100%)",
        }}
      />

      {!authinicated && <Login />}

      {authinicated && (
        <ClippyProvider agentName={AGENTS.ROVER}>
          <BackgroundMusic />

          <div className="fixed">
            <DesktopIcon icon={<Amovie2 variant="32x32_4" />} name="Video">
              <Video w="420px" src="/assets/gameplayLovely.mp4" />
            </DesktopIcon>

            <DesktopIcon
              width={900}
              height={900}
              icon={<Plugin variant="32x32_4" />}
              name="Photos"
            >
              <Photos />
            </DesktopIcon>

            <DesktopIcon
              width={650}
              icon={<Wordpad variant="32x32_4" />}
              name="Resume"
            >
              <Resume />
            </DesktopIcon>

            <DesktopIcon
              width={400}
              height={400}
              icon={<Joy102 variant="32x32_4" />}
              name="Chess.exe"
            >
              <Game />
            </DesktopIcon>

            <DesktopIcon
              width={400}
              icon={<Mail variant="32x32_4" />}
              name="Contact"
            >
              <Contact />
            </DesktopIcon>

            <DesktopIcon
              width={400}
              icon={<CalcSc variant="32x32_4" />}
              name="Calculator"
            >
              <Calculator/>
            </DesktopIcon>

            
            <DesktopIcon
              width={400}
              icon={<Star variant="32x32_4" />}
              name="Chat.exe"
            >
              <Chat />
            </DesktopIcon>

            <a href="https://www.instagram.com/portraitaway">
              <DesktopIcon
                width={400}
                height={400}
                icon={<CustomIcon/>}
                name="Instagram"
                children = {null}
              >
              </DesktopIcon>
            </a>
          </div>

          <WindowBar />
        </ClippyProvider>
      )}
    </div>
  );
}

export default App;
