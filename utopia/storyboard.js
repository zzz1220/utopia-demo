import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 1636,
        height: 845,
        position: 'absolute',
        left: 212,
        top: 128,
        display: 'flex',
        flexDirection: 'column',
        padding: '253px 101px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      commentId='0e36ac3c5e07cc569abb23c1b5ec948a'
    >
      <span
        style={{
          wordBreak: 'break-word',
          fontSize: '25px',
          width: 257,
          height: 130,
        }}
      >
        Open the insert menu or press the + button in the
        toolbar to insert components
      </span>
      <button
        style={{
          width: 200,
          height: 60,
          textShadow: '0px 0px 0px #d3d3d3',
          border: '2px solid rgb(0, 0, 0, 1)',
          borderRadius: 9,
          fontSize: '24px',
        }}
      >
        <span
          style={{
            wordBreak: 'break-word',
            width: 88,
            height: 26,
            contain: 'layout',
            position: 'absolute',
            left: 774,
            top: 475,
          }}
        >
          click it
          <br />
          <video
            style={{
              width: '1371px',
              height: '216px',
              position: 'absolute',
              left: 0,
              top: -405,
            }}
            controls
            autoPlay
            loop
            src='https://dl8.webmfiles.org/big-buck-bunny_trailer.webm'
          />
        </span>
      </button>
    </Scene>
  </Storyboard>
)
