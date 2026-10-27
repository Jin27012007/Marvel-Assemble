/* Marvel Assemble — mapa inicial de animações.
 * Os nomes abaixo definem a estrutura esperada para os sprites recortados.
 * Os PNGs atuais do pacote são recortes de referência, não frames individuais
 * prontos para reprodução. Não use frameWidth/frameHeight até padronizar os frames.
 */
window.MARVEL_SPRITE_ANIMATIONS = {
  intro:          { file: "intro.png",          fps: 8,  loop: false },
  idle:           { file: "idle.png",           fps: 6,  loop: true  },
  walk:           { file: "walk.png",           fps: 10, loop: true  },
  run:            { file: "run.png",            fps: 12, loop: true  },
  jump:           { file: "jump.png",           fps: 9,  loop: false },
  flight:         { file: "flight.png",         fps: 10, loop: true  },
  repulsorBasic:  { file: "repulsor_basic.png", fps: 12, loop: false },
  dualShot:       { file: "dual_shot.png",      fps: 12, loop: false },
  chargedAttack:  { file: "charged_attack.png", fps: 8,  loop: false },
  unibeam:        { file: "unibeam.png",        fps: 10, loop: false },
  missiles:       { file: "missiles.png",       fps: 10, loop: false },
  airAttack:      { file: "air_attack.png",     fps: 10, loop: false },
  energyShield:   { file: "energy_shield.png",  fps: 8,  loop: false },
  powerPose:      { file: "power_pose.png",     fps: 8,  loop: false },
  damage:         { file: "damage.png",         fps: 10, loop: false },
  defeated:       { file: "defeated.png",       fps: 8,  loop: false },
  getUp:          { file: "get_up.png",          fps: 8,  loop: false },
  slide:          { file: "slide.png",           fps: 10, loop: false },
  extras:         { file: "extras.png",          fps: 8,  loop: false },
  effects:        { file: "effects.png",         fps: 12, loop: false }
};