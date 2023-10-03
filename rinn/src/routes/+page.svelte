<script>
	import "../app.css";
	import Menu from "./menu.svelte";
	import Footer from "./footer.svelte";
	import { home, balance, cookiesArray } from "./start/store";
	import { goto } from "$app/navigation";
	export let data;
	cookiesArray.set(data.allCookies);
	function startButton(values) {
		document.cookie = "Requirment=" + values;
		home.set(values);
		if (values == "Buy A Home") {
			goto("../start/home-loan");
		} else if (values == "Refinance") {
			goto("../start/Property-Location");
		} else if (values == "LAP") {
			balance.set(true);
			goto("../start/Property-Location");
		}
	}
</script>

<Menu {data} />

<section class=" mt-0 bg-green-50">
	<div
		class="w-11/12 grid max-w-screen-xl px-4 py-8 m-auto lg:gap-5 xl:gap-0 lg:py-16 lg:grid-cols-12"
	>
		<div
			class="order-2 m-auto sm:order-1 mr-auto place-self-center lg:col-span-7 gap"
		>
			<p class="bg-yellow-300 p-2 px-3 inline-block rounded-2xl">
				Introducing
			</p>
			<h1
				class="max-w-2xl text-green-900 opacity-90 mb-1 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl"
			>
				One Day Mortgage
			</h1>
			<h1
				class="max-w-2xl text-green-700 mb-4 text-3xl tracking-tight leading-none md:text-4xl xl:text-5xl"
			>
				exclusively at rinn.in
			</h1>
			<p
				class="max-w-md mb-2 font-light text-gray-500 lg:mb-3 md:text-lg lg:text-xl"
			>
				Instead of waiting weeks, now you can lock a rate, share some
				financial info, and get a loan Commitment Letter within the next
				24 hours.
			</p>
			<sup class="text-xsm antialiased text-black-100 opacity-50 mb-8"
				>Customers must qualify. Terms apply.</sup
			>
			<!-- <a on:click={()=>myfun('Home Loan')}
				href="/start/home-loan"
				class=" mb-4 block w-full items-center justify-center py-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
			>
				Buy A Home
			</a> -->
			<button
				on:click={() => startButton("Buy A Home")}
				class=" mb-4 block w-full items-center justify-center py-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
			>
				Buy A Home
			</button>

			<div class="grid grid-cols-2">
				<button
					on:click={() => startButton("Refinance")}
					class=" items-center justify-center py-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
				>
					Refinance
				</button>
				<button
					on:click={() => startButton("LAP")}
					class="mx-2 items-center justify-center py-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
				>
					LAP
				</button>
			</div>
		</div>
		<div
			class="w-4/5 order-1 sm:order-2 lg:mt-0 lg:col-span-5 lg:flex m-8 lg:m-2"
		>
			<img src="/img/one-day-mortgage.svg" class="mx-auto" alt="mockup" />
		</div>
	</div>
</section>
<!-- Devider section for Get Started  -->
<section>
	<div class="bg-green-950 text-white py-6 text-center">
		<a href="/start" class="border p-3 rounded-md">Get Started</a>
	</div>
</section>
<!-- Product Details section -->
<section
	class="bg-green-50 py-10 block justify-around gap-0 sm:block sm:justify-center md:flex"
>
	<div class="w-full p-5 max-w-sm m-auto md:m-10">
		<div class="flex items-baseline text-gray-900">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				Real Estate Agents
			</h2>
		</div>
		<p class="font-sm text-green-800">
			Partner with a local expert and save big.
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>₹2k off rinn.in Mortgage closing costs
				</span>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>Selling? List your home for 0%</span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>Non-commissioned Agents</span
				>
			</li>
			<li class="flex space-x-3">
				<span class="text-base font-normal leading-tight text-gray-500"
					><img
						src="/img/compimg.png"
						alt=""
						class="rounded-lg mt-10"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Learn More</button
		>
	</div>
	<div class=" my-14 w-0.5 h-auto bg-gray-500" />
	<div class="w-full p-5 border-2 sm:border-0 max-w-sm m-auto md:m-10">
		<div class="flex items-baseline text-gray-900">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				Digital home loans
			</h2>
		</div>
		<p class="font-sm text-green-800">
			Low rates. Save thousands. Close fast.
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>Apply 100% online, on your schedule.
				</span>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>No commissions</span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>Close 17 days faster than industry avg.
				</span>
			</li>
			<li class="flex space-x-3">
				<span class="text-base font-normal leading-tight text-gray-500"
					><img
						src="/img/house-isolated-field.jpg"
						alt=""
						class="rounded-lg mt-10"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Get pre-approved</button
		>
	</div>
	<div class=" my-14 w-0.5 h-auto bg-gray-500" />
	<div class="w-full p-5 max-w-sm m-auto md:m-10">
		<div class="flex items-baseline text-gray-900">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				List your home for 0%
			</h2>
		</div>
		<p class="font-sm text-green-800">
			List your home for 0% Traditional agents charge 3% listing fees -
			that‘s ₹15,000 on a ₹500,000 house!¹
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>Buy before you sell</span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>Stress-free homebuying</span
				>
			</li>
			<li class="flex space-x-3">
				<!-- Icon -->
				<svg
					aria-hidden="true"
					class="flex-shrink-0 w-5 h-5 text-green-600 opacity-60"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><title>Check icon</title><path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/></svg
				>
				<span class="text-base font-normal leading-tight text-gray-500"
					>Partner with expert local agents</span
				>
			</li>
			<li class="flex space-x-3">
				<span class="text-base font-normal leading-tight text-gray-500"
					><img
						src="/img/formalboy.jpg"
						alt=""
						class="rounded-lg my-3"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Learn More</button
		>
	</div>
</section>
<!-- Today’s mortgage rates section start -->

<div class=" block justify-around gap-0 sm:block sm:justify-center md:flex">
	<div class=" m-10">
		<h3 class=" text-2xl sm:text-4xl md:text-6xl font-bold my-10">
			Today’s <br /> mortgage rates
		</h3>
		<p class="mb-10 w-full md:w-1/2 text-gray-700">
			Tap that green button to see your personalized mortgage rates and
			custom mortgage recommendation.
		</p>
		<button
			type="button"
			class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-10 py-5 inline-flex justify-center text-center"
			><a href="/mortgage-rates/purchase">See Your Rates</a></button
		>
	</div>
	<div class="m-5 p-5 md:w-2/3 bg-gray-100 rounded-2xl">
		<h3 class="m-auto p-5 text-2xl opacity-60 font-semibold">
			Hey, we currently don’t have service in your area. We will notify
			you when we are there.
		</h3>
		<input
			type="text"
			placeholder="Email"
			class=" w-4/5 block px-10 py-5 m-auto border border-slate-400 bg-gray-100 rounded-lg"
		/>
		<button
			type="submit"
			class="block m-auto border w-4/5 py-5 mt-3 bg-green-800 text-white rounded-xl"
			>Add Email</button
		>
	</div>
</div>

<!-- Container for demo purpose -->

<!-- Section: Design Block -->
<section
	class=" text-gray-800 text-center lg:text-left background-radial-gradient"
>
	<div
		class=" opacity-90 relative w-full overflow-hidden bg-no-repeat bg-cover"
		style="
            background-position: 50%;
            background-image: url('/img/customers.jpeg');
            height: 430px;
          "
	>
		<div
			class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
			style="background-color: rgba(0, 0, 0, 0.75)"
		>
			<div class="flex justify-left items-left h-full">
				<div
					class=" text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px] md:align-middle"
				>
					<h2
						class="text-2xl md:text-4xl xl:text-6xl font-thin leading-5 md:align-middle py-20"
					>
						<p class="md:text-justify text-center">
							"We needed to make an offer the next day. rinn.in
							made it happen.&nbsp;"
						</p>
					</h2>
					<p class="text-lg font-thin">
						Shaina & Tessa | rinn.in Mortgage customers
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Section: Design Block -->
<!-- Container for demo purpose -->
<!-- Today’s mortgage rates section start -->

<div
	class="p-4 w-auto bg-orange-50 block justify-around gap-0 mt-0 sm:block sm:justify-center"
>
	<div class="bg-green-950 md:flex mt-5 p-10 m-0 rounded-2xl">
		<div class="">
			<h3 class="w-3/5 text-4xl font-bold text-white my-8">
				The tools you need to make that next step
			</h3>
			<p class="mb-8 text-white w-2/3 text-justify">
				How much home can I afford? Should I pay points to get a lower
				rate? Should I refinance? Tap to find out.
			</p>
			<button
				type="button"
				class=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-10 py-5 inline-flex justify-center text-center"
				><a href="/mortgage-rates/purchase">See Your Rates</a></button
			>
		</div>
		<div class=" rounded-2xl">
			<img src="/img/mortgage-calculator.jpeg" alt="" srcset="" />
			<small style="font-size: 10px;color:white;"
				>Image is for example purposes only. Your actual rates, monthly
				payment, and loan amount will vary.</small
			>
		</div>
	</div>
</div>

<!-- Container for demo purpose -->
<section
	class="bg-green-50 py-10 block justify-around gap-0 sm:block sm:justify-center md:flex"
>
	<div class="w-full p-5 max-w-sm m-auto md:m-10">
		<div class="flex items-baseline text-gray-900">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				Look Before You Lock:
				<br />Why Rates Matter
			</h2>
		</div>
		<p class="font-sm text-green-800 text-justify">
			Almost half of all homebuyers don’t compare mortgage lenders before
			locking a rate. But small rate differences can add up to big
			savings.
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<span class="text-base font-normal leading-tight text-gray-500"
					><img
						src="/img/look-before-you-lock.jpeg"
						alt=""
						class="rounded-lg mt-10"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Learn More</button
		>
	</div>
	<div class=" my-14 w-0.5 h-auto bg-gray-500" />
	<div class="w-full p-5 max-w-sm m-auto md:m-10">
		<div class="flex items-baseline text-gray-900">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				What’s a Good DTI for a Home Loan?
			</h2>
		</div>
		<p class="font-sm text-green-800 text-justify">
			When you apply for a mortgage, the top three things lenders look at
			are your income, your credit score, and your debt-to-income ratio,
			or DTI.
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<span class="text-base font-normal leading-tight text-gray-500"
					><img
						src="/img/whats-a-good-dti-for-home-loan.jpeg"
						alt=""
						class="rounded-lg mt-10"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Learn More</button
		>
	</div>
	<div class=" my-14 w-0.5 h-auto bg-gray-500" />
	<div class="w-full p-5 max-w-sm m-auto md:m-10">
		<div class="flex items-baseline text-gray-900">
			<h2 class=" py-3 text-3xl font-bold tracking-tight text-green-950">
				Understanding Your Down Payment
			</h2>
		</div>
		<p class="font-sm text-green-800 text-justify">
			Housing prices are rising across the country, and low down payment
			mortgages make it easier for homebuyers to enter the housing market.
		</p>
		<!-- List -->
		<ul role="list" class="space-y-5 my-7">
			<li class="flex space-x-3">
				<span class="text-base font-normal leading-tight text-gray-500"
					><img
						src="/img/understanding-your-down-payment.jpeg"
						alt=""
						class="rounded-lg mt-10"
					/></span
				>
			</li>
		</ul>
		<button
			type="button"
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
			>Learn More</button
		>
	</div>
</section>
<section class="bg-white">
	<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
			<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
				<div class="flex items-center gap-4">
					<img
						alt="Man"
						src="/img/better-customers-mateo-n-alejendra.jpeg"
						class="h-14 w-14 rounded-full object-cover"
					/>

					<div>
						<div class="flex justify-center gap-0.5 text-green-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>
					</div>
				</div>

				<p class="mt-4 text-gray-700 text-xl">
					We needed to make an offer the next day. Better made it
					happen.
				</p>
				<br />
				<p>
					En route to a hike, Shaina and Tessa unexpectedly stumbled
					upon their dream home, not at all ready to make an offer.
					<br /><br />
					Just 17 hours later, they applied for a loan online with Better
					Mortgage, put in a bid, and the home was theirs.
				</p>
			</blockquote>

			<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
				<div class="flex items-center gap-4">
					<img
						alt="Man"
						src="/img/progressImg.jpg"
						class="h-14 w-14 rounded-full object-cover"
					/>

					<div>
						<div class="flex justify-center gap-0.5 text-green-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>
					</div>
				</div>

				<p class="mt-4 text-gray-700 text-xl">
					We did the math on the next 30 years. It was cheaper to own.
				</p>
				<br />
				<p>
					When Mateo and Alejandra first saw their neighborhood, it
					was a dirt field.
					<br /><br />
					One year later, their newly constructed home was finished, and
					Better Mortgage beat every single one of the incentives offered
					by the builder’s lender
				</p>
			</blockquote>

			<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
				<div class="flex items-center gap-4">
					<img
						alt="Man"
						src="/img/understanding-your-down-payment.jpeg"
						class="h-14 w-14 rounded-full object-cover"
					/>

					<div>
						<div class="flex justify-center gap-0.5 text-green-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>
					</div>
				</div>

				<p class="mt-4 text-gray-700">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
					illo est quia obcaecati neque quibusdam eius accusamus error
					officiis atque voluptates magnam!
				</p>
			</blockquote>
		</div>
	</div>
</section>
<Footer />
