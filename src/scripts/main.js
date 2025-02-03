'use strict';

const listEmployee = [...document.querySelectorAll('li')];

listEmployee.sort(
  (a, b) =>
    a.dataset.salary.replace(/\D/g, '') - b.dataset.salary.replace(/\D/g, ''),
);

const ulEmployee = document.querySelector('ul');

listEmployee.forEach((elem) => {
  ulEmployee.insertAdjacentElement('afterbegin', elem);
});
