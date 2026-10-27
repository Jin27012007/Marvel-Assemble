/* Marvel Assemble — player de sprite para Canvas 2D.
 * Uso: const player = new SpritePlayer({ idle: { image: img, frames: 6, fps: 8, loop: true } });
 * Chame player.play("walk") e player.draw(ctx, x, y, width, height).
 * As imagens devem ser spritesheets horizontais com frames de mesma dimensão.
 */
(function (root) {
  class SpritePlayer {
    constructor(animations = {}) {
      this.animations = animations;
      this.current = null;
      this.frame = 0;
      this.elapsed = 0;
      this.finished = false;
    }
    add(name, image, frameWidth, frameHeight, fps = 10, loop = true) {
      this.animations[name] = { image, frameWidth, frameHeight, frames: Math.max(1, Math.floor(image.width / frameWidth)), fps, loop };
      return this;
    }
    play(name, restart = false) {
      if (!this.animations[name]) return false;
      if (this.current !== name || restart) {
        this.current = name;
        this.frame = 0;
        this.elapsed = 0;
        this.finished = false;
      }
      return true;
    }
    update(dtSeconds) {
      const a = this.animations[this.current];
      if (!a || this.finished || a.fps <= 0) return;
      this.elapsed += Math.max(0, dtSeconds);
      const step = 1 / a.fps;
      while (this.elapsed >= step) {
        this.elapsed -= step;
        if (this.frame + 1 < a.frames) this.frame++;
        else if (a.loop) this.frame = 0;
        else { this.finished = true; break; }
      }
    }
    draw(ctx, x, y, width, height, flipX = false) {
      const a = this.animations[this.current];
      if (!a || !a.image || !a.image.complete) return false;
      const fw = a.frameWidth || a.image.width;
      const fh = a.frameHeight || a.image.height;
      const sx = Math.min(this.frame, a.frames - 1) * fw;
      ctx.save();
      if (flipX) {
        ctx.translate(x + width, y);
        ctx.scale(-1, 1);
        ctx.drawImage(a.image, sx, 0, fw, fh, 0, 0, width, height);
      } else ctx.drawImage(a.image, sx, 0, fw, fh, x, y, width, height);
      ctx.restore();
      return true;
    }
    isFinished() { return this.finished; }
  }
  if (typeof module !== "undefined" && module.exports) module.exports = SpritePlayer;
  else root.SpritePlayer = SpritePlayer;
})(typeof window !== "undefined" ? window : globalThis);
