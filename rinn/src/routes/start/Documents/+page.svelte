<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 78.65;
  export async function onChange(event) {
    event.preventDefault();
    await goto("../start/Executive");
  }

  export let form: ActionData;
  // $: console.log($page.form, $page.status);
  let files;
  $: if (files) {
    
    // console.log(files);

    for (const file of files) {
      // console.log(`${file.name}: ${file.size} bytes`);
    }
    
  }
  $: if (form?.success) {
    alert("File Uplaoded Successfully");
    goto("../start/Executive");
  }
  let selectedFile = null;

  function handleFileSelect(event) {
    const fileInput = event.target;
    selectedFile = fileInput.files[0]; // Get the selected file
    // console.log(selectedFile);
  }
</script>

<ProgressBar {progress} />

<section class="w-full max-w-md m-auto mb-10 p-10">
  <label
    for="state"
    class="  block mb-8 text-center text-xl font-medium text-gray-900"
    >Document to upload for loan eligibility...
  </label>
  <div class="md:flex md:items-center m-6">
    <div class="m-auto">
      <p class="text-center text-gray-500 font-bold text-xl mb-1 md:mb-0 pr-4">
        3 Months Payslips <br /> <span class="text-2xl text-red-500">OR</span>
        <br /> 3 years ITR with computation
      </p>
    </div>
  </div>

  <form method="post" use:enhance enctype="multipart/form-data">
    <div class="flex w-full items-center justify-center bg-grey-lighter mt-20">
      <label
        class="w-64 flex flex-col items-center px-2 py-4 bg-white text-green-700 rounded-lg shadow-lg tracking-wide uppercase border border-green-700 cursor-pointer hover:bg-green-700 hover:text-white"
      >
        <svg class="w-6 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="mt-2 text-base leading-normal">Select a file</span>
        <input
          bind:files
          type="file"
          id="fileupload"
          on:change={handleFileSelect}
          name="file"
          class="hidden"
        />
      </label>
    </div>
    <div class="p-2 text-center text-black">
      {#if files && files[0]}
        {files[0].name}
      {/if}
    </div>
    <div class="md:flex md:items-center">
      <div class="m-auto">
        <div class="md:w-2/3 my-4">
          <button
            on:change={onChange}
            id="submit"
            class="shadow bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold m-auto py-2 px-4 rounded"
            type="submit"
            value="next"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
</section>
<!-- {#if form?.success}
  <div class="text-white w-1/2 px-6 py-4 border-0 rounded relative mb-4 bg-green-300">
    <span class="text-xl inline-block mr-5 align-middle">
      <i class="fas fa-bell" />
    </span>
    <span class="inline-block align-middle mr-8">
      <b class="capitalize">File uploaded Successfully... </b></span
    >
    <button
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
    >
    </button>
  </div>
{/if} -->
