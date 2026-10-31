// Padrões globais opcionais. Personagens podem sobrescrever/definir suas próprias animações em character-catalog.js.
// Use {frame} para numerar arquivos a partir de 1. Spritesheets horizontais devem informar frames e fps.
window.MARVEL_SKILL_SPRITES = {
  "Cruzado Tech": { pattern: "assets/skills/Cruzado Tech{frame}.png", frames: 6, fps: 10, loop: false },
  "Trava de Bombardeio": { pattern: "assets/skills/Trava de Bombardeio{frame}.png", frames: 6, fps: 10, loop: false },
  "Repulsor": { pattern: "assets/skills/Repulsor{frame}.png", frames: 4, fps: 10, loop: false },
  "Elevação de Ego - Salto": { pattern: "assets/skills/Elevação de Ego - Salto{frame}.png", frames: 1, fps: 8, loop: false },
  "Elevação de Ego": { pattern: "assets/skills/Elevação de Ego{frame}.png", frames: 4, fps: 8, loop: true },

  // Primeiro disparo: dois quadros. Segundo disparo: dois quadros. Disparo carregado: cinco quadros.
  "Repulsor curto": { pattern: "assets/skills/Repulsor curto{frame}.png", frames: 2, fps: 12, loop: false },
  "Repulsor carregado": { pattern: "assets/skills/Repulsor carregado{frame}.png", frames: 5, fps: 10, loop: false }
};
