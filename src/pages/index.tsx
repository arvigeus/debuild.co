import React, { useState, useCallback } from 'react'
import Head from 'next/head'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { document } from 'browser-monads'
import BSOD from '../components/bsod'

export const Home = (): JSX.Element => {
  const [code, setCode] = useState('')
  const handle = useFullScreenHandle()
  const reportChange = useCallback(
    (state) => {
      try {
        if (state) document.body.requestPointerLock()
        else document.exitPointerLock()
      // eslint-disable-next-line no-empty
      } catch (e) {}
    },
    [handle]
  )
  return (
    <>
      <Head>
        <title>OpenAI GPT-3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1 className="title">debuild.co</h1>
        <div className="content">
          <div className="box">
            <div className="control">
              <p className="description">Describe your app.</p>

              <div className="buttons">
                <button className="clearBtn" onClick={() => setCode('')}>
                  Clear
                </button>
                <button className="generateBtn" onClick={handle.enter}>
                  Generate
                </button>
              </div>
            </div>

            <textarea
              placeholder="Just describe your app!"
              value={code}
              className="ai"
              rows={6}
              onChange={(event) => setCode(event.target.value)}
            ></textarea>

            <div className="code"></div>
          </div>

          <div className="box">
            <div className="result"></div>
          </div>
        </div>
      </div>

      <FullScreen handle={handle} onChange={reportChange}>
        <BSOD />
      </FullScreen>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 20px auto;
        }

        .content > * {
          margin: 40px 0 0 40px;
        }

        .content {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          flex-wrap: wrap;
          margin: -40px 0 0 -40px;
          width: calc(100% + 40px);
        }

        .box {
          min-width: 450px;
          width: 100%;
          flex-basis: calc(50% - 40px);
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #51288e;
        }

        .control {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .description {
          line-height: 2;
          font-size: 2rem;
        }

        .buttons > * {
          margin: 0 0 0 12px;
        }

        .clearBtn {
          background: #ededed;
          border-radius: 10px;
          padding: 10px;
          font-size: 1.25rem;
          line-height: 1.25;
          border: none;
        }

        .generateBtn {
          background: #43db31;
          color: white;
          border-radius: 10px;
          padding: 10px;
          font-size: 1.25rem;
          line-height: 1.25;
          border: none;
        }

        .ai {
          width: 100%;
          margin-top: 40px;
          padding: 10px;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          outline-color: darkblue;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .code {
          background: #f2f1ef;
          width: 100%;
          height: 40px;
          margin-top: 8px;
        }

        .result {
          border: 2px solid #eaeaea;
          border-radius: 10px;
          width: 100%;
          height: 60px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

export default Home
