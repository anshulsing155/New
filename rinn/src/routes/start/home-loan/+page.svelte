<script>
    import { goto } from "$app/navigation";
    import { path } from "../store";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 7.15;
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
                value="Signed the Agreement with Builder or Seller"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Signed the Agreement with Builder or Seller</span
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
                value="Property Finalised but Agreement is not signed. Need Sanction Letter to see eligiblity ( Validity 3 months)"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Property Finalised but Agreement is not signed. Need
                    Sanction Letter to see eligiblity ( Validity 3 months)</span
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
                value="Need only Sanction letter (Validity 3 months)"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Need only Sanction letter (Validity 3 months)</span
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
