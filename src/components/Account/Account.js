import {
  Wrapper,
  Box,
  Title,
  Img,
  Content,
  Row,
  TableLeft,
  TableRight,
  TableEdit,
  Edit,
  Button,
} from "./Account.style";

import img from "../../resources/images/portrait.jpg";
import bgc from "../../resources/images/bgc1.jpg";

const Account = () => {
  return (
    <>
      <Wrapper bgc={bgc}></Wrapper>
      <Box>
        <Title>Account details</Title>
        <Img img={img}>
          <Edit>
            <i className="far fa-edit"></i>
          </Edit>
        </Img>
        <Content>
          <tbody>
            <Row>
              <TableLeft>Username</TableLeft>
              <TableRight>Example</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
            <Row>
              <TableLeft>E-mail</TableLeft>
              <TableRight>example@gmail.com</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
            <Row>
              <TableLeft>Birth date</TableLeft>
              <TableRight>30 listopdada 2000</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
            <Row>
              <TableLeft>Sex</TableLeft>
              <TableRight>Male</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
            <Row>
              <TableLeft>Password</TableLeft>
              <TableRight>********</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
          </tbody>
        </Content>
        <Button to="/player">Back to Player</Button>
      </Box>
    </>
  );
};

export default Account;
