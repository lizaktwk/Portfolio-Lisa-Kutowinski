import "./Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div id="nav-left">Home</div>
      <div className="nav-center">Projects</div>
      <div className="nav-center">Tech</div>
      <div id="nav-right">Contact</div>
    </nav>
  );
}
