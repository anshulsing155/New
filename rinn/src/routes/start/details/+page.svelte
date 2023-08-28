<script>
  import { goto } from "$app/navigation";
  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 78.65;

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
      goto("../start/employment");
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
    handleNext();
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

  function validateEmail() {
    // Validate the email field using a simple regular expression pattern
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    isEmailValid = emailPattern.test(email.trim());
    handleNext();
  }

  function handleNext() {
    const nameSelect = document.getElementById("inline-full-name");
    const selectedName = nameSelect.value;
    const contactSelect = document.getElementById("inline-Contact");
    const selectedContact = contactSelect.value;
    const emailSelect = document.getElementById("inline-email");
    const selectedEmail = emailSelect.value;
    if (isNameValid && isMobileNumberValid && isEmailValid) {
      document.getElementById("next").disabled = false;
    }
  }
  export let data;

  let loading = false;

  const {
    recaptchaValidStore,
    confirmationResultStore,
    userStore,
    phoneSignIn,
    verifyCode,
    signOutAsync,
  } = data.auth;

  let countryCode = "";
  let phoneNumberBody = "";

  // $: countryCodeValid = countryCode !== null && countryCode.length !== 0
  $: phoneNumberBodyValid =
    phoneNumberBody !== null && phoneNumberBody.length !== 0;

  $: phoneNumberFormValid =
    $recaptchaValidStore && phoneNumberBodyValid && !loading;

  async function handlePhoneSubmit() {
    if (!phoneNumberFormValid) {
      return;
    }

    loading = true;

    const fullPhoneNumber = `+${91 + phoneNumberBody}`;

    await phoneSignIn(fullPhoneNumber);

    loading = false;
  }

  let OTPCode = "";

  $: OTPFormValid =
    OTPCode !== null &&
    OTPCode.length === 6 &&
    !loading &&
    $confirmationResultStore !== null;

  async function handleOTPSubmit() {
    if (!OTPFormValid) {
      return;
    }

    loading = true;

    try {
      await verifyCode(OTPCode);
    } catch (error) {
      console.log(error);
    }

    loading = false;
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
        Full Name : <sup class="text-red-700 text-lg">*</sup>
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
        required
      />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="flex text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-Contact"
      >
        Mobile No : <sup class="text-red-700 text-lg">*</sup>
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
        required
      />
    </div>
  </div>
  {#if !isMobileNumberValid}
    <p class="text-red-300 mb-5">Please enter a valid 10-digit mobile number</p>
  {/if}

  <main>
    {#if $userStore}
      <p>Your logged in!</p>

      <button on:click={signOutAsync}>Log Out</button>
    {:else if $confirmationResultStore}
      <form on:submit|preventDefault={handleOTPSubmit}>
        <input type="text" class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        bind:value={OTPCode} />

        <button type="submit"  class="" disabled={!OTPFormValid}>Confirm Code</button>
      </form>
    {:else}
      <form on:submit|preventDefault={handlePhoneSubmit}>
        
          <!-- <input type="text" bind:value={countryCode} placeholder="Country" /> -->
          <div class="md:w-1/3">
            <label
              class="flex text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-Contact"
            >
              Mobile No : <sup class="text-red-700 text-lg">*</sup>
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
              required
            />
          </div>
          <!-- <input
            type="text"
            bind:value={phoneNumberBody}
            placeholder="111-222-3333"
          /> -->
        

        <button
          class=" bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          id="sign-in-button"
          type="submit"
          disabled={!phoneNumberFormValid}
        >
          Varify
        </button>
      </form>
    {/if}
  </main>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-email"
      >
        Email ID : <sup class="text-red-700 text-lg">*</sup>
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-email"
        type="email"
        placeholder="abc@gmail.com"
        bind:value={email}
        on:input={validateEmail}
        required
      />
    </div>
  </div>
  {#if !isEmailValid}
    <p class="text-red-300 mb-5">Please enter a valid Email Address</p>
  {/if}
  <div class="md:flex md:items-center">
    <button
      on:click={onChange}
      class="my-8 px-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      id="next"
      value="next"
      disabled>Next</button
    >
  </div>
  <div id="recaptcha-container" />
</section>

<style>
  *:disabled {
    background-color: dimgrey;
    color: linen;
    opacity: 1;
  }
  #next:enabled {
    background: rgb(82, 150, 82);
    color: black;
    opacity: 1;
  }
</style>
