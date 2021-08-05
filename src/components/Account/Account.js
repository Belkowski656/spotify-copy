import { useEffect, useState } from "react";

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

import bgc from "../../resources/images/bgc1.jpg";

const Account = () => {
  const [userData, setUserData] = useState({});

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getAccountData = async () => {
    const result = await fetch("/get-account-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      const { username, email, date, image, password, gender } = result.data;

      const birth = new Date(date);

      const day = birth.getDate();
      const month = months[birth.getMonth()];
      const year = birth.getFullYear();

      setUserData({
        username,
        email,
        date: `${day} ${month} ${year}`,
        image: require(`../../resources/images/${image}`).default,
        password,
        gender,
      });
    }
  };

  const verify = () => {
    if (!sessionStorage.getItem("token")) document.location.href = "/login";
  };

  useEffect(() => {
    verify();
    getAccountData();
  }, []);

  return (
    <>
      <Wrapper bgc={bgc}></Wrapper>
      <Box>
        <Title>Account details</Title>
        <Img img={userData.image}>
          <Edit>
            <i className="far fa-edit"></i>
          </Edit>
        </Img>
        <Content>
          <tbody>
            <Row>
              <TableLeft>Username</TableLeft>
              <TableRight>{userData.username}</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
            <Row>
              <TableLeft>E-mail</TableLeft>
              <TableRight>{userData.email}</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
            <Row>
              <TableLeft>Birth date</TableLeft>
              <TableRight>{userData.date}</TableRight>
              <TableEdit>
                <i className="far fa-edit"></i>
              </TableEdit>
            </Row>
            <Row>
              <TableLeft>Sex</TableLeft>
              <TableRight>{userData.gender}</TableRight>
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
