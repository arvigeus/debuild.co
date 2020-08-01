import platform from "platform";
import Windows from "./windows";
import Linux from "./linux";
import Mac from "./mac";

export const BSOD = (): JSX.Element => {
  let Screen = Linux;
  if (platform.os.family.includes("Windows")) Screen = Windows;
  else if (platform.os.family.includes("Mac")) Screen = Mac;

  return (
    <>
      <Screen />

      <style jsx global>{`
        .fullscreen {
            display: none;
        }

        .fullscreen.fullscreen-enabled {
            display: initial;
        }
      `}</style>
    </>
  )}

export default BSOD
