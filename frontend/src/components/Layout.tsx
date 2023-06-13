import styled from "@emotion/styled";
import { AppScreen } from "@stackflow/plugin-basic-ui";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppScreen appBar={{ title: <AppTitle>귤러가요</AppTitle> }}>
      {children}
    </AppScreen>
  );
};

export default Layout;

const AppTitle = styled.header`
  font-family: "bazzi";
  font-size: 2rem;
  font-weight: normal;
  color: #f57d14;
  cursor: pointer;
  padding: 2rem 0;
`;
