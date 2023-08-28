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
            Mortgage rates today for <span class="underline text-green-600"
                >122017</span
            >
        </p>
    </div>
    <div>
        <h2 class="mx-20 px-3 mt-5">
            <div class="text-green-700 font-light text-4xl m-3">
                No commissions.
            </div>
            <div class="text-blue-800 font-thin text-5xl m-3 font-sans">
                Fast pre-approval, with no hard credit pull.
            </div>
        </h2>
    </div>
    <div>
        <p>
            <small class="ml-4">
                The below rates are estimated rates current as of: 2:41 p.m.
                GMT+5:30 on Aug 24
            </small>
        </p>
    </div>
    <div class="grid justify-items-center mt-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
        </svg>
        <p class="font-semibold">
            Looks like we couldn’t find any loans that matched.
        </p>
        <p>Try making some adjustments to broaden your options.</p>
    </div>
    <div class="inline-flex ml-24 mt-8">
        <p class="text-2xl font-normal">Have another rate?</p>
        <a href="#" class="font-normal text-2xl text-green-600"
            >Let us match it →</a
        >
    </div>
    <br />
    <div class="grid justify-items-center lg:grid-cols-2 mt-4">
        <div>
    
           <iframe class= "lg:h-96 lg:w-96" src="https://www.youtube.com/embed/r9jwGansp1E"/>
           <p class="font-semibold md:w-72 lg:w-96 "><a href="https://www.youtube.com/embed/r9jwGansp1E">The diffrence Between "Fixed rate" and "Adjustable"</a></p>
        </div>
        <div>
            
            <iframe class= "lg:h-96 lg:w-96" src="https://www.youtube.com/embed/r9jwGansp1E"/>
            <p class="font-semibold ml-4 md:w-72 lg:w-96"><a href="https://www.youtube.com/embed/r9jwGansp1E">What are the points and credits?</a></p>
        </div>
    </div >
    <div class=" mt-8">
        <ul class="list-disc text-sm ml-32 mr-16 mt-8">
            <li>Rates can change several times a day, so we make sure you have the latest. We updated them at 3:08 a.m. PDT on Aug 25. Interest rates and APRs are for informational purposes and do not include all applicable fees. Your actual rates, payments, and costs may differ.</li>
            <li>Rates and fees are as of time displayed above and are subject to change without notice.</li>
            <li>The one-time costs shown include points/credits and third-party fees. An escrow deposit, pre-paid interest, and other charges may be required depending on your situation.</li>
            <li>We don’t yet have your complete financial picture. Your actual rate, payment and costs could be higher. Get an official Loan Estimate before choosing a loan.</li>
            <li>Loan approval is subject to underwriter review: not everyone who applies will be approved.</li>
            <li>We also assume: closing costs are paid out of pocket; your debt-to-income ratio is below 35%; you are purchasing or refinancing a single-family home that is your primary residence; you are making a down payment of 20%; and your credit score is 760 or higher.</li>
            <li>Refinancing may cause your finance charges to be higher over the life of the loan.</li>
        </ul>


    </div>
   
</section>
<Footer />
