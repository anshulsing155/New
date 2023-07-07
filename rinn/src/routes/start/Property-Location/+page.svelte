<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 21.45;
    import data from "$lib/Indian-States-&-Cities.json";

    function onChange(event) {
        var inputElement = document.getElementById("state");
        var inputValue1 = inputElement.value;
        var inputElement = document.getElementById("city");
        var inputValue2 = inputElement.value;
        document.cookie = "Property Location (State)=" + inputValue1;
        document.cookie = "Property Location (City)=" + inputValue2;
        if (event.currentTarget.value == "next") {
            goto("../start/Working-Location");
        }
    }
    let state = [];
    for (const key in data) {
        state.push(key);
    }
    let newState = state.sort();

    


    // let newCity = city.sort();

    // City data based on selected state
    // const cityData = {
    //     California: ["Los Angeles", "San Francisco", "San Diego"],
    //     "New York": ["New York City", "Buffalo", "Rochester"],
    //     Texas: ["Houston", "Austin", "Dallas"],
    // };

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
    }
</script>

<!-- {data1} -->
<ProgressBar {progress} />
<!-- <main>
    <form class="form-container">
        <label for=""
            >Property State:
            <input
                type="Text"
                id="myInput1"
                placeholder="Enter Property State"
            />
        </label>
        <label for=""
            >Property City:
            <input 
                id="myInput2"
                type="text" 
                name="2" 
                placeholder=" Enter Property City" />
        </label>
        <label class="next">
            <input on:change={onChange} type="radio" value="next" />Next
        </label>
    </form>
</main> -->
<section class="sm:w-1/3 px-20 m-auto mb-10">
    <label
    for="state"
        class=" block mb-4 text-center text-xl font-medium text-gray-900"
        >Select Your Property Location</label
    >
    <label for="state">Select State:</label>
    
    <select
        id="state" on:change={populateCities}
        class="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
        <option>Select Property State</option>
        {#each newState as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
    <label for="city">Select City:</label>
    <select
        id="city"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
        <option value="">Select Property City</option>
    </select>
   <button on:click={onChange} class="my-8 px-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value="next">Next</button>
</section>
<style>
    * {
      box-sizing: border-box;
    }
    
    body {
      font: 16px Arial;  
    }
    
    /*the container must be positioned relative:*/
    .autocomplete {
      position: relative;
      display: inline-block;
    }
    
    input {
      border: 1px solid transparent;
      background-color: #f1f1f1;
      padding: 10px;
      font-size: 16px;
    }
    
    input[type=text] {
      background-color: #f1f1f1;
      width: 100%;
    }
    
    input[type=submit] {
      background-color: DodgerBlue;
      color: #fff;
      cursor: pointer;
    }
    
    .autocomplete-items {
      position: absolute;
      border: 1px solid #d4d4d4;
      border-bottom: none;
      border-top: none;
      z-index: 99;
      /*position the autocomplete items to be the same width as the container:*/
      top: 100%;
      left: 0;
      right: 0;
    }
    
    .autocomplete-items div {
      padding: 10px;
      cursor: pointer;
      background-color: #fff; 
      border-bottom: 1px solid #d4d4d4; 
    }
    
    /*when hovering an item:*/
    .autocomplete-items div:hover {
      background-color: #e9e9e9; 
    }
    
    /*when navigating through the items using the arrow keys:*/
    .autocomplete-active {
      background-color: DodgerBlue !important; 
      color: #ffffff; 
    }
    </style>