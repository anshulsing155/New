<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 71.5;

    function onChange(event) {
        var inputElement = document.getElementById("myInput1");
        var inputValue1 = inputElement.value;
        var inputElement = document.getElementById("myInput2");
        var inputValue2 = inputElement.value;
        document.cookie = "Referral Code (Name)=" + inputValue1;
        document.cookie = "Referral Code(Mobile No.)=" + inputValue2;
        if (event.currentTarget.value == "next") {
            goto("../start/details");
        }
    }
</script>

<ProgressBar {progress} />
<!-- <main>
    <form class="form-container">
        <label for=""
            >Name:
            <input id="myInput1" type="Text" placeholder="Enter Name" />
        </label>
        <label for=""
            >Contact No.:

            <input type="text" id="myInput2" placeholder=" Enter Contact No." />
        </label>
        <label class="next">
            <input
                on:change={onChange}
                type="radio"
                name="amount"
                value="next"
            />Next
        </label>
    </form>
</main> -->
<form class="w-full max-w-md m-auto md:border mb-20 p-10 ">
    <label
    for="state"
        class="  block mb-8 text-center text-xl font-medium text-gray-900"
        >Person who referred you... </label
    >
    <div class="md:flex md:items-center mb-6">
        
      <div class="md:w-1/3 ">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Full Name
        </label>
      </div>
      <div class="md:w-2/3 ">
        <input class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-full-name" type="text" placeholder="Referral Name">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6 ">
      <div class="md:w-1/3">
        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
          Contact No.
        </label>
      </div>
      <div class="md:w-2/3 ">
        <input class="bg-gray-200 appearance-none border-b-2 border-green-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" id="inline-password" type="tel"  placeholder="123-45-678">
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
      <div class="md:w-1/3 "></div>
      <div class="md:w-2/3 ">
        <button class="shadow  bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" value="next">
        Next
        </button>
      </div>
    </div>
  </form>