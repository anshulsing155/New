<script>
    import Menu from '../menu.svelte';
    import Footer from '../footer.svelte'
   
</script>

<Menu />
<section class="bg-white-50 lg:flex">
    <div class="container w-1/2 mx-24 mt-14  ">
        <div class="text-green-700 font-semibold ml-8 text-xl">
            <p>Better Real Estate</p>
        </div>
        <div class="font-semibold ml-8 text-5xl mt-3">
            <h1>Get an agent who can help</h1> 
            <h1>you make the right offer</h1>
        </div>
        <div class="ml-12 mt-8 inline-flex">

            <span class="dot mt-3">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto mt-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  
            </span>
            <div class="text-2xl font-semibold ml-4 ">
                <p>Use data-driven insights to find out exactly how <br> much to offer</p>
            </div>
        </div>
        <div class="bg-green-600 w-36 h-14 rounded ml-8 mt-10">
            <button class="text-slate-100 text-xl font-semibold ml-8 mt-3">Get Start</button>
        </div>

    </div>
    <div class="w-auto">
        <img src="/img/welcome-step-hero.png">
    </div>


</section>



<Footer />
<style>
    .dot {
  height: 40px;
  width: 40px;
  background-color: rgb(85, 158, 85);
  border-radius: 50%;
  display: inline-block;
}
</style>



