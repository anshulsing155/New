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
  function handleNext() {
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
<!-- <div class="flex w-72 flex-col gap-6 m-auto">
  <div class="relative h-11 w-full min-w-[200px]">
    <input
      placeholder="Static"
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-semibold text-blue-gray-700  outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    />
    <label for=""
      class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-lg font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-lg peer-focus:leading-tight peer-focus:text-green-500 peer-focus:after:scale-x-100 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
    >
      Static
    </label>
  </div>
  <div class="relative h-11 w-full min-w-[200px]">
    <input
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label for=""
      class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:after:scale-x-100 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
    >
      Standard
    </label>
  </div>
  <div class="relative h-10 w-full min-w-[200px]">
    <input
      class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    />
    <label for=""
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
    >
      Outlined
    </label>
  </div>
</div> -->
<section class="flex items-center justify-center mb-20">
  <form class="w-full max-w-screen-sm" id="form" method="Post">
    <label class="text-blue-400 float-right">
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
      <div>
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          Full Name
        </label>
      </div>
      <div>
        <input
          bind:value={name}
          on:blur={validateName}
          class="flex border-4 border-gray-400 rounded-lg cursor-pointer"
          id="inline-full-name"
          type="text"
          placeholder="Referral Name"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div>
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-Contact"
        >
          Contact No.
        </label>
      </div>
      <div>
        <input
          bind:value={mobileNumber}
          on:input={validateMobileNumber}
          class="flex border-4 border-gray-400 rounded-lg cursor-pointer"
          id="inline-Contact"
          type="tel"
          placeholder="123-45-678"
        />
        {#if !isMobileNumberValid}
          <p class="text-red-300 mb-5">
            Please enter a valid 10-digit mobile number
          </p>
        {/if}
      </div>
    </div>

    <div class="md:flex md:items-center">
      <button
        on:click={onChange}
        class="my-5 mx-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id="next"
        value="next"
        disabled>Next</button
      >
    </div>
  </form>
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
  /* label {
    padding: 2rem 2rem;
    text-wrap: pretty;
    overflow: auto;
  }
  label:hover {
    border-color: green;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  } */
</style>
