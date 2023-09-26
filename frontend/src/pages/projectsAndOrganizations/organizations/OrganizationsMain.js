import React, { useState } from "react";
import OrganizationInfo from "./OrganizationInfo";
import Participated from "./Participated";
import Coordinated from "./Coordinated";
import "./css/OrganizationsMain.css";

var organizationData = {
  id: 999874352,
  name: "UNIVERSITY OF MACEDONIA",
  acronym: "UOM",
  country: "EL",
  street: "EGNATIA STREET 156",
  city: "THESSALONIKI",
  postCode: "540 06",
  organizationUrl: "www.uom.gr",
  vatNumber: "EL090203611",
};

var participationData = [
  {
    id: 871177,
    acronym: "SmartCLIDE",
    title:
      "Smart Cloud Integrated Development Environment supporting the full-stack implementation, composition and deployment of data-centered services and applications in the cloud",
    startDate: "2020-01-01",
    endDate: "2022-12-31",
    objective:
      "The main objective of SmartCLIDE is to propose a radically new smart cloud-native development environment, based on the coding-by-demonstration principle, that will support creators of cloud services in the discovery, creation, composition, testing and deployment of full-stack data-centred services and applications in the cloud. SmartCLIDE will provide high levels of abstraction at all stages (development, testing, deployment and run-time) as well as self-discovery of IaaS and SaaS Services. SmartCLIDE will provide several categories of abstractions: at development stage, SmartCLIDE will provide abstractions on data transformations or processing; at testing stage, mechanisms to visualize flow and status or artefacts to automatically test the expected behaviour; at deployment stage, abstractions of physical and virtual resources; or at run-time, mechanisms to monitor the performance and operation of the service.\nThe cloud nature of the environment will enable collaboration between different stakeholders, and the self-discovery of IaaS and SaaS services and the high levels of abstraction will facilitate the composition and deployment of new services to non-technical staff (with no previous experience on programming or on the administration of systems and infrastructure). Equally, hiding the complexity of the infrastructure, and adding intelligence to this layer, will allow to select the most adequate infrastructure services in each moment.\nSmartCLIDE will allow SMEs and Public Administration to boost the adoption of Cloud and Big Data solutions, being validated at one solution oriented to Public Administration (Social Security System) and three different IoT and Big Data products of software development SMEs within the consortium.",
    totalCost: "4935381,25",
    programme: "H2020-EU.2.1.1.",
    topics: "ICT-15-2019-2020",
    frameworkProgramme: "H2020",
    call: "H2020-ICT-2019-2",
    fundingScheme: "RIA",
  },
  {
    id: 709515,
    acronym: "STIMEY",
    title:
      "Science Technology Innovation Mathematics Engineering for the Young",
    startDate: "2016-09-01",
    endDate: "2021-03-31",
    objective:
      "In an effort to bring science and society together in Europe, and consequently increase the continent’s international competitiveness, STEM (science, technology, engineering and mathematics) education must be more relatable to European youths to raise their interests and involvement in STEM careers. This project proposes an educational platform with multi-level components, designed and developed on the base of a well-researched pedagogical framework, which aims to make STEM education more attractive to young people from age 10 to 18 years old. Universities, schools, teachers, students, parents, business and media partners come together to complete a circle in which STEM becomes a part of the daily life of youths through an educational portal that also prepares them for future careers. \nThe socially motivational platform for emotional and educational engagement, herein referred to as the STIMEY (Science, Technology, Innovation, Mathematics, Education for the Young) platform, will combine:\n  - social media components and entrepreneurial tools (present), \n  - robotic artefacts (the future), \n  - radio (the past) \nto educate, engage and increase the youth’s interest in STEM education and careers. The platform, with individual e-portfolios, will be designed to tap into the children’s curiosity and motivations from a young age. The platform will take into account the specific needs of  girls and boys, to be attracted and stay with STEM in a social collaborative environment with serious gaming and healthy competition among peers. \n\nThe platform will give teachers the necessary modern tools to deliver STEM education in an attractive and engaging manner in-class, while also following up on students’ progress even outside of class.",
    totalCost: "3965372,5",
    programme: "H2020-EU.5.a.",
    topics: "SEAC-1-2015",
    frameworkProgramme: "H2020",
    call: "H2020-SEAC-2015-1",
    fundingScheme: "RIA",
  },
  {
    id: 822806,
    acronym: "MAGYC",
    title: "MigrAtion Governance and asYlum Crises",
    startDate: "2018-11-01",
    endDate: "2023-04-30",
    objective:
      "This proposal seeks to assess how migration governance has been influenced by the recent ‘refugee crisis’, and how crises at large shape policy responses on migration. \n\nSince the beginning of the ‘refugee crisis’ in 2014, different policy responses have been put forward by governments and international organisations alike. Albeit very different from one another, these different responses had two common traits:\n-\tThey were generally presented as the sole realistic solution in the face of a situation that was often characterized as ‘unsustainable’.\n-\tThey were often geared towards a more efficient control and surveillance of the borders.\n\nAs the humanitarian crisis and the dire situation in countries such as Italy, Greece or Hungary should have prompted more cooperation in the EU, policy responses usually hinted at less cooperation, with the notable exception of the control and surveillance of the EU external border. This meant that the humanitarian crisis in the Mediterranean soon transformed into a political crisis with the EU, culminating in the Brexit referendum, where the issue of border control played a decisive role in the decision of the British electorate to leave the EU. \nAs an attempt to revive the idea of a global governance of migration, the United Nations issued on 19 September 2016 the New York Declaration, which led to the launch of the Global Compacts on Migration and Refugees - both are them are still being negotiated at the time of submitting this proposal.\n\nTherefore, MAGYC seeks to appraise these policy responses in the light of the crisis and assess their efficiency for the long-term governance of migration.",
    totalCost: "3175263,75",
    programme: "H2020-EU.3.6.1.1.;H2020-EU.3.6.1.2.",
    topics: "MIGRATION-02-2018",
    frameworkProgramme: "H2020",
    call: "H2020-SC6-MIGRATION-2018",
    fundingScheme: "RIA",
  },
  {
    id: 801015,
    acronym: "EXA2PRO",
    title:
      "Enhancing Programmability and boosting Performance Portability for Exascale Computing Systems",
    startDate: "2018-05-01",
    endDate: "2021-07-31",
    objective:
      "The vision of EXA2PRO is to develop a programming environment that will enable the productive deployment of highly parallel applications in exascale computing systems. EXA2PRO programming environment will integrate tools that will address significant exascale challenges. It will support a wide range of scientific applications, provide tools for improving source code quality, enable efficient exploitation of exascale systems' heterogeneity and integrate tools for data and memory management optimization. Additionally, it will provide various fault-tolerance mechanisms, both user-exposed and at runtime system level and performance monitoring features. EXA2PRO will be evaluated using 4 use cases from 4 different domains, which will be deployed in JUELICH supercomputing center. The use cases will leverage the EXA2PRO tool-chain and we expect: \n- Increased applications performance based on EXA2PRO optimization tools (data and memory management)\n- Efficient exploitation of heterogeneity by the applications that will allow the evaluation of more complex problems.\n- Identification of trade-offs between design qualities (source code maintainability/reusability) and run-time constraints (performance/energy consumption). \n- Evaluation of various fault-tolerance mechanisms for applications with different characteristics. \nEXA2PRO outcome is expected to have major impact in a) the scientific and industrial community that focuses on application deployment in supercomputing centers: EXA2PRO environment will allow efficient application deployment with reduced effort. \nb) on application developers of exascale application: EXA2PRO will provide tools for improving source code maintainability/reusability, which will allow application evaluation with reduced developers' effort. \nc) on the scientific community and the industry relevant to the EXA2PRO use cases. At least two of the EXA2PRO use cases will have significant impact to the CO2 capture and to the Supercapacitors industry.",
    totalCost: "3475222,5",
    programme: "H2020-EU.1.2.2.",
    topics: "FETHPC-02-2017",
    frameworkProgramme: "H2020",
    call: "H2020-FETHPC-2017",
    fundingScheme: "RIA",
  },
  {
    id: 740690,
    acronym: "FORTIKA",
    title:
      "FORTIKA  - Cyber Security Accelerator for trusted SMEs IT Ecosystems",
    startDate: "2017-06-01",
    endDate: "2020-05-31",
    objective:
      "FORTIKA aims to (1) minimise the exposure of small and medium sized businesses to cyber security risks and threats, and (2) help them successfully respond to cyber security incidents, while relieving them from all unnecessary and costly efforts of identifying, acquiring and using the appropriate cyber security solutions. To fulfil its vision the project adopts a security by design hybrid approach that adequately integrates hardware and software with business needs and behavioural patterns at individual and organisational level to: introduce a hardware-enabled middleware security layer as add-on to existing network gateways; orientate small business users to trusted cyber security services (through FORTIKA’s marketplace) packaged to tailored solutions for each enterprise and further extended to accommodate security intelligence and to encourage security-friendly behavioural and organisational changes. Ultimately, FORTIKA proposes a resilient overall cyber security solution that can be easily tailored and adjusted to the versatile and dynamically changing needs of small businesses. To this end, the project ambitiously aims to make systematic and extensive use of the existing service and product portfolio of security solution providers across Europe. Finally the introduction of a software-defined smart ecosystem in “FORTIKA Marketplace”, will provide the feature of a light mode solution, which will offer virtualized security services (with minimum downloading requirements). From their perspective, users (i.e. SMEs) may utilize a variety of services and share profiling information with the service providers in return for tailored security services aligned with their actual needs. The FORTIKA marketplace will also function as a single point of access for the profiling information for each SME. FORTIKA Cyber-security framework will be evaluated through five major types of SMEs  and will be supported from 2 local SME/ICT clusters and 1 EU alliance.",
    totalCost: "4918812,5",
    programme: "H2020-EU.3.7.4.",
    topics: "DS-02-2016",
    frameworkProgramme: "H2020",
    call: "H2020-DS-SC7-2016",
    fundingScheme: "IA",
  },
  {
    id: 780572,
    acronym: "SDK4ED",
    title:
      "Software Development toolKit for Energy optimization and technical Debt elimination",
    startDate: "2018-01-01",
    endDate: "2020-12-31",
    objective:
      "The vision of SDK4ED is to minimize cost, time and complexity of low-energy software development processes, by providing tools for automatic optimization of both software quality and non-functional requirements such as energy efficiency, dependability and performance, with the capacity to tackle the interplay between design quality and run-time constraints. SDK4ED aims to realise its vision through the following objectives: \n- establish a set of methods and tools for monitoring processes for early identification of design flaws, energy consumption indicators, and security vulnerabilities, with respect to the targeted hardware platform and non-functional requirements \n- estimate the costs and limitations associated to technical debt (TD) liabilities in the entire software stack \n- provide toolboxes for assessing project management decisions with respect to the choices of repaying TD, under the constraints imposed on energy consumption and security\n- deploy the envisaged solutions in three industry-driven distinctive but complementary use cases in the domains of airborne systems, healthcare, and automotive industry \n- Illustrate the importance and benefits introduced by proper TD management into low-energy software application development\n- train and consult the embedded software systems industry.\nThrough its envisaged toolboxes, SDK4ED will comprise a set of software programming add-ons for preventing the degradation of run-time qualities and especially energy consumption, while allowing for efficient measuring of the accumulated TD during the development of new low-energy computing software applications, including embedded systems and IoT products. \nThe major expected impact of the proposed platform will be measured by the achieved improvement in productivity, the extent to which the envisaged tools will be adopted by the reference market and the minimisation of effort for adopting digital technologies into low-energy products and services.",
    totalCost: "4325918,75",
    programme: "H2020-EU.2.1.1.",
    topics: "ICT-05-2017",
    frameworkProgramme: "H2020",
    call: "H2020-ICT-2017-1",
    fundingScheme: "RIA",
  },
  {
    id: 777067,
    acronym: "NECOS",
    title: "Novel Enablers for Cloud Slicing",
    startDate: "2017-11-01",
    endDate: "2019-10-31",
    objective:
      "The NECOS project addresses the limitations of current cloud computing infrastructures to respond to the demand of new services, as presented in two use-cases that will drive the whole execution of the project. The first use-case is Telco service provider focussed and is oriented towards the adoption of cloud computing in their large networks. The second use-case is targeting the use of edge clouds to support devices with low computation and storage capacity. The envisaged solution is based on a new concept – Lightweight Slice Defined Cloud (LSDC) – as an approach that extends the virtualization to all the resources in the involved networks and data centres and provides a uniform management with a high-level of orchestration.\nThe NECOS approach will be manifested in a platform whose main distinguishing features are:\n1. The Slice as a Service –- a new deployment model. A slice is a grouping of resources managed as a whole, and that can accommodate service components, independent of other slices.\n2. Embedded algorithms for an optimal allocation of resources to slices in the cloud and networking infrastructure, to respond to the dynamic changes of the various service demands.\n3. A management and orchestration approach making use of artificial intelligence techniques in order to tackle with the complexity of large scale virtualized infrastructure environments.\n4. Making reality the lightweight principle, in terms of low footprint components deployable on large number of small network and cloud devices at the edges of the network.\nThe NECOS platform will be based on state of the art open software platforms, which will be carefully selected, rather than start from scratch. This baseline platform will be enhanced with the management and orchestration algorithms and the APIs that will constitute the research activity of the project. Finally, the NECOS platform will be validated, in the context of the two proposed use cases, using the 5TONIC and FIBRE testing frameworks.",
    totalCost: "1494906,25",
    programme: "H2020-EU.2.1.1.",
    topics: "EUB-01-2017",
    frameworkProgramme: "H2020",
    call: "H2020-EUB-2017",
    fundingScheme: "RIA",
  },
  {
    id: 643999,
    acronym: "FoodSMART",
    title: "Shaping Smarter Consumer Behaviour and Food Choice",
    startDate: "2015-01-01",
    endDate: "2018-12-31",
    objective:
      "Compared to meals prepared at home, meals eaten out tend to contain more calories, total fat and saturated fat and it is here where the consumer has very little control or knowledge of the nutrient profile of the food they are eating (Bohm and Quartuccio, 2008). The positive association between the rise in consumption of food prepared outside the home and the increasing prevalence of obesity has been described as a major health and wellbeing societal challenge. Attempts to increase public awareness of appropriate ways to eat more healthily unfortunately do not seem to have led to significant changes in patterns of food purchase and consumption especially from an eating ‘out-of-home’ situation. It has become obvious that the development of effective measures for improvement requires further systematic research and a radical approach. The aim of FoodSMART is to develop an innovative technical (ICT) menu solution that enables informed consumer choice when eating out that takes into account individual characteristics (such as culture, dietary requirements and age group) as well as product (specification) and environmental cues (choice architecture and consumption setting). \nThis aim will be achieved through the evaluation of consumer orientated intelligence (what information consumers require/trust i.e. information quality); the assessment of industry orientated intelligence (impact of customisation) and the subsequent development of data analytics and Quick Recognition (QR) coding for personalised food recommendation; thereby, facilitating the consumption of healthy and appropriate dishes. Results will be gathered and modelled to provide strategic intelligence for menu design and decision-making (by Industry) and for policy purposes (by the EU); further, this translational research will be disseminated both at scientific and consumer levels. Increasing the pace and scale of innovation within out-of-home eating is fundamental to this proposal.",
    totalCost: "499500",
    programme: "H2020-EU.1.3.3.",
    topics: "MSCA-RISE-2014",
    frameworkProgramme: "H2020",
    call: "H2020-MSCA-RISE-2014",
    fundingScheme: "MSCA-RISE",
  },
  {
    id: 821479,
    acronym: "Pop-Machina",
    title:
      "Collaborative production for the circular economy; a community approach",
    startDate: "2019-06-01",
    endDate: "2023-05-31",
    objective:
      "POP-MACHINA aims to demonstrate the power and potential of the maker movement and collaborative production for the EU circular economy. We draw from a number of cut-edge technologies (factory-of-the-future, blockchain) and disciplines (urban planning, architecture) to provide the support necessary to overcome scaling issues; a typical drawback of collaborative production; to find the areas more in need of our intervention and to reconfigure unused spaces. We put forth an elaborate community engagement program to network, incentivize and stimulate through maker faires and events existing and new maker communities in all our municipalities. We build upon the current informal curriculum for maker skills development by nurturing the social side and we put educators and makers together to exchange ideas on the training modalities. A particular focus on the skill development of women and vulnerable groups will aim to empower these (underrepresented) segments to partake actively in collaborative production. In every pilot area we will demonstrate business oriented collaborative production of feasible and sustainable concepts from secondary raw material or other sustainable inputs, based on the needs and preferences of the local stakeholders. A thorough impact assessment framework with increased scope (e.g. social) will be co-designed with stakeholders after short basic assessment trainings and will be used in the assessment of our pilot work. Based on the findings we will kick-start a series of policy events to discuss openly – without pushing our results – the tax and legal barriers that hamper collaborative production.",
    totalCost: "11046105",
    programme: "H2020-EU.3.5.4.;H2020-EU.3.5.2.",
    topics: "CE-SC5-03-2018",
    frameworkProgramme: "H2020",
    call: "H2020-SC5-2018-2",
    fundingScheme: "IA",
  },
  {
    id: 962563,
    acronym: "inGOV",
    title:
      "Inclusive Governance Models and ICT Tools for Integrated Public Service Co-Creation and Provision",
    startDate: "2021-01-01",
    endDate: "2023-12-31",
    objective:
      "Today public authorities need to provide better services with fewer resources. Citizens require accessible, user-friendly, personalised, and integrated public services that match their needs and circumstances. At the same time, trust in the public sector deteriorates. We argue the solution rests in enhancing existing relevant EU work (on policies, models, frameworks, roadmaps etc) by adopting best research and practice (e.g. in public service co-creation) and by exploiting relevant technologies particularly mobile apps, virtual assistants (chatbots), knowledge graphs, and linked data.\nWe acknowledge that for many years, the EU is providing useful practical advice including frameworks (e.g. EIF), models (e.g. CPSV), architectures (e.g. EIRA), roadmaps, etc. These however are not directly applicable anymore as they do not incorporate the latest research and practice, e.g. in public service co-creation. Similarly, research is not related to EU work and practice is not related to research.\nThe vision of the inGov project is to provide innovative ICT-supported governance models as well as mobile apps including chatbots, which will enable stakeholders' collaboration in co-producing inclusive and accessible Integrated Public Services (IPS) thus increasing trust and satisfaction. For that purpose, multidisciplinary scientific methods will be used including design science, multiple case study and variants of the technology acceptance model. The project results will be piloted in Malta to modernise the digital family household public service (affecting 200,000 households), in Austria to deploy IPS for collecting tourism tax (affecting 3,200 accommodation providers), in Greece to digitise the disabled card renewal service (benefiting 11,500 disabled, low-income citizens) and in Croatia to create AI-driven virtual assistants and services (affecting 32,000 citizens). We aim to feed our results back to EU policies hence achieving alignment between policies, research and practice.",
    totalCost: "3287000",
    programme: "H2020-EU.3.6.2.2.",
    topics: "DT-GOVERNANCE-05-2018-2019-2020",
    frameworkProgramme: "H2020",
    call: "H2020-SC6-GOVERNANCE-2020",
    fundingScheme: "RIA",
  },
];
var coordinationData = [
  {
    id: 658694,
    acronym: "EUMIGRE",
    title:
      "New European Mobilities at times of Crisis: Emigration Aspirations and Practices of Young Greek Adults",
    startDate: "2015-07-01",
    endDate: "2017-06-30",
    objective:
      "With Southern Europe suffering deeply from the financial crisis, a renewed public discussion on emigration from this region has emerged. The European South, which had only recently become a destination for immigration, seems to be experiencing a new major emigration wave. This is especially true for Greece, the country which has been hit hardest by the economic crisis and concomitant austerity measures. Despite public attention on the matter, however, little is known about who is emigrating, what alternative mobility strategies are considered and pursued, or the reasons underling migration decisions. EUMIGRE will provide an answer to these questions by introducing an innovative mixed methods approach. This approach allows identifying and studying a sizeable and diverse group of young adults whose spatial and social trajectories are retrospectively traced to explore the influence of the current crisis on their strategies. In so doing, it will also contribute to migration theory at a period when space-time flexibilizations, processes of neoliberalization, and the economic crisis are changing established modalities of and motivations for migration in ways that render the emigration–immigration country distinction obsolete.",
    totalCost: "164653,2",
    programme: "H2020-EU.1.3.2.",
    topics: "MSCA-IF-2014-EF",
    frameworkProgramme: "H2020",
    call: "H2020-MSCA-IF-2014",
    fundingScheme: "MSCA-IF-EF-ST",
  },
  {
    id: 706620,
    acronym: "IEA",
    title: "International Environmental Agreements -An Integrated Approach",
    startDate: "2017-07-01",
    endDate: "2019-06-30",
    objective:
      "Transbountary environmental pollution constitutes a major challenge in international collaboration. Although global cooperation and coordination can benefit everyone involved, each country would like to unilaterally free ride on everyone else’s efforts. A number of International Environmental Agreements (IEAs) are drafted and ratified to this date, in an effort to address this problem. While the process is ongoing it is widely accepted that IEAs are either of small size (in terms of signatories) or non-enforceable.\nThe proposed study will provide a framework that captures the current situation better than the models in the existing literature, by explicitly formalizing the negotiation process underlining the formation of an IEA. Moreover, it will formalize the linkage between environmental problems and other political and economical issues (e.g. trade agreements and R&D). Shedding light on the issues that surround and on the mechanisms that generate the constitution of an IEA will assist in\nidentifying strategies and tools that can enhance IEA participation and enforceability in the future.\nIEAs have been studied during the recent years in an effort to both explain why they are ratified by a fraction of the total number of countries, and suggest ways in which the number of signatories could increase. In order to capture the interdependence among countries' choices and the widely spread externalities that lead to the strategic behaviour of countries involved in negotiations of IEAs we use game theory as the tool of analysis.",
    totalCost: "112926,72",
    programme: "H2020-EU.1.3.2.",
    topics: "MSCA-IF-2015-EF",
    frameworkProgramme: "H2020",
    call: "H2020-MSCA-IF-2015",
    fundingScheme: "MSCA-IF-EF-RI",
  },
];

const OrganizationsMain = () => {
  const [activeTab, setActiveTab] = useState("info");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="organizations-main">
      <div className="tab-header">
        <div
          className={`tab ${activeTab === "info" ? "active" : ""}`}
          onClick={() => handleTabClick("info")}
        >
          Info
        </div>
        <div
          className={`tab ${activeTab === "coordinated" ? "active" : ""}`}
          onClick={() => handleTabClick("coordinated")}
        >
          Coordinated
        </div>
        <div
          className={`tab ${activeTab === "participated" ? "active" : ""}`}
          onClick={() => handleTabClick("participated")}
        >
          Participated
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "info" && (
          <div>
            <OrganizationInfo organizationData={organizationData} />
          </div>
        )}
        {activeTab === "coordinated" && (
          <div>
            <Coordinated projectsData={participationData} />
          </div>
        )}
        {activeTab === "participated" && (
          <div>
            <Participated projectsData={coordinationData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationsMain;
