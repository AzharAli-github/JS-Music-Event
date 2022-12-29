let keys = document.querySelector('.keys');
const audio = `
<h1 style="text-align: center; font-size: 30px; width: 100%;">Press The following Buttons from Your Keyboard</h1>
<div data-key="65" class="key">
<kbd>A</kbd>
</div>
<div data-key="83" class="key">
<kbd>S</kbd>
</div>
<div data-key="68" class="key">
<kbd>D</kbd>
</div>
<div data-key="70" class="key">
<kbd>F</kbd>
</div>
<div data-key="71" class="key">
<kbd>G</kbd>
</div>
<div data-key="72" class="key">
<kbd>H</kbd>
</div>
<div data-key="74" class="key">
<kbd>J</kbd>
</div>
<div data-key="75" class="key">
<kbd>K</kbd>
</div>
<div data-key="76" class="key">
<kbd>L</kbd>
</div>
`;

function dispKey() {
    keys.innerHTML = audio;
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return
    event.target.classList.remove('playing')
}

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!audio) return
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}
const keyA = Array.from(document.querySelectorAll('.key'))
keyA.forEach((key) => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);