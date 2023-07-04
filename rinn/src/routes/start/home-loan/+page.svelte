<script>
    import { goto } from "$app/navigation";
    import { path } from "../store";
    // import { home } from "../store";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 7.15;
    // function pathVal(){
    //     pathValue = true;
    // }
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Stage of Property purchase=" + value;
        event.currentTarget.value;
        if (
            event.currentTarget.value ==
            "Signed the Agreement with Builder or Seller"
        ) {
            goto("../start/Property-Location");
        } else if (
            event.currentTarget.value ==
            "Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)"
        ) {
            goto("../start/Property-Location");
        } else if (
            event.currentTarget.value ==
            "Need only Sanction letter (Validity 3 months)"
        ) {
            path.set(true);
            goto("../start/Working-Location");
        }
    }
    // let countValue;

    // home.subscribe(value => {
    // 	countValue = value;
    // });
</script>

<!-- {countValue} -->

<ProgressBar {progress} />

<!-- <main>
    <form class="form-container" action="" method="POST">
        <label>
            <input
                on:change={onChange}
                type="radio"
                name="amount"
                value="Signed the Agreement with Builder or Seller"
            />Signed the Agreement with Builder or Seller
        </label>
        <label> 
            <input
                
                on:change={onChange}
                type="radio"
                name="amount"
                value="Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)"
            />Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)
        </label>
        <label>
            <input
                
                on:change={onChange}
                type="radio"
                name="amount"
                value="Need only Sanction letter (Validity 3 months)"
            />Need only Sanction letter (Validity 3 months)
        </label>
        
    </form>
</main> -->

<div class="flex items-center justify-center mb-20">
    <!-- Component Start -->
    <form class="w-full max-w-screen-sm">
        <!-- <div class="m-10">
            <label>
                <input
                class="hidden"
                id="radio_1"
                    on:change={onChange}
                    type="radio"
                    name="amount"
                    value="Signed the Agreement with Builder or Seller"
                />Signed the Agreement with Builder or Seller
            </label>
        </div> -->
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Signed the Agreement with Builder or Seller"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <!-- <span class="text-xs font-semibold uppercase">Small</span> -->
                <span class="text-lg my-auto "
                    >Signed the Agreement with Builder or Seller</span
                >
                <!-- <ul class="text-sm mt-2">
					<li>Thing 1</li>
					<li>Thing 2</li>
				</ul> -->
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <!-- <span class="text-xs font-semibold uppercase">Small</span> -->
                <span class="text-lg my-auto "
                    >Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)</span
                >
                <!-- <ul class="text-sm mt-2">
					<li>Thing 1</li>
					<li>Thing 2</li>
				</ul> -->
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Need only Sanction letter (Validity 3 months)"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <!-- <span class="text-xs font-semibold uppercase">Small</span> -->
                <span class="text-lg my-auto "
                    >Need only Sanction letter (Validity 3 months)</span
                >
                <!-- <ul class="text-sm mt-2">
					<li>Thing 1</li>
					<li>Thing 2</li>
				</ul> -->
            </label>
        </div>
        <!-- <div>
            <input class="hidden" id="radio_2" type="radio" name="radio" />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
                for="radio_2"
            >
                <span class="text-xs font-semibold uppercase">Medium</span>
                <span class="text-xl font-bold mt-2">$40/mo</span>
                 <ul class="text-sm mt-2">
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                </ul>
            </label>
        </div>
        <div>
            <input class="hidden" id="radio_3" type="radio" name="radio" />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
                for="radio_3"
            >
                <span class="text-xs font-semibold uppercase">Big</span>
                <span class="text-xl font-bold mt-2">$100/mo</span>
               <ul class="text-sm mt-2">
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                </ul>
            </label>
        </div> -->
    </form>
    <!-- Component End  -->
</div>

<!-- <style>
    @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
 
 
 main{
     font-family: "Muli", sans-serif;
     display: flex;
     align-items: center;
     justify-content: center;
    
     overflow: hidden;
     margin: 0;
 }.form-container {
     background-color: #ffffff;
     /* border-radius: 10px; */
     /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1); */
     padding-bottom: 100px;
     text-align: center;
     max-width: 100%;
     width: 60%;
 }
 label {
     display: block;
     
     text-align: justify;
  text-justify: inter-word;
     border: 1;
     padding: 1.5rem;
 
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
     border-radius: 10px;
     width: 40%;
     margin: 10px auto;
 
 }
 label:hover {
     display: block;
     text-align: left;
     border: 1;
     padding: 1.5rem;
     border: 2px solid rgb(15, 61, 15);
     border-radius: 10px;
     width: 40%;
     margin: 10px auto;
 
 }
 input { 
     visibility: hidden;
 }
 </style> -->

<style>
    label{
        padding: 2rem 4rem;
        height:100px;
        overflow:auto;
    }
    label:hover {
        border-color: green;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
</style>
