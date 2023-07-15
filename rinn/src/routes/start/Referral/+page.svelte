<script>
  import { goto } from "$app/navigation";
  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 71.5;

  function onChange(event) {
    var inputElement = document.getElementById("inline-full-name");
    var inputValue1 = inputElement.value;
    var inputElement = document.getElementById("inline-Contact");
    var inputValue2 = inputElement.value;
    document.cookie = "Referral Code (Name)=" + inputValue1;
    document.cookie = "Referral Code(Mobile No.)=" + inputValue2;
    if (event.currentTarget.value == "next") {
      goto("../start/details");
    }
  }
  let number = "";
  let isValidMobileNumber = true;
  function handleInput(event) {
    number = event.target.value.replace(/\D/g, "");
    number = number.slice(0, 10);
    isValidMobileNumber = number.length === 10;
  }
</script>

<ProgressBar {progress} />
<section class="w-full max-w-md m-auto md:border mb-20 p-10">
  <label
    for="state"
    class="  block mb-8 text-center text-xl font-medium text-gray-900"
    >Person who referred you...
  </label>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
      >
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-full-name"
        type="text"
        placeholder="Referral Name"
      />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-Contact"
      >
        Contact No.
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-Contact"
        type="tel"
        bind:value={number}
        on:input={handleInput}
        placeholder="123-45-678"
      />
      {#if !isValidMobileNumber}
        <p class="text-red-300">Please enter a valid 10-digit mobile number</p>
      {/if}
    </div>
  </div>

  <div class="md:flex md:items-center">
    <div class="md:w-1/3" />
    <div class="md:w-2/3">
      <label
        class="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        <input
          on:change={onChange}
          type="radio"
          class="hidden"
          value="next"
        />Next
      </label>
    </div>
  </div>
</section>
