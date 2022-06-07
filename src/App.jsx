import React, { useEffect } from "react";
import Page1 from "./components/page1/page1";
import Page2 from "./components/page2/page2";
import Page3 from "./components/page3/page3";
import Page4 from "./components/page4/page4";

const App = () => {
  const [listData, setListData] = React.useState([]);

  React.useEffect(() => {
    getListData();
  }, []);

  const getListData = () => {
    fetch("https://academico.espm.br/testeapi/secao/listar")
      .then((response) => response.json())
      .then((data) => {
        setListData(data);
      });
  };

  return (
    <>
      <Page1 lista={listData} />
      <Page2 lista={listData} />
      <Page3 lista={listData} />
      <Page4 lista={listData} />
    </>
  );
};

export default App;
