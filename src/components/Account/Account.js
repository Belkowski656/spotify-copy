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
  Edit,
  Button,
  ButtonEdit,
  ButtonWrapper,
} from "./Account.style";

import bgc from "../../resources/images/bgc1.jpg";

const Account = () => {
  const [userData, setUserData] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState({});
  const [avatar, setAvatar] = useState();
  const [edit, setEdit] = useState(false);

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

  const sendAvatar = async (avatar) => {
    const result = await fetch("/upload", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: avatar,
    }).then((res) => res.json());

    console.log(result);
  };

  const handleUpload = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatar);

    sendAvatar(formData);
  };

  return (
    <>
      <Wrapper bgc={bgc}></Wrapper>
      <Box>
        <Title>Account details</Title>
        <Img img={image}>
          <Edit>
            <i className="far fa-edit"></i>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <InputFile
                type="file"
                accept="image/*"
                name="avatar"
                onChange={handleUpload}
              />
              <input type="submit" />
            </form>
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
