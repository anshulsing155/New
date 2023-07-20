<script>
    import { enhance } from "$app/forms";
import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 78.65;
  export async function onChange(event) {
    event.preventDefault();
          await goto("../start/Executive");
        }
        
    let files;
</script>
<ProgressBar {progress} />

<section class="w-full max-w-md m-auto mb-10 p-10 ">
    <label
    for="state"
        class="  block mb-8 text-center text-xl font-medium text-gray-900"
        >Document to upload for loan eligibility... </label
    >
    <div class="md:flex md:items-center m-6">
      <div class="m-auto">
        <label class="block text-gray-500 font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          3 Months Payslips 
        </label>
      </div>
    </div>
<div class="flex w-full items-center justify-center bg-grey-lighter">
  <label class="w-64 flex flex-col items-center px-2 py-4 bg-white text-green-700 rounded-lg shadow-lg tracking-wide uppercase border border-green-700 cursor-pointer hover:bg-green-700 hover:text-white">
      <svg class="w-6 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <span class="mt-2 text-base leading-normal">Select a file</span>
      <input type='file' class="hidden"  />
      
  </label>
  
</div>
<div class="p-2 text-center text-black">
 <!-- {#if files && files[0]}
		{files[0].name}
{/if}  -->
</div>
<div class="md:flex md:items-center m-6">
  <div class="m-auto">
    <label class="block text-gray-500 font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
      3 years ITR with computation 
    </label>
  </div>
</div>
<div class="flex w-full items-center justify-center bg-grey-lighter">
  <label class="w-64 flex flex-col items-center px-2 py-4 bg-white text-green-700 rounded-lg shadow-lg tracking-wide uppercase border border-green-700 cursor-pointer hover:bg-green-700 hover:text-white">
      <svg class="w-6 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </svg>
      <span class="mt-2 text-base leading-normal">Select a file</span>
      <input  type='file' class="hidden"  />
      
      
  </label>
  
</div>
<div class="p-2 text-center text-black">
  <!-- {#if files && files[0]}
      {files[].name}
  {/if}  -->
</div>
<!-- <div class="md:flex md:items-center m-10">
  <div class="md:w-1/3 ">
  <div class="md:w-2/3 ">
    <button id="submit" class="shadow  bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="next">
    Submit
    </button>
  </div>
</div>
</div>-->
</section> 
<form method="post" on:submit={onChange} use:enhance >
  <div class="md:flex md:items-center m-10">
    <div class="md:w-1/3 ">
    <div class="md:w-2/3 ">
      <button id="submit" class="shadow  bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="next">
      Submit
      </button>
    </div>
  </div>
  </div>

</form>