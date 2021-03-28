import './style.css';

const directions = {
  down: 'down',
  up: 'up',
};

export default function arrowButton(props) {
  const { direction, disabled = false } = props;
  const directionClass = `arrow-button__direction_${directions[direction] || directions.down}`;
  return (`
    <button
      class="arrow-button ${directionClass}"
      disabled="${disabled}"
    ></button>
  `);
}
