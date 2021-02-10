import styled from "styled-components";

const NavbarBase = styled.nav`
  background: #d21e21;
  color: white;

  a {
    color: white;
    text-decoration: none;
    font-weight: light;
    font-size: 0.6rem;
    padding-left: 15px;
    cursor: pointer;
  }

  line-height: 1;
  height: 30px;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;

  display: flex;

  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
`;

const Navbar = styled(NavbarBase)`
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 200ms ${(props) => (props.show ? "ease-in" : "ease-out")};
  transform: ${(props) => (props.show ? "none" : "translate(0, -100%)")};
  .active {
    text-decoration: underline;
  }
`;

export default Navbar;
