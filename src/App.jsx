import React, { useState } from 'react'

function ColorPickerFunctionStyle() {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [lightness, setLightness] = useState(0)
  const [alpha, setAlpha] = useState(0)

  return (
    <div>
      <header
        style={{
          backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`,
        }}
      ></header>
      <main>
        <h2>
          The color above is: hsla({hue}, {saturation}%,
          {lightness}%, {alpha})
        </h2>
        <button
          onClick={function () {
            setHue(Math.floor(Math.random() * (360 - 0)) + 0)
            setSaturation(Math.floor(Math.random() * (100 - 0)) + 0)
            setLightness(Math.floor(Math.random() * (100 - 0)) + 0)
            setAlpha(Math.round((Math.random() * (1 - 0) + 0) * 100) / 100)
          }}
        >
          Random Color
        </button>
        <section className="image">
          <img
            src="http://inside.akronchildrens.org/wp-content/uploads/2015/06/inside_out_-_emotion_poster.jpg"
            height="375"
            width="800"
          />
        </section>
        <section>
          <label htmlFor="Hue">Hue: </label>
          <input
            type="range"
            min="0"
            max="360"
            onChange={function (event) {
              setHue(event.target.value)
            }}
            value={hue}
            name="Hue"
          ></input>
        </section>
        <section>
          <label htmlFor="Saturation">Saturation: </label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={function (event) {
              setSaturation(event.target.value)
            }}
            value={saturation}
            name="Saturation"
          ></input>
        </section>
        <section>
          <label htmlFor="Lightness">Lightness: </label>
          <input
            type="range"
            min="0"
            max="100"
            onChange={function (event) {
              setLightness(event.target.value)
            }}
            value={lightness}
            name="Lightness"
          ></input>
        </section>
        <section>
          <label htmlFor="Alpha">Alpha: </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={function (event) {
              setAlpha(event.target.value)
            }}
            value={alpha}
            name="Alpha"
          ></input>
        </section>
      </main>
      <footer>
        This App to help you Pick a Color (Hooks) was created by Mandy Wade
      </footer>
    </div>
  )
}

export function App() {
  return <ColorPickerFunctionStyle />
}
