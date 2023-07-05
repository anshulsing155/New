<script>
    import { goto } from "$app/navigation";

    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 42.9;
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Type of Property=" + value;
        event.currentTarget.value;
        if (event.currentTarget.value == "Row House") {
            goto("../start/properties-owned");
        } else if (event.currentTarget.value == "Flat") {
            goto("../start/properties-owned");
        } else if (event.currentTarget.value == "Floor") {
            goto("../start/properties-owned");
        }
         else if (event.currentTarget.value == "Plot") {
            goto("../start/properties-owned");
        }
    }
</script>
<!-- 
<ProgressBar {progress} />
<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input on:change={onChange} type="radio" value="Row House" /> Row House
        </label>
        <label>
            <input on:change={onChange} type="radio" value="Flat" /> Flat
        </label>
        <label>
            <input on:change={onChange} type="radio" value="Floor" /> Floor
        </label>
        <label>
            <input on:change={onChange} type="radio" value="Plot" /> Plot
        </label>
    </form>
</main>
 -->

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
                value="Row House"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Row House</span
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
                value="Floor"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Floor</span
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
                value="Flat"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Flat</span
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
                value="Plot"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Plot</span
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
