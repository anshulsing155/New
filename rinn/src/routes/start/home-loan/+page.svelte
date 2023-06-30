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
        alert(value); 
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
        <div class="m-10">
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
        </div>
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
                class="flex flex-col p-4 border-2 border-gray-400 rounded-2xl cursor-pointer"
                for="radio_1"
            >
                <!-- <span class="text-xs font-semibold uppercase">Small</span> -->
                <span class="text-xl font-bold mt-2"
                    >Signed the Agreement with Builder or Seller</span
                >
                <!-- <ul class="text-sm mt-2">
					<li>Thing 1</li>
					<li>Thing 2</li>
				</ul> -->
            </label>
        </div>
        <div>
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
        </div>
    </form>
    <!-- Component End  -->
</div>

<a
    class="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600"
    href="https://twitter.com/lofiui"
    target="_top"
>
    <div
        class="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full"
    >
        <svg
            viewBox="0 0 24 24"
            class="w-4 h-4 fill-current r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
            ><g
                ><path
                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                /></g
            ></svg
        >
    </div>
    <span class="text-sm ml-1 leading-none">@lofiui</span>
</a>

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
    input:checked + label {
        border-color: black;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
</style>
