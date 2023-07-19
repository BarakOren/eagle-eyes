import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
  }
  position: fixed;
  top: 30px;
  left: 30px;
  display: none;
  height: 22px;
  z-index: 100;
  padding: 14px 11px;
  border-radius: 50%;
  background-color: ${p => p.background ? 'rgba(39, 32, 83, 0)' : 'rgba(39, 32, 83, 1)'} ;
  cursor: pointer;
  transition: 1s all;
`;

const Relative = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    display: flex;
`


const Line = styled.span`
  transition: .3s all;
  width: ${p => p.transform ? '40px' : '30px'};
  height: 2px;
  opacity: ${p => p.opacity};
  background: ${p => p.transform ? 'rgb(39, 32, 83)' : 'white'};
  top: ${p => p.transform ? '50%' : '0'};
  left: ${p => p.transform ? '-6px' : 0};
  position: ${p => p.transform ? 'absolute' : 'block'};
  transform: ${p => p.transform ? `${p.rotate}` : 'rotate(0deg)'};
`;

const Hamburger = (props) => {
  const { menuToggle, setMenuToggle } = props;

  return (
    <Container
    background={menuToggle}
    onClick={() => setMenuToggle(!menuToggle)}
    >
    <Relative>
    <Line
      background={menuToggle}
      transform={menuToggle}
      rotate='rotate(45deg) 
      '
      />

      <Line
      background={menuToggle}
      opacity={menuToggle ? 0 : 1}
      />

      <Line
      background={menuToggle}
      transform={menuToggle}
      rotate='rotate(-45deg) 
      '
      />
    </Relative>
    </Container>
  );
};

export default Hamburger;