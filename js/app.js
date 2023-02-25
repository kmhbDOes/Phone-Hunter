const loadPhone = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
};

const displayPhones = (phones) => {
    const phoneContainer = document.getElementById("phones-container");
    phoneContainer.textContent = '';

    // Display 15 phones only
    if (phones.length > 10) {
        phones = phones.slice(0, 10);
        const showAll = document.getElementById('show-all');
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
                        <div class="card-actions justify-end">
                        </div>
                    </div>
                </div>`;
        phoneContainer.appendChild(phoneDiv);
    });
    // Stop Spinner
    toggleSpinner(false)
};

const btnSearch = () => {
    // Start Spinner
    toggleSpinner(true);
    document.getElementById('btn-search').addEventListener
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
}

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

// loadPhone();
