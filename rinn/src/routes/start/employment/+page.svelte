<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 7.15;
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Type of Employment=" + value;
        event.currentTarget.value;
        if (
            event.currentTarget.value ==
            "Salaried"
        ) {
            goto("../start/Documents");
        } else if (
            event.currentTarget.value ==
            "Self Employed Businessman"
        ) {
            goto("../start/Documents");
        } else if (
            event.currentTarget.value ==
            "Self employed Professional"
        ) { 
            goto("../start/Documents");
        }
        else if (
            event.currentTarget.value ==
            "Retired"
        ) { 
            goto("../start/Documents");
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
                
                value="Salaried"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Salaried</span
                >
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_2"
                type="radio"
                name="radio"
                
                value="Self Employed Businessman"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_2"
            >
                <span class="text-lg my-auto"
                    >Self Employed Businessman</span
                >
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_3"
                type="radio"
                name="radio"
                
                value="Self employed Professional"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_3"
            >
                <span class="text-lg my-auto"
                    >Self employed Professional</span
                >
            </label>
        </div>
        <div class="m-10">
            <input
                on:change={onChange}
                class="hidden"
                id="radio_3"
                type="radio"
                name="radio"
                
                value="Retired"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_3"
            >
                <span class="text-lg my-auto"
                    >Retired</span
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
