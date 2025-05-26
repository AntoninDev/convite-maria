// src/components/ConviteAniversario.jsx
import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const ConviteAniversario = () => {
  return (
    <>
    <div className="convite-container">
      <motion.div
        className="confete"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, -10, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        >
        🎉 🎊 🎉 🎊 🎉
      </motion.div>

      <motion.div
        className="convite-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        >
        <h1 className="titulo">🎂 Convite Especial</h1>
        <div className="mensagem">
          <p>🎀 <strong>Maria Luiza faz 1 aninho!</strong> 🎀</p>
          <p>E você é nosso convidado especial para comemorar esse momento encantado.</p>
          <p>Venha celebrar com a gente o primeiro ano de uma história cheia de amor, sorrisos e descobertas! ✨💗</p>
          <p><strong>Esperamos por você!</strong></p>
        </div>

        <div className="info">
          <p><strong>📅 Data:</strong> 11 de Julho de 2025</p>
          <p><strong>⏰ Hora:</strong> 15h00</p>
          <p><strong>📍 Local:</strong> Loteamento em frente a aldeia veiculos, Rua projetada D</p>
        </div>

      </motion.div>

    </div>
    <footer className="assinatura-site">
    <p className="assinatura-site">Site feito por <strong>AntoninDev</strong> © 2025</p>
    </footer>
        </>
  );
};

export default ConviteAniversario;
