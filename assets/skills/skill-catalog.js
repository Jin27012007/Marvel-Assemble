// Padrões globais opcionais. Personagens podem sobrescrever/definir suas próprias animações em character-catalog.js.
// Use {frame} para numerar arquivos a partir de 1. Spritesheets horizontais devem informar frames e fps.
window.MARVEL_SKILL_SPRITES = {
  "Elevação de Ego - Salto": { pattern: "assets/skills/Elevação de Ego - Salto{frame}.png", frames: 1, fps: 8, loop: false },
  "Elevação de Ego": { pattern: "assets/skills/Elevação de Ego{frame}.png", frames: 4, fps: 8, loop: true },

  // Sequências distintas para os dois tiros rápidos e o disparo carregado.
  "Repulsor tiro 1": { pattern: "assets/skills/Repulsor tiro 1 {frame}.png", frames: 2, fps: 12, loop: false },
  "Repulsor tiro 2": { pattern: "assets/skills/Repulsor tiro 2 {frame}.png", frames: 2, fps: 12, loop: false },
  "Repulsor carregado": { pattern: "assets/skills/Repulsor carregado{frame}.png", frames: 5, fps: 10, loop: false }
};
