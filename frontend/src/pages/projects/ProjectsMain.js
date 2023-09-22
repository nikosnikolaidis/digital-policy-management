import React, { useState, useEffect } from "react";
import Project from "./Project";
import "./css/ProjectsMain.css";

var projectsData = [
  {
    id: 751339,
    acronym: "TPANN",
    title: "Tensor Processing on FPGAs for Artificial Neural Networks",
    startDate: "2017-05-01",
    endDate: "2018-04-30",
    objective:
      "Artificial neural networks have been shown to offer a powerful computing approach to encounter many classification problems as in synthetic vision (e.g. autonomous driving) and artificial intelligence (e.g. AlphaGo). While their implementations are often based on power-hungy CPU- and GPU-installations, first researchers have delivered initial application-specific solutions that demonstrate FPGAs to be a feasible and efficient alternative. This proposal aims at providing a generic reference implementation of ANNs on FPGAs that is tunable towards various application needs by parametrization. Since individual FPGA designs establish enormous costs of entry due to a higher engineering effort on a lower abstration level, an IP core that is available out of the box is a great R&D incentive that enables more researchers and engineers to embrace the emerging efficient heterogeneous computing more quickly and produce innovations and more compact and more efficient products on this basis. Besides this technological advance, this proposal enables a researcher with an enormous experience in mapping computations into FPGA hardware to make a valuable industrial experience in an international context with the major company in this domain. His expertise is ideally complemented with the application experience available at Xilinx who will benefit from opening a new growing market for manufactured FPGA devices. The development of the researcher's skill set is explictly addressed by complementing his academic background with industrial experience and scheduled cooperate trainings. As part of the dissemination activities, his network into the FPGA community is strengthened and approaches towards the ANN community are made.",
    totalCost: "93933",
    programme: "H2020-EU.1.3.2.",
    topics: "MSCA-IF-2016",
    frameworkProgramme: "H2020",
    call: "H2020-MSCA-IF-2016",
    fundingScheme: "MSCA-IF-EF-SE",
    coordinator: {
      id: 968654417,
      name: "XILINX IRELAND UNLIMITED COMPANY",
      acronym: "XILINX IRE",
      country: "IE",
      street: "LOGIC DRIVE CITYWEST BUSINESS CAMPU",
      city: "DUBLIN",
      postCode: "D24T683",
      organizationUrl: "",
      vatNumber: "IE6590265L",
    },
    participants: [],
  },
  {
    id: 704476,
    acronym: "FPGA Accelerators",
    title:
      "Energy Efficient FPGA Accelerators for Graph Analytics Applications",
    startDate: "2016-04-01",
    endDate: "2018-03-31",
    objective:
      "It is reported that data centers today consume up to 3 percent of the global electricity usage. This is expected to increase in the upcoming years as the amount of data processed in the cloud increases substantially. An effective way for data centers to achieve better performance and energy efficiency is to perform computation on specialized processing elements. Field programmable gate arrays (FPGAs) enable customization of logic after manufacturing to achieve better energy efficiency compared to general purpose processors. Today, prominent hardware and software companies are investing in data center solutions that integrate FPGAs with CPUs, and significant energy consumption and performance improvements have been demonstrated for several data center applications. However, the main barrier for wide spread adoption of FGPAs in data centers is the cost of programming, which typically requires months of development time by hardware designers. This makes it unaffordable for small-to-medium software companies to effectively utilize the available FPGAs. The purpose of this project is to lower this barrier for emerging graph analytics applications for knowledge discovery and machine learning. The basic idea is to use an abstract interface that allows a domain expert to describe an application as a set of serial functions defined per vertex and/or edge. We propose a customizable implementation template that automatically maps the abstract user functions to massively parallel FPGA implementations. The proposed template will hide from users many low level implementation details such as parallelization, pipelining, synchronization, memory access optimization, race and deadlock avoidance, etc. This will help bridge the gap between high level application descriptions and costly hardware implementations. Our preliminary architecture simulations have shown that the proposed graph processors can achieve significantly better energy efficiency than general purpose processors.",
    totalCost: "145845,6",
    programme: "H2020-EU.1.3.2.",
    topics: "MSCA-IF-2015-EF",
    frameworkProgramme: "H2020",
    call: "H2020-MSCA-IF-2015",
    fundingScheme: "MSCA-IF-EF-ST",
    coordinator: {
      id: 999923628,
      name: "BILKENT UNIVERSITESI VAKIF",
      acronym: "BILKENTUNIVERSITY BILIM KENTI",
      country: "TR",
      street: "ESKISEHIR YOLU 8 KM",
      city: "BILKENT ANKARA",
      postCode: "06800",
      organizationUrl: "www.bilkent.edu.tr",
      vatNumber: "TR1750021979",
    },
    participants: [],
  },
  {
    id: 821969,
    acronym: "OPERA",
    title:
      "Space Qualification and Validation of High Performance European Rad-Hard FPGA",
    startDate: "2019-01-01",
    endDate: "2021-12-31",
    objective:
      "The OPERA project sets clear and measurable main objectives to reach a TRL 7 as follows: \n1. Validation and tradeoff by end users of NanoXplore rad-hard FPGA (NG-LARGE and NG-ULTRA) – TRL 6 achieved. \n2. Development and testing of very complex ceramic hermetic package CGA 1752 – TRL 6 achieved  \n3. Space ESCC evaluation of NanoXplore's rad-hard FPGA (NG-LARGE) – TRL 7 achieved  \n\nThe proposed activity is part of a jointly agreed space FPGA roadmap between EU, the European Space Agency, the CNES and the key European space equipment manufacturers. It is supporting the Strategic Research Agenda of the European Space Technology Platform. The proposed activities will address applications beyond the space market such as avionic, energy and transport. \n\nOPERA is set up to validate and do the ESCC evaluation of advanced rad-hard NG-LARGE FPGA with minimum risk execution and best product time to market. The project will give access to state of the art qualified rad-hard FPGA NG-LARGE and prepare future applications for the most advanced FPGA in the world NG-ULTRA. The project will enable the two European largest satellite vendors Thales Alenia Space and Airbus DS to evaluate both NG-LARGE and NG-ULTRA to better assess which FPGA is more suitable for a defined application. NX is developping a familly of FPGA to adress the whole space market and it is key to validate the limit and the possibilities for each FPGA. TAS and ADS will also start developping state of the art applications to speed up products dissemination.   OPERA is fully in line with ESA / EU activities and will merge outcomes from different projects to reach a TRL 7:\nESCC evaluate rad-hard FPGA developped in the BRAVE project \nTake benefit of the programming software tools (“NanoXmap”) improved in the VEGAS (H2020) project \nNG-ULTRA development from DEMETER (ECSEL), DAHLIA (H2020) and MARS (PSPC) projects",
    totalCost: "3059246,25",
    programme: "H2020-EU.2.1.6.1.;H2020-EU.2.1.6.2.",
    topics: "SPACE-10-TEC-2018-2020",
    frameworkProgramme: "H2020",
    call: "H2020-SPACE-2018",
    fundingScheme: "RIA",
    coordinator: {
      id: 899404080,
      name: "NANOXPLORE",
      acronym: "NANOXPLORE",
      country: "FR",
      street: "1 avenue de la Cristallerie",
      city: "SEVRES",
      postCode: "92310",
      organizationUrl: "",
      vatNumber: "FR21794484808",
    },
    participants: [
      {
        id: 999488195,
        name: "THALES ALENIA SPACE ITALIA SPA",
        acronym: "TASITALIA",
        country: "IT",
        street: "VIA SACCOMURO 24",
        city: "ROMA",
        postCode: "00131",
        organizationUrl: "www.thalesaleniaspace.com",
        vatNumber: "IT00991340969",
      },
      {
        id: 999991819,
        name: "AIRBUS DEFENCE AND SPACE GMBH",
        acronym: "Astrium",
        country: "DE",
        street: "WILLY-MESSERSCHMITT-STRASSE 1",
        city: "TAUFKIRCHEN",
        postCode: "82024",
        organizationUrl: "www.airbus-group.com",
        vatNumber: "DE167015661",
      },
      {
        id: 999809265,
        name: "AIRBUS DEFENCE AND SPACE SAS",
        acronym: "AIRBUS",
        country: "FR",
        street: "31 RUE DES COSMONAUTES ZI DU PALAYS",
        city: "TOULOUSE CEDEX",
        postCode: "31402",
        organizationUrl: "www.airbusdefenceandspace.com",
        vatNumber: "FR63393341516",
      },
      {
        id: 999908205,
        name: "THALES ALENIA SPACE FRANCE SAS",
        acronym: "THALES ALENIA SPACE FRANCE",
        country: "FR",
        street: "AVENUE JEAN FRANCOIS CHAMPOLLION 26",
        city: "TOULOUSE",
        postCode: "31100",
        organizationUrl: "www.thalesaleniaspace.com",
        vatNumber: "FR62414725101",
      },
      {
        id: 997962094,
        name: "STMICROELECTRONICS GRENOBLE 2 SAS",
        acronym: "STGNB 2 SAS",
        country: "FR",
        street: "RUE JULES HOROWITZ 12",
        city: "GRENOBLE",
        postCode: "38000",
        organizationUrl: "www.st.com",
        vatNumber: "FR49504941337",
      },
    ],
  },
  {
    id: 687220,
    acronym: "VEGAS",
    title:
      "Validation of European high capacity rad-hard FPGA and software tools",
    startDate: "2016-01-01",
    endDate: "2020-08-31",
    objective:
      "VEGAS proposes to address the key challenge of European non-dependence and competitivness regarding rad-hard FPGA for space applications. VEGAS will evaluate (following ESCC rules) and validate the first rad-hard FPGA in 65nm to directly compete with the US offering and reach TRL 7. \nThe VEGAS project sets clear and measurable main objectives to reach a TRL 7 from TRL 5 (end of BRAVE project) as follows:\n1. Validation by end users of rad-hard FPGA developped under the BRAVE project – TRL 6 achieved\n2. Space evaluation of the first rad-hard FPGA developped under the BRAVE project – TRL 7 achieved\n3. Software CAD tools improvement by including timing and SEE mitigation tools\n\nVEGAS will complement the ongoing ESA funded BRAVE project. BRAVE covers all hardware and software development to reach a first prototype of NG-FPGA-MEDIUM (30k LUTs) and NG-FPGA-LARGE (130k LUTs) . VEGAS will cover all required steps to ESCC evaluate / validate the BRAVE NG-FPGA-MEDIUM and NG-FPGA-LARGE prototype and add additional software tools to reach a competitive software offering.",
    totalCost: "3976861,25",
    programme: "H2020-EU.2.1.6.",
    topics: "COMPET-01-2015",
    frameworkProgramme: "H2020",
    call: "H2020-COMPET-2015",
    fundingScheme: "RIA",
    coordinator: {
      id: 899404080,
      name: "NANOXPLORE",
      acronym: "NANOXPLORE",
      country: "FR",
      street: "1 avenue de la Cristallerie",
      city: "SEVRES",
      postCode: "92310",
      organizationUrl: "",
      vatNumber: "FR21794484808",
    },
    participants: [
      {
        id: 999909175,
        name: "STMICROELECTRONICS SA",
        acronym: "ST-CRO",
        country: "FR",
        street: "BOULEVARD ROMAIN ROLLAND 29",
        city: "MONTROUGE",
        postCode: "92120",
        organizationUrl: "www.st.com",
        vatNumber: "FR67341459386",
      },
      {
        id: 972356422,
        name: "COMPUTADORAS  REDES E INGENIERIA SA",
        acronym: "CRISA",
        country: "ES",
        street: "CALLE TORRES QUEVEDO SN",
        city: "TRES CANTOS",
        postCode: "28760",
        organizationUrl: "",
        vatNumber: "ESA78066735",
      },
      {
        id: 999991819,
        name: "AIRBUS DEFENCE AND SPACE GMBH",
        acronym: "Astrium",
        country: "DE",
        street: "WILLY-MESSERSCHMITT-STRASSE 1",
        city: "TAUFKIRCHEN",
        postCode: "82024",
        organizationUrl: "www.airbus-group.com",
        vatNumber: "DE167015661",
      },
      {
        id: 999809265,
        name: "AIRBUS DEFENCE AND SPACE SAS",
        acronym: "AIRBUS",
        country: "FR",
        street: "31 RUE DES COSMONAUTES ZI DU PALAYS",
        city: "TOULOUSE CEDEX",
        postCode: "31402",
        organizationUrl: "www.airbusdefenceandspace.com",
        vatNumber: "FR63393341516",
      },
      {
        id: 999977754,
        name: "POLITECNICO DI TORINO",
        acronym: "POLITO",
        country: "IT",
        street: "CORSO DUCA DEGLI ABRUZZI 24",
        city: "TORINO",
        postCode: "10129",
        organizationUrl: "www.polito.it",
        vatNumber: "IT00518460019",
      },
      {
        id: 999701595,
        name: "THALES ALENIA SPACE ESPANA, SA",
        acronym: "TAS-E",
        country: "ES",
        street: "CALLE EINSTEIN  7",
        city: "TRES CANTOS - MADRID",
        postCode: "28760",
        organizationUrl: "",
        vatNumber: "ESA78989670",
      },
      {
        id: 999908205,
        name: "THALES ALENIA SPACE FRANCE SAS",
        acronym: "THALES ALENIA SPACE FRANCE",
        country: "FR",
        street: "AVENUE JEAN FRANCOIS CHAMPOLLION 26",
        city: "TOULOUSE",
        postCode: "31100",
        organizationUrl: "www.thalesaleniaspace.com",
        vatNumber: "FR62414725101",
      },
      {
        id: 997962094,
        name: "STMICROELECTRONICS GRENOBLE 2 SAS",
        acronym: "STGNB 2 SAS",
        country: "FR",
        street: "RUE JULES HOROWITZ 12",
        city: "GRENOBLE",
        postCode: "38000",
        organizationUrl: "www.st.com",
        vatNumber: "FR49504941337",
      },
      {
        id: 999862518,
        name: "UNIVERSIDAD DE SEVILLA",
        acronym: "USE",
        country: "ES",
        street: "CALLE S. FERNANDO 4",
        city: "SEVILLA",
        postCode: "41004",
        organizationUrl: "www.us.es",
        vatNumber: "ESQ4118001I",
      },
    ],
  },
];

const ProjectsMain = () => {
  const [searchText, setSearchText] = useState("");
  const [searchField, setSearchField] = useState("all");

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // Function to handle dropdown change
  const handleDropdownChange = (e) => {
    setSearchField(e.target.value);
  };

  // Function to filter projects based on search input and selected field
  const filterProjects = () => {
    return projectsData.filter((project) => {
      if (searchField === "all") {
        return Object.values(project).some((value) =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        return String(project[searchField])
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }
    });
  };

  const filteredProjects = filterProjects();

  return (
    <div className="projects-main">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchInputChange}
        />
        <select onChange={handleDropdownChange} value={searchField}>
          <option value="all">All</option>
          <option value="title">Title</option>
          <option value="objective">Objective</option>
          <option value="topics">Topic</option>
        </select>
      </div>
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <Project key={project.id} projectData={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
