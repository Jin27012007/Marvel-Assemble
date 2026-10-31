// Padrões globais opcionais. Personagens podem sobrescrever/definir suas próprias animações em character-catalog.js.
// Use {frame} para numerar arquivos a partir de 1. Spritesheets horizontais devem informar frames e fps.
window.MARVEL_SKILL_SPRITES = {
  "Cruzado Tech": { pattern: "assets/skills/Cruzado Tech{frame}.png", frames: 6, fps: 10, loop: false },
  "Trava de Bombardeio": { pattern: "assets/skills/Trava de Bombardeio{frame}.png", frames: 6, fps: 10, loop: false },
  "Repulsor": { pattern: "assets/skills/Repulsor{frame}.png", frames: 4, fps: 10, loop: false },
  "Elevação de Ego - Salto": { pattern: "assets/skills/Elevação de Ego - Salto{frame}.png", frames: 1, fps: 8, loop: false },
  "Elevação de Ego": { pattern: "assets/skills/Elevação de Ego{frame}.png", frames: 4, fps: 8, loop: true }
  // Animações do disparo do Homem de Ferro: 2 quadros por tiro simples e 5 no carregado.
  "Repulsor curto 1": { src: "assets/skills/Repulsor curto1.png", frames: 1, fps: 12, loop: false },
  "Repulsor curto 2": { src: "assets/skills/Repulsor curto2.png", frames: 1, fps: 12, loop: false },
  "Repulsor carregado 1": { src: "assets/skills/Repulsor carregado1.png", frames: 1, fps: 10, loop: false },
  "Repulsor carregado 2": { src: "assets/skills/Repulsor carregado2.png", frames: 1, fps: 10, loop: false },
  "Repulsor carregado 3": { src: "assets/skills/Repulsor carregado3.png", frames: 1, fps: 10, loop: false },
  "Repulsor carregado 4": { src: "assets/skills/Repulsor carregado4.png", frames: 1, fps: 10, loop: false },
  "Repulsor carregado 5": { src: "assets/skills/Repulsor carregado5.png", frames: 1, fps: 10, loop: false }
};
