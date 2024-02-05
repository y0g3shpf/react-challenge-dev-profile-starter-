import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.photoName} alt="photo" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Yogesh Khadka</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem porro
        temporibus suscipit expedita, dolor accusamus cupiditate culpa est
        debitis, similique doloremque.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="📄" color="red" />
      <Skill name="CSS" emoji="🎨" color="yellow " />
      <Skill name="Javascript" emoji="⚡️" color="blue" />
      <Skill name="Bootstrap" emoji="📦" color="#f0f8ff" />
      <Skill name="Github" emoji="🐙" color="magenta" />
      <Skill name="react" emoji="⚛️" color="orange" />
      <Skill name="Tailwind" emoji="🌈" color="aqua" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.emoji}
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
