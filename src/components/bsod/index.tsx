import dynamic from 'next/dynamic';
import { window } from "browser-monads";

const { userAgent } = window.navigator;

const DynamicBSOD = dynamic(
  () => userAgent.includes("Windows") ? import('./windows') : userAgent.includes("Mac") ? import('./mac') : import('./linux'),
  { ssr: false }
)

export const BSOD = (): JSX.Element => {
  return (
    <>
      <DynamicBSOD />

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
