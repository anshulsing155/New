<script>
    import { goto } from "$app/navigation";
    import ProgressBar from "../../components/ProgressBar.svelte";
    let progress = 35.75;
   
    function onChange(event) {
        let value = event.currentTarget.value;
        document.cookie = "Is it part of Master plan of City ="+value;
        if (event.currentTarget.value == "Property selected is : Authorised") {
            goto("../start/Property-Type");
        } else if (event.currentTarget.value == "Property selected is : UnAuthorised") {
            goto("../start/Property-Type");
        } else if (event.currentTarget.value == "Property selected is : Don't Know") {
            goto("../start/Property-Type");
        }
    }
</script>
<!-- <ProgressBar {progress} />
<main>
    <form class="form-container" action="" method="POST">
        <label>
            <input
                checked={selected === 10}
                on:change={onChange}
                type="radio"
               
                value="Property selected is : Authorised"
            /> Authorised
        </label>
        <label>
            <input
                checked={selected === 20}
                on:change={onChange}
                type="radio"
               
                value="Property selected is : UnAuthorised"
            /> UnAuthorised
        </label>
        <label>
            <input
                checked={selected === 30}
                on:change={onChange}
                type="radio"
                
                value="Property selected is : Don't Know"
            /> Don't Know
        </label>
    </form>
</main> -->
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
                value="Property selected is : Authorised"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Authorised</span
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
                value="Property selected is : UnAuthorised"
            />
            <label
                class="flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >UnAuthorised</span
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
                value="Property selected is : Don't Know"
            />
            <label
                class=" flex flex-col p-4 border-2 border-gray-400 rounded-lg cursor-pointer"
                for="radio_1"
            >
                <span class="text-lg my-auto"
                    >Don't Know</span
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
