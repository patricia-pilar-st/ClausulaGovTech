/* =========================================================
   CláusulaGovTech
   Base inicial de perguntas e requisitos
   ========================================================= */


/* ---------------------------------------------------------
   PERGUNTAS
   --------------------------------------------------------- */

window.QUESTIONS = [

  {
    id: "sisp_scope",
    module: "escopo",
    title: "A contratação está compreendida no recorte institucional do protótipo?",
    description:
      "A primeira versão do CláusulaGovTech foi delimitada às contratações de soluções de TIC realizadas por órgãos e entidades integrantes do SISP, dentro do âmbito de aplicação da IN SGD/ME nº 94/2022.",
    type: "single",

    options: [
      {
        value: "yes",
        label: "Sim",
        help: "A contratação está compreendida nesse recorte."
      },
      {
        value: "no",
        label: "Não ou não sei",
        help: "O protótipo sinalizará o limite de seu escopo."
      }
    ]
  },


  {
    id: "software",
    module: "objeto",
    title: "A solução envolve software?",
    description:
      "Considere licenciamento, subscrição, Software como Serviço (SaaS), desenvolvimento ou customização de software.",
    type: "single",

    showIf: {
      questionId: "sisp_scope",
      equals: "yes"
    },

    options: [
      {
        value: "yes",
        label: "Sim"
      },
      {
        value: "no",
        label: "Não"
      }
    ]
  },
{
  id: "software_model",
  module: "software",
  title: "Qual é a forma principal de disponibilização ou contratação do software?",
  description:
    "A informação permite distinguir modelos abrangidos pela Portaria SGD/MGI nº 5.950/2023 de outras formas de contratação de software.",
  type: "single",

  showIf: {
    questionId: "software",
    equals: "yes"
  },

  options: [
    {
      value: "permanent_license",
      label: "Licenciamento permanente"
    },
    {
      value: "temporary_license",
      label: "Cessão temporária de direitos de uso"
    },
    {
      value: "subscription_saas",
      label: "Subscrição ou Software como Serviço (SaaS)"
    },
    {
      value: "software_support",
      label: "Suporte técnico de software"
    },
    {
      value: "specialized_consulting",
      label: "Configuração, customização, instalação, otimização ou manutenção"
    },
    {
      value: "custom_development",
      label: "Desenvolvimento de software sob demanda"
    },
    {
      value: "other",
      label: "Outra forma"
    },
    {
      value: "unknown",
      label: "Ainda não foi definido"
    }
  ]
},
{

    id: "software_creation",
    module: "propriedade intelectual",
    title: "A contratação prevê criação ou alteração de software, código-fonte, documentação, modelos de dados ou bases de dados?",
    description:
      "A pergunta identifica situações em que a relação contratual pode produzir ou modificar artefatos sujeitos a regras de propriedade intelectual.",
    type: "single",

    showIf: {
      questionId: "software",
      equals: "yes"
    },

    options: [
      {
        value: "yes",
        label: "Sim"
      },
      {
        value: "no",
        label: "Não"
      },
      {
        value: "unknown",
        label: "Ainda não foi definido"
      }
    ]
  },

{
  id: "software_dev_services",
  module: "desenvolvimento de software",

  title: "O objeto inclui serviços de desenvolvimento, manutenção ou sustentação de software?",

  description:
    "A resposta permite identificar a incidência do modelo específico estabelecido pela Portaria SGD/MGI nº 750/2023.",

  type: "single",

  showIf: {
    questionId: "software",
    equals: "yes"
  },

  options: [
    {
      value: "yes",
      label: "Sim"
    },
    {
      value: "no",
      label: "Não"
    },
    {
      value: "unknown",
      label: "Ainda não foi definido"
    }
  ]
},

{
  id: "ai_assisted_development",
  module: "inteligência artificial",

  title: "A contratada poderá utilizar ferramentas de inteligência artificial no desenvolvimento, manutenção ou sustentação de software?",

  description:
    "Considere ferramentas de IA utilizadas para geração, revisão, teste, documentação ou apoio à produção de código e demais artefatos de software.",

  type: "single",

  showIf: {
    questionId: "software_dev_services",
    equals: "yes"
  },

  options: [
    {
      value: "yes",
      label: "Sim"
    },
    {
      value: "no",
      label: "Não"
    },
    {
      value: "unknown",
      label: "Ainda não foi definido"
    }
  ]
},
  {
    id: "cloud",
    module: "nuvem",
    title: "A contratação envolve serviços de computação em nuvem?",
    description:
      "Inclua soluções hospedadas em nuvem, infraestrutura ou plataforma em nuvem e situações em que o serviço contratado dependa desse ambiente.",
    type: "single",

    showIf: {
      questionId: "sisp_scope",
      equals: "yes"
    },

    options: [
      {
        value: "yes",
        label: "Sim"
      },
      {
        value: "no",
        label: "Não"
      },
      {
        value: "unknown",
        label: "Não sei"
      }
    ]
  },


  {
    id: "personal_data",
    module: "dados",
    title: "A execução da solução envolve tratamento de dados pessoais?",
    description:
      "Considere operações como coleta, acesso, armazenamento, consulta, compartilhamento, alteração ou eliminação de dados relacionados a pessoas naturais.",
    type: "single",

    showIf: {
      questionId: "sisp_scope",
      equals: "yes"
    },

    options: [
      {
        value: "yes",
        label: "Sim"
      },
      {
        value: "no",
        label: "Não"
      },
      {
        value: "unknown",
        label: "Não sei"
      }
    ]
  },

{
  id: "contractor_data_role",
  module: "dados",
  title: "A contratada realizará tratamento de dados pessoais em nome do órgão contratante e segundo suas instruções?",
  description:
    "A resposta ajuda a identificar situações em que a contratada poderá atuar como operadora de dados pessoais.",
  type: "single",

  showIf: {
    questionId: "personal_data",
    equals: "yes"
  },

  options: [
    {
      value: "yes",
      label: "Sim"
    },
    {
      value: "no",
      label: "Não"
    },
    {
      value: "unknown",
      label: "Ainda não foi definido"
    }
  ]
},

{
  id: "subprocessor",
  module: "dados",
  title: "A contratada poderá recorrer a terceiro para auxiliá-la no tratamento de dados pessoais?",
  description:
    "A pergunta identifica situações em que poderá existir suboperador na cadeia de tratamento de dados pessoais.",
  type: "single",

  showIf: {
    questionId: "contractor_data_role",
    equals: "yes"
  },

  options: [
    {
      value: "yes",
      label: "Sim"
    },
    {
      value: "no",
      label: "Não"
    },
    {
      value: "unknown",
      label: "Ainda não foi definido"
    }
  ]
},

  {
    id: "third_parties",
    module: "subcontratacao",
    title: "Há previsão de participação de terceiros ou subcontratação na execução do objeto?",
    description:
      "A pergunta busca identificar situações em que parte da execução possa ser atribuída a terceiro.",
    type: "single",

    showIf: {
      questionId: "sisp_scope",
      equals: "yes"
    },

    options: [
      {
        value: "yes",
        label: "Sim"
      },
      {
        value: "no",
        label: "Não"
      },
      {
        value: "unknown",
        label: "Ainda não foi definido"
      }
    ]
  },

{
  id: "infra_user_services",
  module: "infraestrutura",

  title: "O objeto inclui serviços de operação de infraestrutura de TIC ou atendimento a usuários?",

  description:
    "A resposta permite identificar situações abrangidas pelo modelo específico de contratação desses serviços no âmbito do SISP.",

  type: "single",

  showIf: {
    questionId: "sisp_scope",
    equals: "yes"
  },

  options: [
    {
      value: "yes",
      label: "Sim"
    },
    {
      value: "no",
      label: "Não"
    },
    {
      value: "unknown",
      label: "Ainda não foi definido"
    }
  ]
},

{
  id: "ai_infra_use",
  module: "inteligência artificial",

  title: "A contratada poderá utilizar ferramentas de inteligência artificial na execução dos serviços de infraestrutura ou atendimento a usuários?",

  description:
    "A pergunta identifica situações em que ferramentas de IA poderão ser utilizadas pela contratada durante a prestação desses serviços.",

  type: "single",

  showIf: {
    questionId: "infra_user_services",
    equals: "yes"
  },

  options: [
    {
      value: "yes",
      label: "Sim"
    },
    {
      value: "no",
      label: "Não"
    },
    {
      value: "unknown",
      label: "Ainda não foi definido"
    }
  ]
},

  {
    id: "ai_solution",
    module: "ia",
    title: "A solução contratada incorpora sistema ou funcionalidade de inteligência artificial?",
description:
  "A resposta ativa o módulo específico de inteligência artificial incorporado à versão atual da matriz.",

    showIf: {
      questionId: "sisp_scope",
      equals: "yes"
    },

    options: [
      {
        value: "yes",
        label: "Sim"
      },
      {
        value: "no",
        label: "Não"
      },
      {
        value: "unknown",
        label: "Não sei"
      }
    ]
  }

];



/* ---------------------------------------------------------
   REQUISITOS
   --------------------------------------------------------- */

window.REQUIREMENTS = [
/* =======================================================
   SEGURANÇA DA INFORMAÇÃO E PRIVACIDADE
   ======================================================= */

{
  id: "CGT-SEG-01",

  module: "segurança e privacidade",

  title: "Requisitos de segurança da informação e privacidade",

  nature: "Obrigatório",

  summary:
    "Examinar e especificar os requisitos e as obrigações de segurança da informação e privacidade pertinentes ao objeto e aos riscos da contratação.",

  materialization:
    "Termo de Referência e, quando cabível, contrato.",

  source:
    "Instrução Normativa SGD/ME nº 94/2022",

  provision:
    "Item 7.1 e item 7.2",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/processo-de-contratacao-de-solucoes-de-tic-regido-pela-lei-ndeg-14-133-de-2021",

  trigger: {
    questionId: "sisp_scope",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque a contratação foi identificada como compreendida no recorte institucional e material da IN SGD/ME nº 94/2022.",

  explanation:
    "A IN SGD/ME nº 94/2022 determina que o Termo de Referência contenha, no que couber ao objeto contratado, requisitos e obrigações de Segurança da Informação e Privacidade. A definição deve considerar a legislação aplicável e os riscos associados à solução.",

  humanReview:
    "A Equipe de Planejamento da Contratação deverá determinar quais requisitos de segurança e privacidade são pertinentes ao objeto e aos riscos concretos da solução."
},


{
  id: "CGT-LOG-01",

  module: "segurança e privacidade",

  title: "Rastreabilidade, trilha de auditoria e registros de logs",

  nature: "Condicional",

  summary:
    "Examinar a necessidade de mecanismos de rastreabilidade, trilha de auditoria e registros de logs relacionados à segurança da informação e privacidade.",

  materialization:
    "Termo de Referência e instrumentos de gestão e fiscalização, conforme a solução contratada.",

  source:
    "Instrução Normativa SGD/ME nº 94/2022",

  provision:
    "Itens 7.2.4, 7.2.7 e 7.2.11",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/processo-de-contratacao-de-solucoes-de-tic-regido-pela-lei-ndeg-14-133-de-2021",

  trigger: {
    questionId: "sisp_scope",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado para exame porque a contratação está compreendida no âmbito da IN SGD/ME nº 94/2022, que inclui rastreabilidade, auditoria e registros de logs entre os aspectos de Segurança da Informação e Privacidade a considerar, no que couber.",

  explanation:
    "A IN SGD/ME nº 94/2022 prevê a consideração de mecanismos que possibilitem rastreabilidade e trilha de auditoria de Segurança da Informação e Privacidade; auditoria relativa à conformidade dos requisitos especificados; e registros de logs.",

  humanReview:
    "A necessidade, a extensão, o prazo de retenção e as características técnicas dos registros dependem da solução, dos riscos identificados e das normas aplicáveis ao caso."
},


{
  id: "CGT-CON-01",

  module: "continuidade",

  title: "Disponibilidade e continuidade da solução de TIC",

  nature: "Condicional",

  summary:
    "Examinar os requisitos necessários para disponibilidade da solução e continuidade das atividades apoiadas pela contratação.",

  materialization:
    "Termo de Referência e instrumentos de execução e gestão contratual, conforme o caso.",

  source:
    "Instrução Normativa SGD/ME nº 94/2022",

  provision:
    "Itens 7.2.1 e 7.2.5",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/processo-de-contratacao-de-solucoes-de-tic-regido-pela-lei-ndeg-14-133-de-2021",

  trigger: {
    questionId: "sisp_scope",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado para exame porque a contratação está compreendida no âmbito da IN SGD/ME nº 94/2022, que inclui disponibilidade e continuidade entre os aspectos de Segurança da Informação e Privacidade a considerar, no que couber.",

  explanation:
    "A IN SGD/ME nº 94/2022 prevê que a especificação dos requisitos de Segurança da Informação e Privacidade considere aspectos que propiciem a disponibilidade da solução contratada e assegurem a continuidade do negócio apoiado pela solução de TIC.",

  humanReview:
    "Os níveis de disponibilidade, os mecanismos de continuidade e as responsabilidades correspondentes devem ser definidos de acordo com a criticidade, os riscos e as características da solução contratada."
},

  /* =======================================================
     DADOS PESSOAIS
     ======================================================= */

  {
    id: "CGT-DAD-01",

    module: "dados",

    title: "Segurança no tratamento de dados pessoais",

    nature: "Obrigatório",

    summary:
      "Examinar as medidas técnicas e administrativas de segurança necessárias ao tratamento de dados pessoais realizado no contexto da contratação.",

    materialization:
      "Termo de Referência e/ou instrumento contratual, conforme a modelagem da contratação.",

    source:
      "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais",

    provision:
      "Art. 46",

    sourceUrl:
      "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",

    trigger: {
      questionId: "personal_data",
      equals: "yes"
    },

    activationText:
      "Este requisito foi apresentado porque foi informado que a solução envolve tratamento de dados pessoais.",

    explanation:
      "O art. 46 da LGPD exige que os agentes de tratamento adotem medidas técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas.",

    humanReview:
      "A definição das medidas concretas e de sua forma de incorporação aos instrumentos da contratação depende de análise técnica e jurídica."
  },

{
  id: "CGT-DAD-02",

  module: "dados",

  title: "Registro das operações de tratamento de dados pessoais",

  nature: "Obrigatório",

  summary:
    "Examinar como serão mantidos os registros das operações de tratamento de dados pessoais realizadas no contexto da contratação.",

  materialization:
    "Termo de Referência, contrato e procedimentos de gestão ou fiscalização, conforme o caso.",

  source:
    "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais",

  provision:
    "Art. 37",

  sourceUrl:
    "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",

  trigger: {
    questionId: "personal_data",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que a contratação envolve tratamento de dados pessoais.",

  explanation:
    "O art. 37 da LGPD determina que controlador e operador mantenham registro das operações de tratamento de dados pessoais que realizarem.",

  humanReview:
    "A forma, o conteúdo e as responsabilidades relativas aos registros devem ser definidos de acordo com as operações de tratamento e os agentes envolvidos."
},

{
  id: "CGT-DAD-03",

  module: "dados",

  title: "Instruções ao operador de dados pessoais",

  nature: "Condicional",

  summary:
    "Examinar a definição das instruções que deverão orientar o tratamento de dados pessoais realizado pela contratada em nome do órgão.",

  materialization:
    "Termo de Referência e contrato.",

  source:
    "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais; Guia Orientativo da ANPD sobre agentes de tratamento",

  provision:
    "LGPD, art. 39; Guia da ANPD, versão 2.0",

  sourceUrl:
    "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/Segunda_Versao_do_Guia_de_Agentes_de_Tratamento_retificada.pdf",

  trigger: {
    questionId: "contractor_data_role",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que a contratada realizará tratamento de dados pessoais em nome do órgão contratante e segundo suas instruções.",

  explanation:
    "O art. 39 da LGPD estabelece que o operador deve realizar o tratamento segundo as instruções fornecidas pelo controlador. A ANPD utiliza essa atuação em nome do controlador como elemento central para caracterizar a função de operador.",

  humanReview:
    "A qualificação da contratada como operadora depende das atividades efetivamente desempenhadas e da estrutura concreta do tratamento de dados."
},

{
  id: "CGT-DAD-04",

  module: "dados",

  title: "Autorização para contratação de suboperador",

  nature: "Recomendado",

  summary:
    "Examinar a necessidade de autorização do órgão controlador para que a contratada recorra a terceiro no tratamento de dados pessoais.",

  materialization:
    "Termo de Referência e/ou contrato, conforme a estrutura da contratação.",

  source:
    "Guia Orientativo para Definições dos Agentes de Tratamento de Dados Pessoais e do Encarregado — ANPD",

  provision:
    "Versão 2.0, seção sobre suboperador",

  sourceUrl:
    "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/Segunda_Versao_do_Guia_de_Agentes_de_Tratamento_retificada.pdf",

  trigger: {
    questionId: "subprocessor",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que a contratada poderá recorrer a terceiro para auxiliá-la no tratamento de dados pessoais.",

  explanation:
    "A ANPD caracteriza o suboperador como o terceiro contratado pelo operador para auxiliá-lo no tratamento de dados pessoais em nome do controlador e recomenda que o operador obtenha autorização formal, genérica ou específica, do controlador para essa contratação.",

  humanReview:
    "Deve-se verificar se o terceiro efetivamente participará do tratamento de dados pessoais, a extensão de sua atuação e a forma adequada de autorização e responsabilização no caso concreto."
},

  {
    id: "CGT-INC-01",

    module: "dados",

    title: "Tratamento de incidentes envolvendo dados pessoais",

    nature: "Obrigatório",

    summary:
      "Examinar a distribuição de responsabilidades e o fluxo aplicável a incidentes de segurança que envolvam dados pessoais.",

    materialization:
      "Termo de Referência, contrato e procedimentos de gestão ou fiscalização, conforme o caso.",

    source:
      "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais",

    provision:
      "Art. 48",

    sourceUrl:
      "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",

    trigger: {
      questionId: "personal_data",
      equals: "yes"
    },

    activationText:
      "Este requisito foi apresentado porque foi informado que a contratação envolve tratamento de dados pessoais.",

    explanation:
      "O art. 48 da LGPD disciplina a comunicação de incidentes de segurança que possam acarretar risco ou dano relevante aos titulares. A contratação deve permitir a identificação das responsabilidades necessárias para o tratamento dessas situações.",

    humanReview:
      "A incidência das obrigações e a distribuição concreta de responsabilidades dependem dos agentes de tratamento e da estrutura adotada para a contratação."
  },

/* =======================================================
   PROPRIEDADE INTELECTUAL
   ======================================================= */

{
  id: "CGT-PI-01",

  module: "propriedade intelectual",

  title: "Direitos sobre artefatos e produtos produzidos na contratação",

  nature: "Obrigatório, salvo justificativa",

  summary:
    "Examinar a titularidade e a cessão dos direitos relativos aos artefatos e produtos cuja criação ou alteração seja objeto da relação contratual.",

  materialization:
    "Termo de Referência e contrato.",

  source:
    "Instrução Normativa SGD/ME nº 94/2022",

  provision:
    "Art. 17, I, alínea “h”, e II, alínea “h”",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/processo-de-contratacao-de-solucoes-de-tic-regido-pela-lei-ndeg-14-133-de-2021",

  trigger: {
    questionId: "software_creation",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que a contratação prevê criação ou alteração de software, código-fonte, documentação, modelos de dados ou bases de dados.",

  explanation:
    "A IN SGD/ME nº 94/2022 prevê que os direitos de propriedade intelectual e direitos autorais sobre os artefatos e produtos cuja criação ou alteração seja objeto da relação contratual pertençam à Administração, inclusive documentação, código-fonte de aplicações, modelos de dados e bases de dados, com justificativa nos casos em que isso não ocorrer.",

  humanReview:
    "Deve-se verificar a natureza dos artefatos envolvidos, a existência de componentes preexistentes ou de terceiros e eventual justificativa para solução distinta da regra prevista na IN."
},

/* =======================================================
   INTELIGÊNCIA ARTIFICIAL — DESENVOLVIMENTO DE SOFTWARE
   ======================================================= */

{
  id: "CGT-DEV-AI-01",

  module: "inteligência artificial",

  title: "Regras, limites e responsabilidades no desenvolvimento assistido por IA",

  nature: "Obrigatório",

  summary:
    "Definir as regras, os limites e as responsabilidades aplicáveis ao uso de ferramentas de inteligência artificial no desenvolvimento, manutenção ou sustentação de software.",

  materialization:
    "Termo de Referência.",

  source:
    "Portaria SGD/MGI nº 750/2023, consolidada",

  provision:
    "Anexo I, item 11.3.1",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-servicos-de-desenvolvimento-manutencao-e-sustentacao-de-software/portaria-sgd-mgi-no-750-de-20-de-marco-de-2023",

  trigger: {
    questionId: "ai_assisted_development",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que a contratada poderá utilizar ferramentas de inteligência artificial durante o desenvolvimento, manutenção ou sustentação de software.",

  explanation:
    "O item 11.3.1 determina que as regras, os limites e as responsabilidades do desenvolvimento de software assistido por inteligência artificial estejam previstos no Termo de Referência e em conformidade com a Política de Governança de IA do órgão, caso exista.",

  humanReview:
    "Devem ser definidos os usos permitidos e vedados, as responsabilidades das partes e a compatibilidade com eventual política institucional de governança de IA."
},

{
  id: "CGT-DEV-AI-02",

  module: "inteligência artificial",

  title: "Responsabilidade pelos custos das ferramentas de IA",

  nature: "Obrigatório",

  summary:
    "Definir de forma clara a responsabilidade pelos custos decorrentes do uso de ferramentas de inteligência artificial na execução dos serviços de software.",

  materialization:
    "Termo de Referência.",

  source:
    "Portaria SGD/MGI nº 750/2023, consolidada",

  provision:
    "Anexo I, item 11.3.2",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-servicos-de-desenvolvimento-manutencao-e-sustentacao-de-software/portaria-sgd-mgi-no-750-de-20-de-marco-de-2023",

  trigger: {
    questionId: "ai_assisted_development",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que ferramentas de inteligência artificial poderão ser utilizadas na execução dos serviços de software.",

  explanation:
    "O item 11.3.2 determina que o Termo de Referência atribua de forma clara e objetiva as responsabilidades quanto aos custos decorrentes do uso de ferramentas de inteligência artificial.",

  humanReview:
    "A Administração deverá definir a distribuição dos custos de forma compatível com o modelo de remuneração e com as condições concretas da contratação."
},

{
  id: "CGT-DEV-AI-03",

  module: "inteligência artificial",

  title: "Privacidade e segurança no desenvolvimento de software assistido por IA",

  nature: "Obrigatório",

  summary:
    "Definir previamente os requisitos de privacidade e segurança da informação relacionados ao uso de ferramentas de inteligência artificial no desenvolvimento de software.",

  materialization:
    "Termo de Referência.",

  source:
    "Portaria SGD/MGI nº 750/2023, consolidada",

  provision:
    "Anexo I, item 11.3.3",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-servicos-de-desenvolvimento-manutencao-e-sustentacao-de-software/portaria-sgd-mgi-no-750-de-20-de-marco-de-2023",

  trigger: {
    questionId: "ai_assisted_development",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que ferramentas de inteligência artificial poderão ser utilizadas no desenvolvimento, manutenção ou sustentação de software.",

  explanation:
    "O item 11.3.3 determina que os aspectos de privacidade e segurança da informação relacionados ao desenvolvimento de software assistido por IA sejam previamente definidos e constem expressamente no Termo de Referência, em conformidade com a Política de Segurança da Informação do órgão.",

  humanReview:
    "Devem ser avaliados, entre outros aspectos pertinentes ao caso, os dados e artefatos que poderão ser fornecidos às ferramentas de IA, as restrições de acesso e as políticas institucionais aplicáveis."
},

/* =======================================================
   INTELIGÊNCIA ARTIFICIAL — INFRAESTRUTURA
   ======================================================= */

{
  id: "CGT-INF-AI-01",

  module: "inteligência artificial",

  title: "Autorização e governança do uso de IA em serviços de infraestrutura",

  nature: "Obrigatório",

  summary:
    "Autorizar expressamente o uso de ferramentas de inteligência artificial e definir as regras, os limites e as responsabilidades aplicáveis à sua utilização pela contratada.",

  materialization:
    "Termo de Referência ou política de governança de IA referenciada no instrumento convocatório.",

  source:
    "Portaria SGD/MGI nº 1.070/2023, consolidada",

  provision:
    "Anexo I, itens 8.7 e 8.7.1",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contracao-de-servicos-de-operacao-de-infraestrutura-e-de-atendimento-a-usuarios-de-tic/portaria-sgd-mgi-no-1-070-de-1o-de-junho-de-2023",

  trigger: {
    questionId: "ai_infra_use",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que a contratada poderá utilizar ferramentas de inteligência artificial nos serviços de infraestrutura ou atendimento a usuários.",

  explanation:
    "A Portaria exige autorização expressa para o uso de ferramentas de IA e, quando seu uso for admitido, determina a definição das regras, dos limites e das responsabilidades correspondentes, em conformidade com eventual Política de Governança de IA do órgão.",

  humanReview:
    "Devem ser identificados os usos autorizados, as restrições aplicáveis, as responsabilidades das partes e a política institucional eventualmente incidente."
},

{
  id: "CGT-INF-AI-02",

  module: "inteligência artificial",

  title: "Custos e condições de uso de IA em serviços de infraestrutura",

  nature: "Obrigatório",

  summary:
    "Definir a responsabilidade pelos custos das ferramentas de inteligência artificial e, quando suportados pela contratante, estabelecer seus limites e condições de uso.",

  materialization:
    "Termo de Referência.",

  source:
    "Portaria SGD/MGI nº 1.070/2023, consolidada",

  provision:
    "Anexo I, itens 8.7.2 e 8.7.2.1",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contracao-de-servicos-de-operacao-de-infraestrutura-e-de-atendimento-a-usuarios-de-tic/portaria-sgd-mgi-no-1-070-de-1o-de-junho-de-2023",

  trigger: {
    questionId: "ai_infra_use",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que ferramentas de inteligência artificial poderão ser utilizadas pela contratada na execução dos serviços.",

  explanation:
    "A Portaria determina que o Termo de Referência atribua a responsabilidade pelos custos das ferramentas de IA e, quando o custeio couber à contratante, estabeleça os respectivos limites e condições de uso.",

  humanReview:
    "A distribuição dos custos e as condições de utilização devem ser compatibilizadas com a modelagem econômica e operacional da contratação."
},

{
  id: "CGT-INF-AI-03",

  module: "inteligência artificial",

  title: "Privacidade e segurança no uso de IA em serviços de infraestrutura",

  nature: "Obrigatório",

  summary:
    "Definir previamente os aspectos de privacidade e segurança da informação relacionados ao uso de ferramentas de inteligência artificial pela contratada.",

  materialization:
    "Termo de Referência.",

  source:
    "Portaria SGD/MGI nº 1.070/2023, consolidada",

  provision:
    "Anexo I, item 8.7.3",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contracao-de-servicos-de-operacao-de-infraestrutura-e-de-atendimento-a-usuarios-de-tic/portaria-sgd-mgi-no-1-070-de-1o-de-junho-de-2023",

  trigger: {
    questionId: "ai_infra_use",
    equals: "yes"
  },

  activationText:
    "Este requisito foi apresentado porque foi informado que a contratada poderá utilizar inteligência artificial na prestação dos serviços de infraestrutura ou atendimento a usuários.",

  explanation:
    "O item 8.7.3 determina que os aspectos de privacidade e segurança da informação relacionados ao uso de ferramentas de IA pela contratada sejam previamente definidos e constem expressamente no Termo de Referência, em conformidade com a Política de Segurança da Informação do órgão.",

  humanReview:
    "Devem ser identificados os dados, credenciais, registros, informações e ambientes aos quais as ferramentas poderão ter acesso, bem como as restrições e controles aplicáveis."
},

/* =======================================================
   INTELIGÊNCIA ARTIFICIAL — REFERÊNCIA COMPARADA
   ======================================================= */

{
  id: "CGT-AI-REF-01",

  module: "inteligência artificial",

  title: "Cláusulas específicas para sistemas de inteligência artificial",

  nature: "Referência comparada",

  summary:
    "Considerar, como referência comparada e de forma proporcional ao caso concreto, cláusulas sobre responsabilidades, transparência, documentação, auditoria, dados e mecanismos de supervisão relacionados ao sistema de inteligência artificial contratado.",

  materialization:
    "Termo de Referência e contrato, após avaliação de pertinência pela Administração.",

  source:
    "European Commission — EU AI Model Contractual Clauses",

  provision:
    "Updated EU AI Model Contractual Clauses, 2025",

  sourceUrl:
    "https://public-buyers-community.ec.europa.eu/communities/procurement-ai/resources/updated-eu-ai-model-contractual-clauses",

  trigger: {
    questionId: "ai_solution",
    equals: "yes"
  },

  activationText:
    "Esta referência foi apresentada porque foi informado que a própria solução contratada incorpora sistema ou funcionalidade de inteligência artificial.",

  explanation:
    "As EU AI Model Contractual Clauses oferecem modelos destinados a contratações públicas de sistemas de inteligência artificial, com versões adaptáveis a diferentes níveis de risco. Sua utilização neste protótipo tem caráter exclusivamente comparativo e não substitui a legislação brasileira aplicável.",

  humanReview:
    "A utilização de qualquer cláusula comparada exige avaliação de compatibilidade com o objeto, com a legislação brasileira, com o regime jurídico da contratação e com os riscos concretos da solução."
},



  /* =======================================================
     SOFTWARE E COMPUTAÇÃO EM NUVEM
     ======================================================= */

{
  id: "CGT-CLD-SEC-01",

  module: "nuvem",

  title: "Comunicação de eventos de segurança em serviços de nuvem",

  nature: "Obrigatório",

  summary:
    "Prever canais previamente definidos para comunicação rápida e eficiente de eventos de segurança da informação relacionados aos serviços em nuvem.",

  materialization:
    "Termo de Referência, contrato e procedimentos de gestão e fiscalização.",

  source:
    "Portaria SGD/MGI nº 5.950/2023",

  provision:
    "Anexo I, item 10.2, alínea “d”",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-software-e-servicos-em-nuvem/vigentes/modelo-de-contratacao-de-software-e-nuvem/portaria-sgd-mgi-no-5-950-de-26-de-outubro-de-2023",

  anyOf: [
    {
      questionId: "cloud",
      equals: "yes"
    },
    {
      questionId: "software_model",
      equals: "subscription_saas"
    }
  ],

  activationText:
    "Este requisito foi apresentado porque as informações fornecidas indicam utilização de serviço de computação em nuvem ou de Software como Serviço (SaaS).",

  explanation:
    "O item 10.2 da Portaria SGD/MGI nº 5.950/2023 determina, nas contratações de serviços em nuvem, a definição prévia de canais para comunicação rápida e eficiente de eventos de segurança da informação, observados os requisitos legais, regulatórios e contratuais aplicáveis.",

  humanReview:
    "Devem ser definidos os responsáveis, os canais, os prazos e os procedimentos aplicáveis à comunicação de eventos de segurança conforme os riscos e as características da solução."
},

{
  id: "CGT-CLD-SEC-02",

  module: "nuvem",

  title: "Logs, controle de acesso e criptografia em serviços de nuvem",

  nature: "Obrigatório",

  summary:
    "Examinar requisitos relativos a logs de auditoria, controle de acesso, gerenciamento de identidades e uso de criptografia nos serviços em nuvem.",

  materialization:
    "Termo de Referência, contrato e instrumentos de gestão e fiscalização.",

  source:
    "Portaria SGD/MGI nº 5.950/2023",

  provision:
    "Anexo I, item 10.2, alíneas “f” a “l”",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-software-e-servicos-em-nuvem/vigentes/modelo-de-contratacao-de-software-e-nuvem/portaria-sgd-mgi-no-5-950-de-26-de-outubro-de-2023",

  anyOf: [
    {
      questionId: "cloud",
      equals: "yes"
    },
    {
      questionId: "software_model",
      equals: "subscription_saas"
    }
  ],

  activationText:
    "Este requisito foi apresentado porque as informações fornecidas indicam utilização de serviço de computação em nuvem ou de Software como Serviço (SaaS).",

  explanation:
    "A Portaria prevê requisitos mínimos relacionados à manutenção e disponibilização de logs, controle lógico de acesso, gerenciamento de identidades, proteção das transferências de dados, criptografia e isolamento dos recursos e dados mantidos em ambiente de nuvem.",

  humanReview:
    "A configuração técnica dos controles, os prazos de retenção, os níveis de acesso e os mecanismos criptográficos devem ser definidos de acordo com a classificação das informações, os riscos da contratação e as normas aplicáveis."
},

{
  id: "CGT-CLD-DAT-01",

  module: "nuvem",

  title: "Localização, confidencialidade e limites de uso dos dados em nuvem",

  nature: "Obrigatório",

  summary:
    "Definir limites geográficos para armazenamento e processamento de dados e prever obrigações de confidencialidade e restrições ao uso não autorizado das informações do órgão.",

  materialization:
    "Termo de Referência e contrato.",

  source:
    "Portaria SGD/MGI nº 5.950/2023",

  provision:
    "Anexo I, item 10.2, alíneas “m” e “n”",

  sourceUrl:
    "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-software-e-servicos-em-nuvem/vigentes/modelo-de-contratacao-de-software-e-nuvem/portaria-sgd-mgi-no-5-950-de-26-de-outubro-de-2023",

  anyOf: [
    {
      questionId: "cloud",
      equals: "yes"
    },
    {
      questionId: "software_model",
      equals: "subscription_saas"
    }
  ],

  activationText:
    "Este requisito foi apresentado porque as informações fornecidas indicam utilização de serviço de computação em nuvem ou de Software como Serviço (SaaS).",

  explanation:
    "A Portaria determina que sejam definidos os países e as regiões em que os serviços poderão ser prestados e os dados armazenados, processados ou gerenciados. Prevê ainda termo de confidencialidade com restrições ao uso, transferência ou liberação das informações do órgão, inclusive para usos secundários não autorizados.",

  humanReview:
    "Os limites territoriais, as restrições de acesso e as hipóteses admissíveis de tratamento ou transferência devem ser compatibilizados com a natureza dos dados, a legislação aplicável e a arquitetura da solução."
},

  {
    id: "CGT-POR-01",

    module: "nuvem",

    title: "Portabilidade, interoperabilidade e dependência tecnológica",

    nature: "Condicional",

    summary:
      "Examinar mecanismos de portabilidade e interoperabilidade e medidas destinadas a reduzir dependência tecnológica ou aprisionamento ao provedor.",

    materialization:
      "Estudo Técnico Preliminar, Termo de Referência e demais instrumentos pertinentes ao planejamento da contratação.",

    source:
      "Portaria SGD/MGI nº 5.950/2023",

    provision:
  "Anexo I, itens 8.1, 8.2 e 8.5",

    sourceUrl:
      "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-software-e-servicos-em-nuvem/vigentes/portaria-sgd-mgi-no-5-950-de-26-de-outubro-de-2023",

    anyOf: [

  {
    questionId: "cloud",
    equals: "yes"
  },

  {
    questionId: "software_model",
    in: [
  "permanent_license",
  "temporary_license",
  "subscription_saas"
]
  }

],

    activationText:
  "Este requisito foi apresentado porque as características informadas indicam contratação de software ou de serviços de computação em nuvem compreendida no modelo da Portaria SGD/MGI nº 5.950/2023.",

   explanation:
  "O modelo determina a avaliação do grau de dependência da solução e o planejamento de medidas destinadas a reduzir os impactos de eventual substituição. Prevê, ainda, ações preventivas contra dependência tecnológica e aprisionamento ao provedor, inclusive mediante padrões interoperáveis, e determina que o Termo de Referência assegure a portabilidade de dados e aplicações nas situações abrangidas.",

    humanReview:
      "As medidas adequadas dependem da arquitetura da solução, do modelo de contratação e das possibilidades técnicas de migração."
  },


  {
    id: "CGT-EXIT-01",

    module: "nuvem",

    title: "Transição, encerramento e devolução de dados",

    nature: "Condicional",

    summary:
      "Examinar as condições necessárias para transição e encerramento contratual, inclusive devolução de dados, informações e sistemas.",

    materialization:
      "Termo de Referência e contrato.",

    source:
      "Portaria SGD/MGI nº 5.950/2023",

    provision:
  "Anexo I, item 24.1",

    sourceUrl:
      "https://www.gov.br/governodigital/pt-br/contratacoes-de-tic/legislacao/modelo-de-contratacao-de-software-e-servicos-em-nuvem/vigentes/portaria-sgd-mgi-no-5-950-de-26-de-outubro-de-2023",

    anyOf: [

  {
    questionId: "cloud",
    equals: "yes"
  },

  {
    questionId: "software_model",
    in: [
  "permanent_license",
  "temporary_license",
  "subscription_saas"
]
  }

],

    activationText:
      "Este requisito foi apresentado porque foi informado que a contratação envolve serviços de computação em nuvem.",

    explanation:
  "O item 24.1 do Anexo I da Portaria SGD/MGI nº 5.950/2023 determina o estabelecimento de procedimento de transição e encerramento contratual, incluindo obrigações relativas à devolução de dados, informações e sistemas, à eliminação de dados e à retenção conforme a legislação aplicável.",

    humanReview:
      "Os procedimentos concretos devem ser definidos de acordo com a solução contratada e com as responsabilidades atribuídas às partes."
  },



  /* =======================================================
     SUBCONTRATAÇÃO
     ======================================================= */

  {
    id: "CGT-SUB-01",

    module: "subcontratacao",

    title: "Limites e condições para subcontratação",

    nature: "Condicional",

    summary:
      "Examinar se haverá subcontratação e quais limites, condições, responsabilidades e vedações devem ser considerados.",

    materialization:
      "Edital e contrato, conforme a modelagem adotada.",

    source:
      "Lei nº 14.133/2021 — Lei de Licitações e Contratos Administrativos",

    provision:
      "Art. 122",

    sourceUrl:
      "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm",

    trigger: {
      questionId: "third_parties",
      equals: "yes"
    },

    activationText:
      "Este requisito foi apresentado porque foi informada a participação de terceiros ou a possibilidade de subcontratação na execução do objeto.",

    explanation:
      "O art. 122 da Lei nº 14.133/2021 disciplina a subcontratação de partes da obra, serviço ou fornecimento e prevê limites, comprovação de capacidade técnica e possibilidade de restrições ou condições.",

    humanReview:
      "A admissibilidade, os limites e as condições concretas da subcontratação devem ser definidos pela Administração para o caso analisado."
  }

];



/* ---------------------------------------------------------
   INFORMAÇÕES DA BASE
   --------------------------------------------------------- */

window.CGT_DATABASE = {

version: "1.0",
updatedAt: "30/09/2026",  

  scope:
    "Contratações de soluções de TIC realizadas por órgãos e entidades integrantes do SISP, dentro do âmbito de aplicação da IN SGD/ME nº 94/2022.",

  disclaimer:
    "O resultado identifica matérias contratuais a partir do escopo normativo incorporado ao protótipo. Não constitui parecer jurídico, certificação de conformidade ou declaração de regularidade da contratação. A revisão humana permanece necessária."

};