<script>
   
    import { goto } from "$app/navigation";
    import { balance } from './store.js';
    import { home } from './store.js';
    import ProgressBar from "../components/ProgressBar.svelte";


    let progress = 0;
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Requirment="+value;
        
            home.set(value);
        if (event.currentTarget.value == "Home Loan") {
            goto("../start/home-loan");   
        } else if (event.currentTarget.value == "LAP") {
            goto("../start/Property-Location");  
        } else if (event.currentTarget.value == "Balance Transfer") {
            balance.set(true);
            goto("../start/Property-Location");
            
        }
    }
    
    
</script>
<ProgressBar {progress} />
<div class="flex items-center justify-center mb-20">
    <form class="w-full max-w-screen-sm">
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
                value="Home Loan"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Home Loan</span
                >
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
                value="LAP"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >LAP</span
                >
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
                value="Balance Transfer"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Balance Transfer</span
                >
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
