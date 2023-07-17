<script>
  import { goto } from "$app/navigation";
  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 78.65;
  let field1 = '';
  let field2 = '';
  let field3 = '';
  $: isSubmitEnabled = field1 && field2 && field3;
  function onChange(event) {
    var inputElement = document.getElementById("inline-full-name");
    var inputValue1 = inputElement.value;
    var inputElement = document.getElementById("inline-Contact");
    var inputValue2 = inputElement.value;
    var inputElement = document.getElementById("inline-email");
    var inputValue3 = inputElement.value;
    document.cookie = "User (Name)=" + inputValue1;
    document.cookie = "User (Mobile No.)=" + inputValue2;
    document.cookie = "User (Email)=" + inputValue3;

    if (event.currentTarget.value == "next") {
      goto("../start/Documents");
    }
  }
  let name = "";
  let mobileNumber = "";
  let email = "";
  let isNameValid = false;
  let isMobileNumberValid = true;
  let isEmailValid = false;
  function validateName() {
    // Validate the name field
    isNameValid = name.trim() !== "";
  }

  function validateMobileNumber() {
    // Remove any non-numeric characters from the input
    mobileNumber = mobileNumber.replace(/\D/g, "");

    // Limit the input to a maximum of 10 digits
    mobileNumber = mobileNumber.slice(0, 10);

    // Validate the mobile number field
    isMobileNumberValid = mobileNumber.length === 10;
  }

  function validateEmail() {
    // Validate the email field using a simple regular expression pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isEmailValid = emailPattern.test(email.trim());
  }
</script>

<ProgressBar {progress} />
<section class="w-full max-w-md m-auto md:border mb-20 p-10">
  <label
    for="state"
    class="  block mb-8 text-center text-xl font-medium text-gray-900"
    >Your Details...!</label
  >
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
      >
        Full Name :
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-full-name"
        type="text"
        bind:value={name}
        on:blur={validateName}
        placeholder="Enter Your Name"
      required/>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-Contact"
      >
        Contact No. :
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-Contact"
        type="text"
        bind:value={mobileNumber}
        on:input={validateMobileNumber}
        placeholder="123-45-678"
      />
    </div>
  </div>
  {#if !isMobileNumberValid}
    <p class="text-red-300 mb-5">Please enter a valid 10-digit mobile number</p>
  {/if}
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-email"
      >
        Email ID :
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-email"
        type="tel"
        placeholder="abc@gmail.com"
        required
      />
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
          disabled={!isNameValid || !isMobileNumberValid || !isEmailValid}
          type="radio"
          class="hidden"
          value="next"
        />Next
      </label>
    </div>
  </div>
</section>
