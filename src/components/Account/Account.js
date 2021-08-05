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
  TableInput,
  Edit,
  Button,
  ButtonEdit,
  ButtonWrapper,
} from "./Account.style";

import bgc from "../../resources/images/bgc1.jpg";

const Account = () => {
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState({});
  const [edit, setEdit] = useState(false);

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
      const { username, email, date, image, gender } = result.data;

      const birth = new Date(date);

      const day = birth.getDate();
      const month = months[birth.getMonth()];
      const year = birth.getFullYear();

      const password = "";

      setUserData([
        { value: username, name: "Username" },
        { value: email, name: "E-mail" },
        { value: `${day} ${month} ${year}`, name: "Birth date" },
        { value: password, name: "Password" },
        { value: gender, name: "Gender" },
      ]);

      setImage(require(`../../resources/images/${image}`).default);
    }
  };

  const verify = () => {
    if (!sessionStorage.getItem("token")) document.location.href = "/login";
  };

  useEffect(() => {
    verify();
    getAccountData();
  }, []);

  const handleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleChange = (e, type) => {
    const updatedUserData = [...userData];
    updatedUserData[e.target.dataset.index].value = e.target.value;

    setUserData(updatedUserData);
  };

  const sendDataToDataBase = async () => {
    // const result = await fetch("/get-account-data", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     token: localStorage.getItem("token"),
    //   }),
    // }).then((res) => res.json());

    const result = await fetch("/send-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        username: userData[0].value,
        email: userData[1].value,
        date: userData[2].value,
        password: userData[3].value,
        gender: userData[4].value,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") getAccountData();
  };

  return (
    <>
      <Wrapper bgc={bgc}></Wrapper>
      <Box>
        <Title>Account details</Title>
        <Img img={image}>
          <Edit>
            <i className="far fa-edit"></i>
          </Edit>
        </Img>
        <Content>
          <tbody>
            {userData.length
              ? userData.map((row, i) => (
                  <Row key={i}>
                    <TableLeft>{row.name}</TableLeft>
                    {!edit ? (
                      <TableRight>{row.value}</TableRight>
                    ) : (
                      <TableRight>
                        <TableInput
                          value={row.value}
                          onChange={handleChange}
                          data-index={i}
                          type="text"
                          placeholder={`New ${row.name}`}
                        ></TableInput>
                      </TableRight>
                    )}
                  </Row>
                ))
              : null}
          </tbody>
        </Content>
        <ButtonWrapper>
          <Button to="/player">Back to Player</Button>
          <ButtonEdit
            onClick={() => {
              handleEdit();
              if (edit) {
                sendDataToDataBase();
              }
            }}
          >
            {edit ? "Save" : "Edit"}
          </ButtonEdit>
        </ButtonWrapper>
      </Box>
    </>
  );
};

export default Account;
