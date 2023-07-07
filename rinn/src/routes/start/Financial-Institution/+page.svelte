<script>
  import { goto } from "$app/navigation";

  import ProgressBar from "../../components/ProgressBar.svelte";
  let progress = 57.2;
  function onChange(event) {
    var inputElement = document.getElementById("inline-full-name");
    var inputValue1 = inputElement.value;
    var inputElement = document.getElementById("inline-Contact");
    var inputValue2 = inputElement.value;
    var inputElement = document.getElementById("inline-ROI");
    var inputValue3 = inputElement.value;
    document.cookie = "Current Financial Name=" + inputValue1;
    document.cookie = "Current Financial Location=" + inputValue2;
    document.cookie = "Current Financial ROI=" + inputValue3;
    event.currentTarget.value;
    if (event.currentTarget.value == "next") {
      goto("../start/Referral");
    }
  }
</script>

<ProgressBar {progress} />
<!-- <main>
    <form class="form-container">
        <label for="state"
            >Your Financial Institute::
            <input type="text"  id="myInput1" placeholder="Enter Your Bank " />
        </label>
        <label class="next">
            <input
                on:change={onChange}
                type="radio"
                value="next"
            />Next
        </label> -->

<!-- <button on:change={onChange} value="next">Next</button> -->
<!-- <button type="submit">Submit</button> -->
<!-- </form>
</main> -->
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
        for="inline-Contact"
      >
        Branch Location
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-Contact"
        type="tel"
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
        class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
        id="inline-ROI"
        type="number"
        placeholder=""
      />
    </div>
  </div>
  <!-- <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3"></div>
      <label class="md:w-2/3 block text-gray-500 font-bold">
        <input class="mr-2 leading-tight" type="checkbox">
        <span class="text-sm">
          Send me your newsletter!
        </span>
      </label>
    </div> -->
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
      <!-- <button on:change={onChange} class="shadow  bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" value="next">
        Next
        </button> -->
    </div>
  </div>
</section>
