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
  TableRadio,
  Label,
  InputFile,
  InputToken,
  Edit,
  Button,
  Submit,
  Form,
  ButtonEdit,
  ButtonWrapper,
} from "./Account.style";

import bgc from "../../resources/images/bgc1.jpg";

const Account = () => {
  const [userData, setUserData] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState({});
  const [edit, setEdit] = useState(false);
  const [fileEdit, setFileEdit] = useState(false);

  const getAccountData = async () => {
    const result = await fetch("/get-account-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    }).then((res) => res.json());

    if (result.status === "ok") {
      setNewPassword("");
      const { username, email, date, image, gender, passwordLength } =
        result.data;

      const birth = new Date(date);

      const day = birth.getDate();
      const month = birth.getMonth() + 1;
      const year = birth.getFullYear();

      const password = "*".repeat(passwordLength);

      setUserData([
        { value: username, name: "Username" },
        { value: email, name: "E-mail" },
        {
          value: `${year}-${
            month.toString().length === 1 ? "0" + month : month
          }-${day.toString().length === 1 ? "0" + day : day}`,
          name: "Birth date",
        },
        { value: password, name: "Password" },
        { value: gender, name: "Gender" },
      ]);

      setImage(require(`../../resources/images/avatars/${image}`).default);
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

  const handleChange = (e) => {
    if (e.target.dataset.index === "3") {
      return setNewPassword(e.target.value);
    }

    const updatedUserData = [...userData];
    updatedUserData[e.target.dataset.index].value = e.target.value;

    setUserData(updatedUserData);
  };

  const sendDataToDataBase = async () => {
    const result = await fetch("/send-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
        username: userData[0].value,
        email: userData[1].value,
        date: userData[2].value,
        password: newPassword,
        gender: userData[4].value,
      }),
    }).then((res) => res.json());

    if (result.status === "ok") getAccountData();
  };

  const handleFileChange = () => {
    setFileEdit(true);
  };

  return (
    <>
      <Wrapper bgc={bgc}></Wrapper>
      <Box>
        <Title>Account details</Title>
        {/* <Form action="/upload" method="POST" encType="multipart/form-data"> */}
        <Img img={image}>
          {/* <Edit>
              <InputFile
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Edit> */}
        </Img>
        {/* <InputToken
          type="text"
          defaultValue={sessionStorage.getItem("token")}
          name="token"
        />
        {fileEdit ? <Submit>Save</Submit> : null} */}
        {/* </Form> */}
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
                        {row.name === "Username" ||
                        row.name === "E-mail" ||
                        row.name === "Password" ? (
                          <TableInput
                            value={
                              row.name === "Password" ? newPassword : row.value
                            }
                            onChange={handleChange}
                            data-index={i}
                            type={row.name === "Password" ? "password" : "text"}
                            placeholder={`New ${row.name}`}
                          ></TableInput>
                        ) : row.name === "Birth date" ? (
                          <TableInput
                            type="date"
                            value={row.value}
                            onChange={handleChange}
                            data-index={i}
                          ></TableInput>
                        ) : (
                          <>
                            <Label>
                              <TableRadio
                                type="radio"
                                name="gender"
                                value="male"
                                checked={
                                  userData[4].value === "male" ? true : false
                                }
                                onChange={handleChange}
                                data-index={i}
                              ></TableRadio>
                              male
                            </Label>
                            <Label>
                              <TableRadio
                                type="radio"
                                name="gender"
                                value="female"
                                checked={
                                  userData[4].value === "female" ? true : false
                                }
                                onChange={handleChange}
                                data-index={i}
                              ></TableRadio>
                              female
                            </Label>
                          </>
                        )}
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
