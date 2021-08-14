import { Wrapper, Name, Button, Content, Box, Close } from "./Popup.style";

const Popup = ({ setPopup }) => {
  return (
    <>
      <Wrapper>
        <Box>
          <Content>
            <Name type="text" placeholder="Playlist Name" />
            <Button to="playlist">Create</Button>
            <Close onClick={() => setPopup(false)}>Close</Close>
          </Content>
        </Box>
      </Wrapper>
    </>
  );
};

export default Popup;
