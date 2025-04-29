// Site.jsx
import React from 'react';
import './Site.css';

function Site() {
  return (
    <div className="container">
      <header>
        <h1>👾 Vírus de Computador</h1>
        <p>Entenda, previna e proteja seus dispositivos.</p>
      </header>

      <section>
        <h2>O que é um vírus?</h2>
        <p>

          Um vírus é um programa malicioso que se replica e pode causar danos como apagar arquivos,
          roubar informações ou deixar seu sistema lento.
          Um vírus de computador é um tipo de malware projetado para se espalhar entre sistemas, causar danos a dados e software, e interromper operações. Ele se anexa a arquivos executáveis e, ao serem abertos, executa seu código malicioso, propagando-se por redes, dispositivos de armazenamento, programas de compartilhamento e e-mails infectados.
        </p>
      </section>

      <section>
        <h2>Como eles entram no seu sistema?</h2>
        <ula>
          <li>Downloads de fontes não confiáveis</li>
          <li>Cliques em links suspeitos</li>
          <li>Instalação de programas piratas</li>
          <li>Acesso a sites perigosos</li>
        </ula>
      </section>

      <section>
        <h2>Dicas para se proteger✅</h2>
        <ul>
          <li> Use antivírus confiável e atualizado</li>
          <li> Baixe apps apenas de lojas oficiais</li>
          <li> Desconfie de links e mensagens suspeitas</li>
          <li> Mantenha o sistema sempre atualizado</li>
          <li> Faça backup dos seus dados</li>
        </ul>
      </section>

      <section>
        <ul>
        <h2>Se for infectado🛡️</h2>
          <li> Rode um antivírus</li>
          <li> Remova apps suspeitos</li>
          <li> Troque senhas importantes</li>
          <li> Restaure o sistema se necessário</li>
          </ul>
    
      </section>

      <footer>
        <p>🔒 Segurança é prevenção. Cuide dos seus dados!</p>
      </footer>
    </div>
  );
}

export default Site;
