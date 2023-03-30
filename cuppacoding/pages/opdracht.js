import Head from "next/head";
import Image from "next/image";
import Nav from "@/components/nav";
import HomeStyle from "@/styles/home.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import  vscDarkPlus  from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import mdStyles from "@/styles/mdStyles.module.css";
import opdrachtStyles from "@/styles/opdrachtStyles.module.css";


function getLanguage(string) {
  if (!string) {
    return "unknown";
  }
  const parts = string.split("-");
  if (parts.length < 2) {
    return "unknown";
  }
  return parts[1];
}

const CodeBlock = (props) => {
  const { language, value, children,className } = props;
  console.log(props);
  console.log(value);
  return (
    <>
    <SyntaxHighlighter   language={getLanguage(className)}>{children}</SyntaxHighlighter>

    </>
  );
};

const components = {
  code: CodeBlock,
};

const markdown = "# Oefening: Check priemgetal \r\n\n## Omschrijving\n\nSchrijf een functie die bepaalt of een gegeven getal een priemgetal is. \nJe kunt gebruik maken van de `div(n)` functie om de delers van het getal op te vragen.\n\n## Opdracht\nImplementeer de functie `is_prime(n)` volgens onderstaande specificaties:\n\n```python\ndef is_prime(n):\n'''\nBepaal of gegeven getal een priemgetal is.\nArgs:\n\n (int): Een geheel getal.\nReturns:\nbool: True als het getal een priemgetal is, anders False.\n'''\n```\nHet algoritme om te bepalen of een getal een priemgetal is kan als volgt worden geïmplementeerd:\n1. Controleer of het getal n kleiner of gelijk is aan 1. Als dit het geval is, is het geen priemgetal.\n2. Controleer of het getal n deelbaar is door 2 of 3. Als dit het geval is, is het geen priemgetal.\n3. Controleer of het getal n deelbaar is door een oneven getal i tussen 5 en de vierkantswortel van n (afgerond naar beneden). Als dit het geval is, is het geen priemgetal. Je kunt hiervoor gebruik maken van de sqrt() functie uit de math module.\nTip: het hergebruiken van andere functies wordt aangemoedigd!\nTip: als je twijfelt over de werking van de functie, kun je een paar eenvoudige tests uitvoeren om\nte controleren of de uitvoer correct is.\n## Bronnen\n\n* [Math-module in python](https://www.w3schools.com/python/python_math.asp)\n* [Wikipedia over priemgetallen](https://nl.wikipedia.org/wiki/Priemgetal)";
// const markdown = `
// # Example Markdown

// \`\`\`jsx
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
// \`\`\`
// `;
export default function Opdracht() {
    

    // const md = "# Oefening: Check priemgetal \r\n\n## Omschrijving\n\nSchrijf een functie die bepaalt of een gegeven getal een priemgetal is. \nJe kunt gebruik maken van de `div(n)` functie om de delers van het getal op te vragen.\n\n## Opdracht\nImplementeer de functie `is_prime(n)` volgens onderstaande specificaties:\n\n```python\ndef is_prime(n):\n'''\nBepaal of gegeven getal een priemgetal is.\nArgs:\n\n (int): Een geheel getal.\nReturns:\nbool: True als het getal een priemgetal is, anders False.\n'''\n```\nHet algoritme om te bepalen of een getal een priemgetal is kan als volgt worden geïmplementeerd:\n1. Controleer of het getal n kleiner of gelijk is aan 1. Als dit het geval is, is het geen priemgetal.\n2. Controleer of het getal n deelbaar is door 2 of 3. Als dit het geval is, is het geen priemgetal.\n3. Controleer of het getal n deelbaar is door een oneven getal i tussen 5 en de vierkantswortel van n (afgerond naar beneden). Als dit het geval is, is het geen priemgetal. Je kunt hiervoor gebruik maken van de sqrt() functie uit de math module.\nTip: het hergebruiken van andere functies wordt aangemoedigd!\nTip: als je twijfelt over de werking van de functie, kun je een paar eenvoudige tests uitvoeren om\nte controleren of de uitvoer correct is.\n## Bronnen\n\n* [Math-module in python](https://www.w3schools.com/python/python_math.asp)\n* [Wikipedia over priemgetallen](https://nl.wikipedia.org/wiki/Priemgetal)";
  return (
    <>
      <div className={HomeStyle.container}>
        <Nav />
        <div className={opdrachtStyles.container} data-level={1}>
          <ReactMarkdown
            className={mdStyles.container}
            components={components}
          >
            {markdown}
            </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

