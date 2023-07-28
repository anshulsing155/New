<script>
  import { goto } from "$app/navigation";
  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 71.5;
  let name = "";
  let mobileNumber = "";
  let isNameValid = false;
  let isMobileNumberValid = true;
  function validateName() {
    // Validate the name field
    isNameValid = name.trim() !== "";
    handleNext();
  }

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
  function validateMobileNumber() {
    // Remove any non-numeric characters from the input
    mobileNumber = mobileNumber.replace(/\D/g, "");

    // Limit the input to a maximum of 10 digits
    mobileNumber = mobileNumber.slice(0, 10);

    // Validate the mobile number field
    isMobileNumberValid = mobileNumber.length === 10;
    handleNext();
  }
  function handleNext(){
        const nameSelect = document.getElementById("inline-full-name");
        const selectedName = nameSelect.value;
        const contactSelect = document.getElementById("inline-Contact");
        const selectedContact = contactSelect.value;
        if (selectedName && selectedContact !== "") {
            document.getElementById("next").disabled = false;
        }
        
    }
</script>

<ProgressBar {progress} />
<section class="w-full max-w-md m-auto md:border mb-20 p-10">
  <label
        class="text-blue-400 float-right"
      >
        <input
          on:change={onChange}
          type="radio"
          class="hidden"
          value="next"
        />Skip Now...
      </label>
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
      bind:value={name}
        on:blur={validateName}
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
      bind:value={mobileNumber}
        on:input={validateMobileNumber}
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-Contact"
        type="tel"
        
        placeholder="123-45-678"
      />
      {#if !isMobileNumberValid}
    <p class="text-red-300 mb-5">Please enter a valid 10-digit mobile number</p>
  {/if}
    </div>
  </div>

  <div class="md:flex md:items-center">
      <button
    on:click={onChange}
    class="my-5 mx-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
    id="next"
    value="next" disabled>Next</button
>
  </div>
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