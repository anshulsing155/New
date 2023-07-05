<script>
    import { goto } from "$app/navigation";
    import { balance } from "../store";
    let selected = "";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 50.05;
    let countValue;

    balance.subscribe((value) => {
        countValue = value;
    });
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "No. of properties already owned=" + value;
        if (countValue == true) goto("../start/Financial-Institution");
        else if (
            event.currentTarget.value == "0 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        } else if (
            event.currentTarget.value == "1-2 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        } else if (
            event.currentTarget.value == "More then 2 Property" &&
            countValue == false
        ) {
            goto("../start/Referral");
        }
    }
</script>
<!-- 
<ProgressBar {progress} />
<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input on:change={onChange} type="radio" value="0 Property" /> 0 Property
        </label>
        <label>
            <input on:change={onChange} type="radio" value="1-2 Property" /> 1-2
            Property
        </label>
        <label>
            <input
                on:change={onChange}
                type="radio"
                value="More then 2 Property"
            /> More then 2 Property
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
                value="0 Property"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >0 Property</span
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
                value="1-2 Property"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >1-2 Property</span
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
                value="More then 2 Property"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >More then 2 Property</span
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
