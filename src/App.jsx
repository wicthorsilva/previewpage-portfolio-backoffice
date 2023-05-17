import React from "react";

import api from "./api";

import "./App.css";

import NavbarMenu from "./components/NavbarMenu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";


function App() {
  const [informacoes, setInformacoes] = React.useState({});
  const [about, setAbout] = React.useState({});
  const [projects, setProjects] = React.useState([]);
  const [contact, setContact] = React.useState({});

  const fetchDados = async () => {
    try {
      const informacao = await api.get('./informacoes/1');
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo,
      });

      const experienciaAcademica = await api.get('/experiencias?tipo=academica');
      const experienciaProfissional = await api.get('/experiencias?tipo=profissional');

      setAbout({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });

      const projects = await api.get('/projects');
      setProjects(projects.data);

    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  React.useEffect(() => {
    fetchDados();
}, []);

  return (
    <>


<BrowserRouter>
         <NavbarMenu></NavbarMenu>
         <Header informacoes={informacoes}></Header>
      <Routes>
          <Route index element={<About about={about} />} />
          <Route path="projects" element={<Projects projects={projects} />} />
          <Route path="contact" element={<Contact contact={contact} />} />
      </Routes>
    </BrowserRouter>

    <Footer></Footer>
    </>
  )
}

export default App;
