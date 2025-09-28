import { Frame, List } from "@react95/core";
import { Mail } from "@react95/icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const contactLinks = [
  {
    icon: <FaGithub size={24} />, label: "GitHub", url: "https://github.com/ruyOllivere" },
  {
    icon: <FaLinkedin size={24} />, label: "LinkedIn", url: "https://linkedin.com/in/#" },
  {
    icon: <FaTwitter size={24} />, label: "Twitter (X)", url: "https://x.com/#" },
  {
    icon: <Mail variant="32x32_4" />, label: "Gmail", url: "mailto:ruylivinginadream@duck.com" },
];

const Contact = () => (
  <Frame bg="white" boxShadow="in" style={{ padding: 24, minWidth: 320 }}>
    <h2 style={{ marginTop: 0, marginBottom: 16, fontFamily: 'MS Sans Serif', fontSize: 22, color: '#222' }}>Contact Me</h2>
    <List>
      {contactLinks.map(({ icon, label, url }) => (
        <List.Item key={label} icon={icon}>
          <a href={url} target="_blank" style={{ textDecoration: 'none', color: '#222', fontFamily: 'MS Sans Serif' }}>
            {label}
          </a>
        </List.Item>
      ))}
    </List>
  </Frame>
);

export default Contact;