module.exports = {
  reporters: [
    
    "default",
    "jest-allure",
    [
      "jest-html-reporter",
      {
        pageTitle: "Relatório de Testes",
        outputPath: "./reports/test-report.html",
        includeFailureMsg: true,
        includeConsoleLog: true,
        theme: "darkTheme",
        customInfos: [
          { title: "Autor", value: "Taynara Luana" },
          { title: "Projeto", value: "Automação de Testes API" },
          { title: "Data", value: new Date().toLocaleDateString() },
        ],
      },
    ],
  ],
  collectCoverage: true,
  coverageDirectory: "./coverage",
};
