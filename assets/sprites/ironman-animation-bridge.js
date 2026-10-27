/* Ponte provisória de animação para o protótipo.
 * Enquanto os PNGs finais não estão divididos em frames limpos, aplica
 * pequenas oscilações procedurais ao sprite desenhado por drawIron().
 * Não substitui os frames da arte enviada; pode ser removido quando o player
 * real de spritesheets for conectado.
 */
(function () {
  const style = document.createElement("style");
  style.textContent = "";
  // Patch intencionalmente opt-in: o jogo principal continua seguro caso
  // este arquivo não seja incluído.
  window.MarvelMotionBridge = {
    modeFromVelocity(vx, vy, onGround) {
      if (!onGround) return "jump";
      if (Math.abs(vx) > 145) return "run";
      if (Math.abs(vx) > 12) return "walk";
      return "idle";
    },
    pose(mode, time) {
      const phase = time * (mode === "run" ? 14 : mode === "walk" ? 9 : 3);
      return {
        bob: mode === "idle" ? Math.sin(phase) * 1.2 : Math.abs(Math.sin(phase)) * (mode === "run" ? 2.5 : 1.4),
        lean: mode === "run" ? 3 : mode === "walk" ? 1.5 : 0,
        step: mode === "run" ? Math.sin(phase) * 5 : mode === "walk" ? Math.sin(phase) * 2.8 : 0
      };
    }
  };
})();