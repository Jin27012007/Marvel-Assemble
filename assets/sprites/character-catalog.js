// Contrato de assets por personagem. Para adicionar arte, crie a pasta assets/sprites/<id>/ e edite somente este catálogo.
// Cada animação declara o arquivo, quantidade de quadros (frames), FPS e se repete (loop).
window.MARVEL_CHARACTER_CATALOG = [
  {
    id: "ironman", name: "IRON MAN", subtitle: "PERSONAGEM DISPONÍVEL", visual: "sprite", available: true,
    portrait: "assets/sprites/ironman/portrait.png", maxHp: 300, maxEn: 200,
    animations: {
      idle: { src: "assets/sprites/ironman/idle.png", frames: 1, fps: 1, loop: true },
      walk: { src: "assets/sprites/ironman/walk-4frames.png", frames: 4, fps: 8, loop: true },
      flightTakeoff: { src: "assets/skills/Elevação de Ego - Salto1.png", frames: 1, fps: 8, loop: false },
      flight: { src: "assets/skills/Elevação de Ego1.png", pattern: "assets/skills/Elevação de Ego{frame}.png", frames: 4, fps: 8, loop: true },
      landing: { src: "assets/skills/Elevação de Ego - Pouso1.png", pattern: "assets/skills/Elevação de Ego - Pouso{frame}.png", frames: 3, fps: 8, loop: false }
    },
    skills: {
      "Cruzado Tech": { pattern: "assets/skills/Cruzado Tech{frame}.png", frames: 6, fps: 10, loop: false },
      "Trava de Bombardeio": { pattern: "assets/skills/Trava de Bombardeio{frame}.png", frames: 6, fps: 10, loop: false },
      "Repulsor": { pattern: "assets/skills/Repulsor{frame}.png", frames: 4, fps: 10, loop: false }
    }
  },
  { id: "generic", name: "MODELO GENÉRICO", subtitle: "MODELO BASE · TESTE", visual: "generic", available: true, maxHp: 300, maxEn: 180, animations: {}, skills: {} }
];
