import styled from "styled-components";
import "./styles.css";
import Sidebar from "./components/Sidebar"  
import Main from "./components/Main"


export default function App() {
  return (
    <Container>
   <Sidebar />
   <Main/>
   </Container>
  );
};

const Container = styled.div`
display: flex;
min-height: 100vh;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #FFFFFF;
border-radius: 10px;
`;


