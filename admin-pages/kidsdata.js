const filterUserInput = document.querySelector('#filter-user_category');
const sortPriceInput = document.querySelector('#sort-price');
const searchNameInput = document.querySelector('#search-Name');
const productsTable = document.querySelector('#products-data');
const paginationWrapper = document.querySelector('#pagination-wrapper');
const baseServerURL = `https://weary-bee-train.cyclic.app/kids`;

let newData = [];
let filteredData = [];

searchNameInput.addEventListener('input', () => {
  const searchText = searchNameInput.value.toLowerCase();
  const filtered = newData.filter(pro => pro.name.toLowerCase().includes(searchText));
  filteredData = filtered;
  renderTable();
});

filterUserInput.addEventListener('change', () => {
  const user = filterUserInput.value;
  if (user === '') {
    filteredData = newData;
  } else {
    const filtered = newData.filter(pro => pro.user_category === user);
    filteredData = filtered;
  }
  renderTable();
});

sortPriceInput.addEventListener('change', () => {
  const order = sortPriceInput.value;
  let sorted;
  if(order === ""){
    filteredData = newData;
  }
  else if (order === 'asc') {
    sorted = filteredData.sort((a, b) => a.price - b.price);
  } else {
    sorted = filteredData.sort((a, b) => b.price - a.price);
  }
  filteredData = sorted;
  renderTable();
});

async function fetchData(page = 1) {
  try {
    const response = await fetch(`${baseServerURL}/?limit=10&page=${page}`);
    const data = await response.json();
    newData = data;
    filteredData = newData;
    renderTable();
    renderPagination(page, data.totalPages);
  } catch (error) {
    console.log(error);
  }
}

function renderTable() {
  productsTable.innerHTML = '';
  filteredData.forEach((pro) => {
    const tr = document.createElement('tr');
    const tdId = document.createElement("td");
    const tdImage = document.createElement('td');
    const tdName = document.createElement('td');
    const tdUser = document.createElement('td');
    const tdCategory = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdCatSec = document.createElement('td');
    const tdDesc = document.createElement('td');
    const del = document.createElement("td");
    const delbtn = document.createElement("button")
    const edit = document.createElement("td");
    const editbtn = document.createElement("button")


    tdId.textContent = pro.id;
    tdImage.innerHTML = pro.avatar;;
    tdImage.setAttribute("id","image")
    tdName.textContent = pro.name;
    tdUser.textContent = pro.user_section;
    tdCategory.textContent = pro.user_category;
    tdPrice.textContent = pro.price;
    tdCatSec.textContent = pro.user_category_section;
    tdDesc.textContent = pro.Description;
    delbtn.textContent = "DELETE";
    delbtn.addEventListener("click", () => {
        deleteProduct(pro.id)
        tr.remove()
    });
    del.append(delbtn);
    editbtn.textContent = "EDIT";
    editbtn.addEventListener("click", () => {
        editProduct(pro)
    });
    edit.append(editbtn)
    tr.append(tdId, tdImage, tdName, tdUser, tdCategory, tdCatSec, tdPrice,tdDesc, del,edit);
    productsTable.append(tr);
  });
}

function renderPagination(currentPage, totalPages) {
  paginationWrapper.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const button = domButton(i, i === currentPage); // highlight the current page
    paginationWrapper.append(button);
  }
}

function domButton(page, isCurrentPage) {
  const button = document.createElement('button');
  button.innerText = page;
  if (isCurrentPage) {
    button.disabled = true; 
    button.classList.add('active');
  }
  button.addEventListener('click', () => {
fetchData(page);
});
return button;
}

async function deleteProduct(productId) {
  try {
  const response = await fetch(`${baseServerURL}/${productId}`, {
  method: 'DELETE',
  });
  const data = await response.json();
  console.log(data);
  // refetch data and re-render the table after deleting
  fetchData();
  } catch (error) {
  console.log(error);
  }
  }
  
  async function editProduct(product) {
  // code for editing product goes here
  // can use the same form as create new product form
  }
  
  // fetch initial data on page load
  fetchData();
