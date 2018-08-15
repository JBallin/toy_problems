const CLIENT_ID = "PLACE HERE";
const TRACKS = 'http://api.soundcloud.com/tracks'
const RANDOM_TRACK = '13158665'

window.onload = () => {
  const form = document.querySelector('form');
  form.onsubmit = async e => {
    e.preventDefault();
    const query = e.target.querySelector('[name=query]').value;
    const result = await fetch(`${TRACKS}/?client_id=${CLIENT_ID}&q=${query}`)
    const parsed = await result.json();

    const tracksContainer = document.querySelector('#container');
    tracksContainer.innerHTML = '';
    parsed.forEach(track => {
      const div = document.createElement('div');
      div.className = 'track';
      div.innerText = track.title;
      tracksContainer.appendChild(div);
    });
  }
}
