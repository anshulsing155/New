<!-- <script>
  import { getCookie } from '@sveltejs/kit-cookie';

  let cookies = {};

  function getCookies() {
    const cookieString = getCookie();
    const cookieArray = cookieString.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim().split('=');
      const name = cookie[0];
      const value = cookie[1];
      cookies[name] = value;
    }
  }

  // Call the function to get cookies on component initialization
  getCookies();
</script>

<p>Available cookies:</p>
<ul>
  {#each Object.keys(cookies) as cookieName}
    <li>{cookieName}: {cookies[cookieName]}</li>
  {/each}
</ul> -->
<script>
  import { onMount } from "svelte";
  import "../../app.css";
  let cookies = [];
  
  onMount(() => {
    cookies = document.cookie.split("; ").map((cookieString) => {
      const [name , value] = cookieString.split("=");
      // console.log([name , value])
      
      return { name, value };
    });
  });
</script>
<!-- 
<main class="text-center font-mono text-xl">
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4 text-center">All Saved User Data</th>
            </tr>
          </thead>
          <tbody>
            {#each cookies as cookie}
            <tr class="border-b dark:border-neutral-500"></tr>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{cookie.name}</td>
              <td class="whitespace-nowrap px-6 py-4 text-xl">{cookie.value}</td>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</main>
<form action="" method="post">
  <input type="submit" value="submit">
</form> -->

<!-- <form action="" method="POST">
  {#each cookies as cookie}
    <input type="text" name={cookie.name} value={cookie.value} />
  {/each}
 <input type="text" name="Requirment" value="HomeLoan" class="s-7rWotIBe7yq4"> 
  <button type="submit">Submit</button>
</form> -->






<!-- component -->
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Form with Floating Labels</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <style>
  input {
    display: block;
    /* visibility: hidden; */
  }
  button {
    display: block;
    padding: 10px;
    margin: 10px;
    border: 2px dashed gray;
    border-radius: 5px;
    background-color: aquamarine;
  }
</style> -->
