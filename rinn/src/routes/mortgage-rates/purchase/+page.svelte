<script>
    
    import Menu from "../../menu.svelte";
    import Footer from "../../footer.svelte";
    let isOpen = true;
    function toggleDropdown() {
        isOpen = !isOpen;
    }
</script>

<Menu />
<section class=" bg-green-50">
    <div class=" container m-auto">
        <div class="inline-flex ml-14">
            <button
                class="inline-flex rounded-md px-3 py-2 text-5xl font-bold text-green-700"
                id="menu-button"
                on:click={toggleDropdown}
            >
                Purchase
                <svg
                    class=" h-5 mt-3 w-5 text-green-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
        </div>
        {#if !isOpen}
            <div
                class="ml-14 absolute z-10 mt-2 w-56 origin-top-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
            >
                <div class="py-1 px-5" role="none">
                    <a
                        href="/"
                        class="text-gray-700 block px-4 py-2 text-lg"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0">Purchase</a
                    >
                    <a
                        href="/refinance"
                        class="text-gray-700 block px-4 py-2 text-lg"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1">Refinance</a
                    >
                    <a
                        href="lap"
                        class="text-gray-700 block px-4 py-2 text-lg"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2">LAP</a
                    >
                </div>
            </div>
        {/if}
        <p
            class="ml-14 px-3 md:mr-20 md:inline md:float-right my-4 rounded-md text-2xl text-gray-500 font-semibold"
            id="menu-button"
        >
            Mortgage rates today for <span class="underline text-green-600">122017</span>
        </p>
    </div>
    <div>
        <h2 class="mx-20 px-3 mt-5">
            <div class="text-green-700 font-light text-4xl m-3">No commissions.</div>
            <div class="text-blue-800 font-thin text-5xl m-3 font-sans">
                Fast pre-approval, with no hard credit pull.
            </div>
        </h2>
    </div>
    <div>
        <p>
            <small>
                The below rates are estimated rates current as of: 2:41 p.m. GMT+5:30 on Aug 24
            </small>
        </p>
    </div>
</section>
<Footer />
