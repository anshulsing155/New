<script>
    import { goto , beforeNavigate ,afterNavigate} from "$app/navigation";    
    import { path } from '../store.js';
    import ProgressBar from "../../components/ProgressBar.svelte";
    import data from "$lib/Indian-States-&-Cities.json";
    let progress = 28.6;
    let countValue;

	path.subscribe(value => {
		countValue = value;
	});
    function onChange(event) {
        var inputElement = document.getElementById("state");
        var inputValue1 = inputElement.value;
        var inputElement = document.getElementById("city");
        var inputValue2 = inputElement.value;
        document.cookie = "Working Location (State)="+inputValue1;
        document.cookie = "Working Location (City)="+inputValue2;
        if (countValue == true )
        goto("../start/Referral")
        if (event.currentTarget.value == "next" && countValue == false ) {
            goto("../start/Master-plan");
        }
    }
    
    let state = [];
    for (const key in data) {
        state.push(key);
    }
    let newState = state.sort();

    

    // Function to populate city options based on selected state
    function populateCities() {
        const stateSelect = document.getElementById("state");
        const citySelect = document.getElementById("city");
        const selectedState = stateSelect.value;

        // Clear previous city options
        citySelect.innerHTML = "<option value=''>-- Select a City --</option>";

        if (selectedState !== "") {
            let city = data[selectedState];
            const cities = city.sort();
            for (let i = 0; i < cities.length; i++) {
                const option = document.createElement("option");
                option.value = cities[i];
                option.text = cities[i];
                citySelect.appendChild(option);
            }
        }
        citySelect.addEventListener( 'change',handleNext)
    }
    
    function handleNext(){
        const citySelect = document.getElementById("city");
        const selectedCity = citySelect.value;
        if (selectedCity !== "") {
            document.getElementById("next").disabled = false;
        }
        
    }
</script>

<ProgressBar {progress} />

<section class="sm:w-1/3 px-20 m-auto mb-10">
    <label
    for="state"
        class=" block mb-4 text-center text-xl font-medium text-gray-900"
        >Select Your Working Location</label
    >
    <label for="state">Select State:</label>
    <select
        id="state" on:change={populateCities}
        class="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
    >
        <option>Select Working State</option>
        {#each newState as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
    <label for="city">Select City:</label>
    <select
        id="city"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
        <option value="">Select Working City</option>
    </select>
    <button
    on:click={onChange}
    class="my-8 px-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
    id="next"
    value="next" disabled>Next</button
>
</section>

<style>
    *:disabled {
    background-color: dimgrey;
    color: linen;
    opacity: 1;
}
#next:enabled{
background: rgb(82, 150, 82);
color: black;
opacity: 1;
}

</style>