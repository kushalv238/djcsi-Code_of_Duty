import '../stylesheets/navbar.css';

const Navbar = (props) => {
  console.log(props.data)
  return <div id="navbar">
    <div className="person-wrapper">
      {
        props.data[0].firstName[0]
      }
    </div>
  </div>;
};

export default Navbar;
