import Row from "../Row/Row";

import {
  Wrapper,
  Header,
  Content,
  Img,
  Info,
  Title,
  Author,
  Songs,
  Panel,
  Play,
  Remove,
  Table,
  FirstRow,
  TableHeader,
} from "./ShowPlaylist.style";

import img from "../../resources/images/image.jpg";

const ShowPlaylist = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <Content>
            <Img img={img} />
            <Info>
              <Title>Playlist Name</Title>
              <Author>Example Name</Author>
            </Info>
          </Content>
        </Header>
        <Songs>
          <Panel>
            <Play>
              <i className="fas fa-play"></i>
            </Play>
            <Remove>Remove</Remove>
          </Panel>
          <Table cellSpacing="0">
            <tbody>
              <FirstRow>
                <TableHeader>#</TableHeader>
                <TableHeader>Title</TableHeader>
                <TableHeader>Author</TableHeader>
                <TableHeader>
                  <i className="far fa-clock"></i>
                </TableHeader>
              </FirstRow>
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
            </tbody>
          </Table>
        </Songs>
      </Wrapper>
    </>
  );
};

export default ShowPlaylist;
