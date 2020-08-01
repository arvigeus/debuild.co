export const BSOD = (): JSX.Element => (
  <>
    <div className="bsod">
      <h1 className="title">Fatal</h1>
      <div className="text">
        <p>
          A problem has been detected and Windows has been shut down to prevent
          damage to your computer.
        </p>

        <p>
          If this is the first time you&#39;ve seen this Stop error screen,
          restart your computer. If this screen appears again, follow these
          steps:
        </p>

        <p>
          Check to be sure you have adequate disk space. If a driver is
          identified in the Stop message, disable the driver or check with the
          manufacturer for driver updates. Try changing video adapters.
        </p>

        <p>
          Check with your hardware vendor for any BIOS updates. Disable BIOS
          memory options such as caching or shadowing. If you need to use Safe
          Mode to remove or disable components, restart your computer, press F8
          to select Advanced Startup options, and then select Safe Mode.
        </p>

        <p>Technical information:</p>

        <p>
          *** STOP: 0x0000007e (0x80000003, 0x805c49b8, 0xf7a172b4, 0xf7a16fb0)
        </p>

        <p>
          ***&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gpt3.sys
          - Address F86B5A89 base at F86B5000, DateStamp 3dd991eb
        </p>

        <p>
          Beginning dump of physical memory
          <br />
          Physical memory dump complete.
          <br />
          Contact your system administrator or technical support group for
          further assistance.<span className="cursor">_</span>
        </p>
      </div>
    </div>

    <style jsx>{`
      .bsod {
        --priamry-color-dark: #061c43;
        --priamry-color: #093e9e;

        display: flex;
        text-align: center;
        z-index: 9999;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-family: 'Lucida Console', Monaco, monospace;
        font-size: 16px;
        background: radial-gradient(
          ellipse at center,
          #093e9e 0%,
          #061c43 100%
        );
        flex-direction: column;
      }
      .title {
        color: #061c43;
        background-color: #fff;
        font-size: 16px;
        line-height: 18px;
        display: inline;
        margin: 40px 0px;
        text-align: center;
      }
      .text {
        text-align: left;
        max-width: 720px;
        margin: 0 auto;
      }
      .cursor {
        animation: blink 1s infinite cubic-bezier(1, 0, 0, 1);
      }
      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}</style>
  </>
)

export default BSOD
