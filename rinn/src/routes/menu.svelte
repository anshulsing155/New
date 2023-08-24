<script>
    import "../app.css";
    let isOpen = true;

function toggleMenu() {
  isOpen = !isOpen;
}
</script>
    

<div class="w-full bg-gray-100">
    <div class=" flex flex-row justify-between w-11/12 p-4 m-auto">
        <div>
            <p>
                <strong>$100 billion</strong> in online home loans
            </p>
        </div>
        <div class="order-1">
            
            <p>
                <a href="tel:4155238837"> (415) 523 8837</a><span
                    >Questions?</span
                > Give us a call.
            </p>
        </div>
    </div>
</div>
<header class="">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div
            class=" w-11/12 p-2 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
        >
            <a href="/" class="flex items-center">
                <!-- <img
                    src="#"
                    class="mr-3 h-6 sm:h-9"
                    alt=" Logo"
                /> -->
                <span
                    class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                    >ऋण.In</span
                >
            </a>
            <div class="flex items-center lg:order-2">
                <a
                    href="/login"
                    class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                    >Sign In</a
                >
                <a
                    href="/start"
                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                    >Get Started</a
                >
                <button
                    on:click={toggleMenu}
                    type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        /></svg
                    >
                    <svg
                        class="hidden w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        /></svg
                    >
                </button>
            </div>
            <div
                class="{isOpen ? "hidden" : "block"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul
                    class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
                >
                    <li class="dropdown ">
                        <a
                            href="#"
                            class="  py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white">Buy or Sell</a
                        >
                        <!-- <div class="caret m-2"></div> -->
                        <ul
                            class="dropdown-menu absolute hidden bg-white z-50  w-60 text-gray-700 "
                            >
                            <br>
                                <li class="hover:bg-gray-200 ">
                                    
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="/start/home-loan">Apply Now</a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="/mortgage-rates/purchase">Purchase rates
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        Find an Agent
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        
                                        Mortgage calculator
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        
                                        
                                        Learning Center</a
                                    >
                                </li>
                            </ul>
                    </li>
                    <li class="dropdown ">
                        <a
                            href="#"
                            class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white">Refinance</a
                        >
                        <ul
                            class="dropdown-menu absolute hidden bg-white z-50 py-2 w-60 text-gray-700"
                            >   
                            <br>
                                <li class="hover:bg-gray-200 ">
                                    
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">Apply Now</a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="/mortgage-rates/refinance">Purchase rates
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        Find an Agent
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        
                                        Mortgage calculator
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        
                                        
                                        Learning Center</a
                                    >
                                </li>
                            </ul>
                    </li>
                    <li class="dropdown">
                        <a
                            href="#"
                            class=" py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white">LAP</a
                        > <!--<div class="caret "></div> -->
                        <ul
                            class="dropdown-menu absolute hidden bg-white z-50 py-2 w-60 text-gray-700"
                            >
                            <br>
                                <li class="hover:bg-gray-200 block">
                                    
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">Apply Now</a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">Purchase rates
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        Find an Agent
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        
                                        Mortgage calculator
                                        </a
                                    >
                                </li>
                                <li class="hover:bg-gray-200">
                                    <a
                                        class="rounded-t hover:bg-gray-200 py-4 px-6 block whitespace-normal "
                                        href="#">
                                        
                                        
                                        Learning Center</a
                                    >
                                </li>
                            </ul>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            >Rates</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            >Better+</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            >Home Search
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<!-- 
<nav class=" text-green-800">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-3">
        <div class="flex items-center">
          <a href="#" class="text-xl font-bold">ऋण.In</a>
        </div>
        <div class="hidden md:flex space-x-4">
          <a href="#" class="hover:text-gray-300"></a>
          <a href="#" class="hover:text-gray-300">About</a>
          <a href="#" class="hover:text-gray-300">Services</a>
          <a href="#" class="hover:text-gray-300">Contact</a>
        </div>
        <div class="md:hidden">
          <button class="focus:outline-none" on:click={toggleMenu}>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {#if isOpen}
        <div class="md:hidden mt-2 space-y-2">
          <a href="#" class="block hover:text-gray-300">Home</a>
          <a href="#" class="block hover:text-gray-300">About</a>
          <a href="#" class="block hover:text-gray-300">Services</a>
          <a href="#" class="block hover:text-gray-300">Contact</a>
        </div>
      {/if}
    </div>
  </nav> -->
<!-- 
<style>
    .dropdown:hover .dropdown-menu {
  display: block;
}
.caret{
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid black;
    transition: 0.3s;
}
.caret-rotate {
    transform: rotate(180deg);
}
</style> -->
<!-- 
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <div class="flex md:order-2">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
   -->