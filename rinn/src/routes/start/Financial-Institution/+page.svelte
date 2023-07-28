<script>
  import { goto } from "$app/navigation";

  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 57.2;
  let name = "";
  let isNameValid = false;
  function validateName() {
    isNameValid = name.trim() !== "";
    handleNext();
  }
  


  function onChange(event) {
    var inputElement = document.getElementById("inline-full-name");
    var inputValue1 = inputElement.value;
    var inputElement = document.getElementById("inline-ROI");
    var inputValue3 = inputElement.value;
    document.cookie = "Current Financial Name=" + inputValue1;
    document.cookie = "Current Financial ROI=" + inputValue3;
    event.currentTarget.value;
    if (event.currentTarget.value == "next") {
      goto("../start/Referral");
    }
  }
  function handleNext(){
        const nameSelect = document.getElementById("inline-full-name");
        const selectedName = nameSelect.value;
        const roiSelect = document.getElementById("inline-ROI");
        const selectedRoi = roiSelect.value;
        
        if (selectedName && selectedRoi !== "") {
            document.getElementById("next").disabled = false;
        }
        
    }
</script>

<ProgressBar {progress} />

<section class="w-full max-w-xl m-auto md:border mb-20 p-10">
  <label
    for="state"
    class="  block mb-8 text-center text-xl font-medium text-gray-900"
    >Your Financial Institute...
  </label>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
      >
        Bank Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input
      bind:value={name}
        on:blur={handleNext}
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-full-name"
        type="text"
        placeholder=""
      />
    </div>
  </div>
  
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-ROI"
      >
        Current ROI
      </label>
    </div>
    <div class="md:w-2/3">
      <input
      on:input={handleNext}
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-ROI"
        type="number"
        placeholder=""
      />
    </div>
  </div>
  
  <div class="md:flex md:items-center">
    
    <button
  on:click={onChange}
  class="m-auto w-2/3 my-8 px-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
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