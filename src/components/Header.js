import PropTypes from "prop-types";
import Button from "./Button";
import {useLocation} from 'react-router-dom'

const Header = ({ title, onHeaderAdd, showAdd }) => {
  const location = useLocation()
  
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        {location.pathname==='/' &&
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onHeaderAdd}
        />}
        {/* <h2 style={subtitleStyle}>{subtitle}</h2> */}
      </header>
    </div>
  );
};

Header.defaultProps = {
  subtitle: "by vedat",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
/*
const subtitleStyle={
    color:'red', 
    backgroundColor:'black'
}*/
export default Header;
