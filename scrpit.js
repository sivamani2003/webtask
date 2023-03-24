const seates = document.querySelectorAll('.seat');
const activeseatCount = document.getElementById('active-seat-count');
const activeseatCost = document.getElementById('active-seat-cost');
const deselectAllButton = document.getElementById('deselect-all-button');

seates.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('active');
    const activeseates = document.querySelectorAll('.seat.active').length;
    activeseatCount.textContent = `${activeseates} seates are selected`;
    const activeseatCostValue = activeseates * 120;
    activeseatCost.textContent = `The cost of the selected seates is ${activeseatCostValue} rupees`;
  });
});

deselectAllButton.addEventListener('click', () => {
  seates.forEach(seat => {
    seat.classList.remove('active');
  });
  const activeseates = document.querySelectorAll('.seat.active').length;
  activeseatCount.textContent = `${activeseates} seates are selected`;
  const activeseatCostValue = activeseates * 120;
  activeseatCost.textContent = `The cost of the selected seates is ${activeseatCostValue} rupees`;
});