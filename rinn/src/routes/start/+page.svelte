<script>
    import { goto } from "$app/navigation";
    import { balance } from "./store.js";
    import { home } from "./store.js";
    import ProgressBar from "../components/ProgressBar.svelte";
    // import { formValue } from "./formData.js";
    // import { onMount } from "svelte";
    // // let inputValue;
    // formValue.subscribe((value) => {
    //     inputValue = value;
    // });
    // import { MongoClient } from "mongodb"
// import { parse } from 'cookie';
// import { DB_URI } from '$env/static/public';
// DB_UR = process.env('DB_URI');
// import { DB_URI } from 'dotenv';

// const DB_URI='mongodb+srv://rinn:rinn@dev-cluster.s2g8r6v.mongodb.net/';

// const client = new MongoClient(DB_URI)

// export async function connect() {
//     try {
//       await client.connect();
//       console.log('Connected to MongoDB');
//     } catch (error) {
//       console.error('Failed to connect to MongoDB:', error);
//     }
//   }
    
    let progress = 0;
    function onChange(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.value);
    //     const values = Object.fromEntries(data.entries());
    //    let newValue =  JSON.stringify(values)
    //     console.log({ newValue });
        let value = event.currentTarget.value;
        document.cookie = "Requirment=" + value;
        home.set(value);
        // $formValue = [...$formValue, {
		// 	name: value
		// }];
        

        if (event.currentTarget.value == "Home Loan") {
            goto("../start/home-loan");
           
        } else if (event.currentTarget.value == "LAP") {
            goto("../start/Property-Location");
        } else if (event.currentTarget.value == "Balance Transfer") {
            balance.set(true);
            goto("../start/Property-Location");
        }
        // document.getElementById("form").submit();
    }
//     onMount(async () => {
//         const form = document.querySelector('form');
//   form.addEventListener('submit', onChange);
//   });
  
    
</script>

<ProgressBar {progress} />
<div class="flex items-center justify-center mb-20">
    <form class="w-full max-w-screen-sm" id="form" method="Post">
        <div class="m-10">
            <input
                
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                value="Home Loan"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto">Home Loan</span>
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_2"
                type="radio"
                name="radio"
                value="LAP"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_2"
            >
                <span class="text-lg my-auto">LAP</span>
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_3"
                type="radio"
                name="radio"
                value="Balance Transfer"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_3"
            >
                <span class="text-lg my-auto">Balance Transfer</span>
            </label>
        </div>
    </form>
</div>

<style>
    label {
        padding: 2rem 4rem;
        height: 100px;
        overflow: auto;
    }
    label:hover {
        border-color: green;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
</style>
