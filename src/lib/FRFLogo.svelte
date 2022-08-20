<script>
  function randomColorPalette() {
    const colors = {
      "Clown Makeup Red": "#ff1616",
      "Nice Restaurant Salmon": "#ff5757",
      "The Pink Playdough": "#ff66c4",
      "Barney the Dinosaur": "#cb6ce6",
      "Imperial Rome": "#8c52ff",
      "The Purr Pulls": "#5e17eb",
      "Improbable Water Teal": "#03989e",
      "Is this Cyan?": "#00c2cb",
      "Light Blue": "#5ce1e6",
      "Another Light Blue": "#38b6ff",
      "Yet Another Light Blue": "#5271ff",
      "Truly Dark Blue": "#004aad",
      "Tree Green": "#008037",
      "Grass Green": "#7ed957",
      "Sickly Green": "#c9e265",
      "French Fry Yellow": "#ffde59",
      "Nice Restaurant French Fry Yellow": "#ffbd59",
      "It's Just Orange": "#ff914d"
    }

    const keys = Object.keys(colors);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const baseHex = colors[randomKey];

    let slightlyDarker = shadeBy(baseHex, 25);
    let slightlyLighter = shadeBy(baseHex, -25);

    return {
      f: slightlyDarker,
      r: baseHex,
      secondF: slightlyLighter
    }
  }

  function shadeBy(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
  }

  const palette = randomColorPalette();
</script>

<div>
  <p class="logo-letters">
    <span id="first-f" style="color: {palette.f}">F</span><span id="the-r" style="color: {palette.r}">R</span><span id="second-f" style="color: {palette.secondF}">F</span>
  </p>
</div>

<style>
  .logo-letters {
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
    margin: 0.5rem;
    margin-left: 1.75rem;
    font-family: 'impact', sans-serif;
  }

  span {
    margin-right: -1.75rem;
  }
</style>