const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
    const phoneContainer = document.getElementById("phones-container");
    phoneContainer.textContent = '';

    // Display 15 phones only
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('hidden');
    }
    else {
        showAll.classList.add('hidden');
    }

    // Display No Phones
    const noPhone = document.getElementById('no-phone');
    if (phones.length === 0) {
        noPhone.classList.remove('hidden')
    }
    // Display All Phones
    else {
        noPhone.classList.add('hidden')
    }

    // Display All Phones
    phones.forEach((phone) => {
        console.log(phone);
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("card");
        phoneDiv.innerHTML = ` <div class="card w-96 bg-base-100 shadow-xl mt-11">
                    <figure><img src="${phone.image}" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                         <button onclick ="loadPhoneDetails('${phone.slug}')" class="btn btn-primary w-64 mx-auto">Show Details</button>
                        <div class="card-actions justify-end">
                        </div>
                    </div>
                </div>`;
        phoneContainer.appendChild(phoneDiv);
    });
    // Stop Spinner
    toggleSpinner(false)
};

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    document.getElementById('btn-search').addEventListener
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText, dataLimit);
}

const btnSearch = () => {
    // Start Spinner
    processSearch(10);
}

// Search Input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        // code for enter
        processSearch(10);
    }
})

const toggleSpinner = isLoading => {
    // spinnerSection.classList.toggle('hidden', !isLoading);

    const spinnerSection = document.getElementById('spinner');
    if (isLoading) {
        spinnerSection.classList.remove('hidden')
    }
    else {
        spinnerSection.classList.add('hidden')
    }
}

// worst way

document.getElementById('btn-showall').addEventListener('click', function () {
    processSearch();
})

const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
}