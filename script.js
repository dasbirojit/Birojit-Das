'use strict';

const normalize = text => text.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
const matches = (text, query) => normalize(query).trim().split(/\s+/).every(word => normalize(text).includes(word));

function connectFilters({sectionId, recordSelector, searchId, filters, noun}) {
  const section = document.getElementById(sectionId);
  const records = [...section.querySelectorAll(recordSelector)];
  const search = document.getElementById(searchId);
  const selects = filters.map(filter => ({...filter, element: document.getElementById(filter.id)}));
  const meta = section.querySelector('.results-meta');
  const count = meta.querySelector('[aria-live]');
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.textContent = 'Clear filters';
  reset.hidden = true;
  meta.append(reset);
  const empty = document.createElement('div');
  empty.className = 'empty-results';
  empty.hidden = true;
  const heading = document.createElement('h3');
  heading.textContent = 'No matching records';
  const message = document.createElement('p');
  message.textContent = 'Try another word or clear the filters.';
  empty.append(heading, message);
  section.querySelector(recordSelector).parentElement.after(empty);
  function update() {
    let visible = 0;
    for (const record of records) {
      const selected = selects.every(filter => filter.element.value === filter.all || record.dataset[filter.key] === filter.element.value);
      const show = selected && matches(record.dataset.search, search.value);
      record.hidden = !show;
      if (show) visible++;
    }
    count.textContent = `${visible} of ${records.length} ${noun}`;
    empty.hidden = visible > 0;
    reset.hidden = !search.value && selects.every(filter => filter.element.value === filter.all);
  }
  search.addEventListener('input', update);
  selects.forEach(filter => filter.element.addEventListener('change', update));
  reset.addEventListener('click', () => {
    search.value = '';
    selects.forEach(filter => { filter.element.value = filter.all; });
    update();
    search.focus();
  });
  update();
}

connectFilters({sectionId:'publications',recordSelector:'.publication',searchId:'publication-search',filters:[{id:'filter-publication-status',key:'type',all:'All records'}],noun:'supplied records'});
connectFilters({sectionId:'teaching',recordSelector:'.course-card',searchId:'course-search',filters:[{id:'filter-institution',key:'institution',all:'All institutions'},{id:'filter-record-type',key:'type',all:'All teaching records'}],noun:'teaching records'});

const menuButton = document.querySelector('.mobile-menu-button');
const mobileNavigation = document.getElementById('mobile-navigation');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNavigation.hidden = !open;
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNavigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
