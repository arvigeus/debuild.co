// https://9to5mac.com/wp-content/uploads/sites/6/2018/07/kernel-panic.jpg?quality=82&strip=all

export const BSOD = (): JSX.Element => (
  <>
    <div className="bsod">
      <div className="power"></div>
      <div className="text">
        <p>
          You need to restart your computer. Hold down the Power button for
          several seconds or press the restart button.
        </p>

        <p>
          Necesita reiniciar su computadora. Mantenga presionado el botón de
          Encendido durante varios segundos o presione el botón de reinicio.
        </p>

        <p>
          Sie müssen Ihren Computer neu starten. Halten Sie die Ein- / Aus-Taste
          einige Sekunden lang gedrückt oder drücken Sie die Neustart-Taste.
        </p>

        <p>您需要重新启动计算机。 按住电源按钮几秒钟，或按重新启动按钮。</p>
      </div>
    </div>

    <style jsx>{`
      .bsod {
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
        font-size: 18px;
        background: #222222;
        flex-direction: column;
      }
      .power {
        width: 275px;
        height: 275px;
        position: absolute;
        background: gray;
        border-radius: 50%;
        z-index: 1;
      }
      .power:before {
        content: '';
        width: 60%;
        height: 60%;
        border: 20px solid #222;
        border-radius: 50%;
        display: block;
        margin: 13%;
      }
      .power:after {
        content: '';
        width: 20px;
        height: 115px;
        border-radius: 16px;
        display: block;
        position: absolute;
        top: 30px;
        left: 132px;
        background: #222;
        box-shadow: 0px 0px 0px 30px grey;
      }
      .text {
        text-align: left;
        max-width: 600px;
        margin: 0 auto;
        z-index: 2;
      }

      .text > p {
        margin: 20px 0;
      }
      .text > p:first-child {
        margin-top: 0;
      }
      .text > p:last-child {
        margin-bottom: 0;
      }
    `}</style>
  </>
)

export default BSOD
