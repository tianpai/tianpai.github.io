import Snd from "snd-lib";

const snd = new Snd({ easySetup: false });
const soundKitReady = snd.load(Snd.KITS.SND01);

export async function playSound(sound: string) {
  await soundKitReady;
  snd.play(sound);
}
